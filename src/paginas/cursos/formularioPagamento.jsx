import React, {Component} from 'react'

import CarrinhoView from './carrinhoView'
import MsgFinal from './msgFinal'

import axios from 'axios'
import {myConfig} from '../../main/consts'
import './form-pagamento.css'
import If from '../../components/if/if'
import {validaCPF, checkMail} from "../../common/helpers/functionsValidade";

import ShowMessage from '../../components/formulario/showMessage'


export default class FormularioPagamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            num_cpf: '',
            email: '',
            num_telefone: '',
            valor_total:'',
            qtd_parcela:'',
            car_senderHash:'',
            car_nome: '',
            car_numero: '',
            brand_name: '',
            car_cvv: '',
            car_mes: '',
            car_ano: '',
            vlr_parcela:'',
            creditCardToken:'',
            paymentMode: '', //Alterna os botões de forma de pagamento

            code:'',
            payment_link:'',
            reference:'',
            status:false,

            showForm: true, //Mostra formulário ou mensagem de sucesso/erro

            listaCursos: [],
            errorMessage: '',
            successMessage: false, //Mostra mensagem de validação do formulário
            optionTemplate: [] //Options de parcelamento

        };
        this.handleChange = this.handleChange.bind(this);
        this.onlyNumber = this.onlyNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.paymentMode = this.paymentMode.bind(this);
        this.chengePaymentMode = this.chengePaymentMode.bind(this);
        this.validaForm = this.validaForm.bind(this);
        this.getBrand = this.getBrand.bind(this);
        this.getAmount = this.getAmount.bind(this);
        this.gerarBoleto = this.gerarBoleto.bind(this);
    }
    componentDidMount(){
        this.setState({
            ...this.state,
            valor_total: this.getAmount(),
            car_senderHash: PagSeguroDirectPayment.getSenderHash()
        });
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            listaCursos: this.props.listaCursos
        });

        //Inicia sessão com pagseguro
        axios.post(`${myConfig.apiUrl}/init-session-ps`).then(response => {

            const pgSessionId = response.data.idSession[0];

            //Salva sessão pagseguro no localStorage
            localStorage.setItem('pgSessionId', pgSessionId);

            //Salva sessão no pagseguro
            PagSeguroDirectPayment.setSessionId(pgSessionId)

        }).catch(function (error) {
            console.log(error);
        });
    }

    /**
     * Recupera o nome da operadora do cartão
     * @param numCard
     */
    getBrand(numCard) {
        PagSeguroDirectPayment.getBrand({
            cardBin: numCard,
            success:(response) => {
                this.setState({
                    ...this.state,
                    brand_name: response.brand.name
                });
            },
            error: (response) => console.log('error', response),
            complete: (response) => {
                this.getInstallments(response.brand.name);
            }
        });
    }

    /**
     * Recupera as formas de parcelamentos e chama a função 'formasPagamento' que monta as options
     * para o select de parcelas
     */
    getInstallments(brandName) {
        PagSeguroDirectPayment.getInstallments({
            amount: this.state.valor_total,
            maxInstallmentNoInterest: 10,
            brand: brandName,
            success: (response) => {
                this.formasPagamento(response.installments[brandName]);
            },
            error: (response) => console.log('error...', response),
            complete: (response) => console.log('complete...', response)
        })
    };

    /**
     * Monta as options do select com o retorno do pagseguro
     * @param parcelas
     */
    formasPagamento(parcelas) {
        let optionTemplate = parcelas.map((elem, i) => {
            return(
                <option value={`${elem.quantity} - ${elem.installmentAmount}`} key={i}>
                    { `${elem.quantity}x de ${elem.installmentAmount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} `}
                </option>
            );
        });

        this.setState({
            ...this.state,
            optionTemplate: optionTemplate,
            qtd_parcela: `${parcelas[0].quantity} - ${parcelas[0].installmentAmount}`
        });
    }

    /**
     * Recupera o valor total da compra
     * @returns {number}
     */
    getAmount() {
        let cursos = this.state.listaCursos;
        let soma = 0;
        if (cursos.length > 0) {
            soma = cursos.reduce((preVal, elem) => {
                return preVal + elem.valor
            }, 0);
        }
        return soma;
    };

    /**
     * Gera o token do cartão de crédito e salva no state
     */
    getCreateCardToken() {
        PagSeguroDirectPayment.createCardToken({
            cardNumber: this.state.car_numero.replace(/[^0-9.]/g,""),
            brand: this.state.brand_name,
            cvv: this.state.car_cvv.replace(/[^0-9.]/g,""),
            expirationMonth: this.state.car_mes.replace(/[^0-9.]/g,""),
            expirationYear: this.state.car_ano.replace(/[^0-9.]/g,""),
            success: (response) => {
                this.setState({
                    ...this.state,
                    creditCardToken: response.card.token
                });
            },
            error: (response) => { console.log('response error', response)},
            complete: (response) => { console.log('response complete', response)}
        });
    }

    onlyNumber(evt) {

        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            evt.preventDefault();
        } else {
            return true;
        }
    }

    /**
     * Gerencia os inputs do formulário
     * @param e
     */
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        //Remove classe de erro.
        target.parentNode.classList.remove('has-error');

        this.setState({
            ...this.state,
            [name]: value,
            errorMessage: ''
        }, () => {
            if (name === 'car_numero' && value.length >= 6) {
                this.getBrand(value);
            }
            if(name === 'car_ano') {
                //Chama função para criar token do cartão
                this.getCreateCardToken();
            }
        });
    }

    /**
     * Envia o formulário
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();

        //Valida dados do Cartão
        if (this.state.paymentMode === 'cartao') {
            if (this.validaCartao()) {

                let dataSend = {
                    nome: this.state.nome,
                    num_cpf: this.state.num_cpf,
                    email: this.state.email,
                    num_telefone: this.state.num_telefone,
                    valor_total: this.state.valor_total,
                    qtd_parcela: this.state.qtd_parcela,
                    car_senderHash: this.state.car_senderHash,
                    car_nome: this.state.car_nome,
                    car_numero: this.state.car_numero,
                    brand_name: this.state.brand_name,
                    car_cvv: this.state.car_cvv,
                    car_mes: this.state.car_mes,
                    car_ano: this.state.car_ano,
                    vlr_parcela: this.state.vlr_parcela,
                    car_ano: this.state.car_ano,
                    creditCardToken: this.state.creditCardToken,
                    paymentMode: this.state.paymentMode,
                    listaCursos: this.state.listaCursos
                };

                //Inicia sessão com pagseguro
                axios.post(`${myConfig.apiUrl}/comprar-curso`, dataSend).then(response => {

                    console.log('response cartão', response.data.result);

                    this.setState({
                        ...this.state,
                        load: false,
                        code: response.data.result.code,
                        payment_link: response.data.result.payment_link,
                        reference: response.data.result.reference,
                        status: response.data.result.success,
                        showForm: false
                    });

                    localStorage.removeItem('curso');
                    localStorage.removeItem('pgSessionId');



                }).catch(function (error) {
                    console.log(error);
                });

            }
        }
    }

    gerarBoleto() {

        let dataSend = {
            nome: this.state.nome,
            num_cpf: this.state.num_cpf,
            email: this.state.email,
            num_telefone: this.state.num_telefone,
            valor_total: this.state.valor_total,
            senderHash: this.state.car_senderHash,
            paymentMode: this.state.paymentMode,
            listaCursos: this.state.listaCursos
        };


        //Gera o Boleto
        axios.post(`${myConfig.apiUrl}/gerar-boleto`, dataSend).then(response => {

            this.setState({
                ...this.state,
                load: false,
                code: response.data.result.code,
                payment_link: response.data.result.payment_link,
                reference: response.data.result.reference,
                status: response.data.result.success,
                showForm: false
            });

            localStorage.removeItem('curso');
            localStorage.removeItem('pgSessionId');

        }).catch(function (error) {
            console.log(error);
        });
    }

    validaForm() {
        let nomeErro = false;
        let arNome = this.state.nome.split(' ');


        //Valida se tem sobrenome
        if(arNome.length > 1) {
            if (arNome[1] === '') {
                nomeErro = true;
            }
        } else {
            nomeErro = true;
        }

        if(nomeErro === true) {
            let elem = document.querySelector('#nome');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório. Favor informar nome completo'
            });
            return false;
        }


        //Valida cpf
        if (this.state.num_cpf === '') {
            let elem = document.querySelector('#num_cpf');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        } else if (validaCPF(this.state.num_cpf) === false) {
            let elem = document.querySelector('#num_cpf');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'CPF Inválido'
            });
            return false;
        }

        //Valida Email
        if (this.state.email === '') {
            let elem = document.querySelector('#email');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        } else if (checkMail(this.state.email) === false) {
            let elem = document.querySelector('#email');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Email Inválido'
            });
            return false;
        }

        //Valida Telefone
        if (this.state.num_telefone === '') {
            let elem = document.querySelector('#num_telefone');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        }
        return true;
    }

    /**
     * Valida dados do cartão
     * @returns {boolean}
     */
    validaCartao() {

        //Valida nome
        if (this.state.car_nome === '') {
            let elem = document.querySelector('#car_nome');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        }

        //Valida número
        if (this.state.car_numero === '') {
            let elem = document.querySelector('#numeroCartao');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        }

        //Valida cvv
        if (this.state.car_cvv === '') {
            let elem = document.querySelector('#car_cvv');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        }

        //Valida mes
        if (this.state.car_mes === '') {
            let elem = document.querySelector('#car_mes');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        }

        //Valida ano
        if (this.state.car_ano === '') {
            let elem = document.querySelector('#car_ano');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        }
        return true;
    }

    /**
     * Mostra Painel com a forma de pagamento escolhida
     * @param payment
     * @returns {XML}
     */
    paymentMode(payment) {
        switch (payment) {
            case 'boleto':
                return (
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <span><i className="fa fa-barcode"></i></span> Boleto Bancario
                        </div>
                        <div className="panel-body">
                            <div className="payment-box">
                                <h2>Fique atento(a) ao detalhes:</h2>
                                <ol>
                                    <li>Boleto (somente à vista)</li>
                                    <li>Pagamentos com Boleto Bancário levam até 3 dias úteis para serem compensados e então terem os produtos liberados</li>
                                    <li>Fique atento(a) ao vencimento do boleto. Você pode pagar o boleto em qualquer banco ou casa lotérica até o dia do vencimento</li>
                                    <li>Depois do pagamento, fique atento ao seu e-mail para receber os dados de acesso ao produto (verifique também a caixa de SPAM)</li>
                                </ol>
                            </div>
                            <a onClick={() => this.gerarBoleto()} className='btn btn-success right'>Gerar Boleto</a>
                        </div>
                    </div>
                );

            case 'cartao':
                return (
                    <div className="panel panel-success">
                        <div className="panel-heading"><span><i
                            className="fa fa-credit-card"></i></span> Cartão de Crédito
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-12"><strong>Nome Cartão:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" className="form-control" name="car_nome" id='car_nome'
                                           value={this.state.car_nome}
                                           onChange={this.handleChange}
                                           maxLength={150}
                                           placeholder='Nome Igual do Cartão'/>
                                </div>
                            </div>
                            <div className="col-md-8 col-xs-12 form-group">
                                <label htmlFor="nome" className="control-label">Número do Cartão</label>
                                <div className="input-group">
                                    <input type="text" name="car_numero" className="form-control" id='numeroCartao'
                                           value={this.state.car_numero} onChange={this.handleChange}
                                           maxLength={16}
                                           onKeyPress={this.onlyNumber}
                                           placeholder='Somente Números'/>
                                    <span className="input-group-addon js-brand">{this.state.brand_name}</span>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 form-group">
                                <label htmlFor="nome" className="control-label">CVV</label>
                                <input type="text" name="car_cvv" maxLength={4} className="form-control" id='car_cvv'
                                       value={this.state.car_cvv} onChange={this.handleChange}
                                       onKeyPress={this.onlyNumber}
                                       placeholder='xxx'/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="validade" className="control-label">Data Validade</label>
                                <div className="row">
                                    <div className="form-group col-sm-6 col-md-6">
                                        <select className="form-control" name='car_mes' id='car_mes'
                                                value={this.state.car_mes} onChange={this.handleChange}>
                                            <option value="">Mês</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <select className="form-control" name='car_ano' id='car_ano'
                                                value={this.state.car_ano} onChange={this.handleChange}>
                                            <option value="">Ano</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Quantidade de parcelas</strong></div>
                                <div className="col-md-6">
                                    <select className="form-control" name='qtd_parcela' id='qtd_parcela' disabled={this.state.optionTemplate.length <= 0} value={this.state.qtd_parcela} onChange={this.handleChange}>
                                        {this.state.optionTemplate}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                    <button type="submit" className="btn btn-info btn-submit-fix">
                                        Finalizar Compra
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div></div>
                )
        }
    }

    /**
     * Atualizador do estado com a forma de pagamento escolhida
     * @param param
     */
    chengePaymentMode(param) {

        //Valida primeiro formulário
        if(!this.validaForm()){
            return false;
        }

        this.setState({
            ...this.state,
            paymentMode: param,
        });
    }

    render() {
        return (
            <div>
                {/*Mostra o formulário se showForm for true se for false mostra msg de sucesso ou erro*/}
                <If mostrar={this.state.showForm}>
                    <div className="container wrapper">
                        <div className="row cart-head">
                            <div className="container">
                                <div className="row">
                                    <p></p>
                                </div>
                                <div className="row">
                                    <div className='display-table'>
                                    <span className="step step_complete"> <a className="check-bc"> Carrinho</a> <span
                                        className="step_line step_complete"> </span> <span
                                        className="step_line backline"> </span> </span>
                                        <span className="step_thankyou check-bc step_complete">Pagamento</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="row cart-body">
                            <div className="container">
                                <If mostrar={this.state.errorMessage}>
                                    <ShowMessage cssClass='danger' message={this.state.errorMessage}/>
                                </If>
                                <form className="" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div
                                            className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6">
                                            <CarrinhoView listaCursos={this.state.listaCursos}
                                                          removeCurso={this.state.removeCurso} btnComprar='hide'/>
                                        </div>
                                        <div
                                            className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
                                            <div className="row">
                                                <div className="panel panel-success">
                                                    <div className="panel-heading">
                                                        <span className='fa fa-user'></span> Informações para Pagamento
                                                    </div>
                                                    <div className="panel-body">
                                                        <div className="form-group">
                                                            <div className="col-md-12">
                                                                <h4>Dados Pessoais</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-xs-12 form-group ">
                                                            <label htmlFor="nome" className="control-label">Nome Completo</label>
                                                            <input type="text" id='nome' name="nome"
                                                                   className="form-control"
                                                                   placeholder='Nome Completo'
                                                                   maxLength={150}
                                                                   value={this.state.nome}
                                                                   onChange={this.handleChange}/>
                                                        </div>

                                                        <div className="col-md-6 col-xs-12 form-group">
                                                            <label htmlFor="nome" className="control-label">CPF</label>
                                                            <input type="text" name="num_cpf" id='num_cpf'
                                                                   className="form-control"
                                                                   placeholder='Somente números'
                                                                   value={this.state.cpf}
                                                                   maxLength={11}
                                                                   onKeyPress={this.onlyNumber}
                                                                   onChange={this.handleChange}/>
                                                        </div>
                                                        <div className="col-md-6 col-xs-12 form-group">
                                                            <label htmlFor="nome"
                                                                   className="control-label">Email</label>
                                                            <input type="text" name="email" id='email'
                                                                   className="form-control"
                                                                   placeholder='email válido'
                                                                   value={this.state.email}
                                                                   onChange={this.handleChange}/>
                                                        </div>
                                                        <div className="col-md-6 col-xs-12 form-group">
                                                            <label htmlFor="nome"
                                                                   className="control-label">Telefone</label>
                                                            <input type="text" name="num_telefone" id='num_telefone'
                                                                   className="form-control"
                                                                   placeholder='Somente números'
                                                                   maxLength={11}
                                                                   value={this.state.num_telefone}
                                                                   onChange={this.handleChange}
                                                                   onKeyPress={this.onlyNumber} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="panel panel-success">
                                                    <div className="panel-heading"><span className='fa fa-money'></span>
                                                        Formas de Pagamento
                                                    </div>
                                                    <div className="panel-body">
                                                        <div className="form-group">
                                                            <div className="col-md-12">
                                                                <h4>Escolha a forma de pagamento</h4>
                                                            </div>
                                                        </div>
                                                        <div className="form-group group-btn">
                                                            <a onClick={() => this.chengePaymentMode('cartao')}
                                                               className={`btn btn-default css-btn ${this.state.paymentMode == 'cartao' ? 'active' : ''}`}>
                                                                <i className="fa fa-credit-card fa-4x"></i> <p>
                                                                Cartão</p>
                                                            </a>
                                                            <a onClick={() => this.chengePaymentMode('boleto')}
                                                               className={`btn btn-default css-btn ${this.state.paymentMode == 'boleto' ? 'active' : ''}`}>
                                                                <i className="fa fa-barcode fa-4x"></i> <p>Boleto</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                                {this.paymentMode(this.state.paymentMode)}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row cart-footer">
                        </div>
                    </div>
                </If>
                <If mostrar={ !this.state.showForm && this.state.status }>
                    <MsgFinal
                        nome={this.state.nome}
                        codigo={this.state.code}
                        link={this.state.payment_link}
                        paymentMode={this.state.paymentMode}
                        status={this.state.status}/>
                </If>
                <If mostrar={ !this.state.showForm && this.state.status === false }>
                    {/*Mensagem de erro*/}
                    <div className="container container-message">
                        <div className="row">
                            <div className="thanks-box">
                                <div className="sorry-header">
                                    <header data-v-2a4dd70f="" className="sorry-header">
                                        <div className="sorry-text">
                                            <h1>Erro!</h1>
                                            <div>
                                                <p className="bg-warning">
                                                    Desculpe! Tivemos um problema ao finalizar sua compra, nossa equipe técnica já
                                                    esta trabalhando para corrigir
                                                    esse problema.
                                                </p>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </div>
                </If>
            </div>
        )
    }
}