import React, { Component } from 'react'

import CarrinhoView from './carrinhoView'

import axios from 'axios'
import { myConfig } from '../../main/consts'
import './form-pagamento.css'
import If from '../../components/if/if'
import { validaCPF, checkMail  } from "../../common/helpers/functionsValidade";

import ShowMessage from '../../components/formulario/showMessage'


export default class FormularioPagamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentMode: '',
            nome: '',
            num_cpf: '',
            email: '',
            num_telefone: '',
            car_nome:'',
            car_numero:'',
            car_cvv:'',
            car_mes:'',
            car_ano:'',
            listaCursos: [],
            errorMessage: '',
            successMessage:false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.paymentMode = this.paymentMode.bind(this);
        this.chengePaymentMode = this.chengePaymentMode.bind(this);
        this.validaForm = this.validaForm.bind(this);
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            listaCursos: this.props.listaCursos,
        });


        // axios.post(`${myConfig.apiUrl}/init-session-ps`).then(response => {
        //
        //     //@TODO: Sessão iniciada. Continuar aqui...
        //     console.log(response.data.idSession[0]);
        //     //Inicia a sessão com pagseguro
        //     PagSeguroDirectPayment.setSessionId(response.data.idSession[0]);
        //
        //     this.getBrand();
        // }).catch(function (error) {
        //     console.log(error);
        // });
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
            // console.log("New state in ASYNC callback:", this.state.nome.length);
        });
    }

    /**
     * Envia o formulário
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();
        const data = this.state;

        //Valida o formulário
        // if(!this.validaForm()){
        //     return false;
        // }

        if(this.state.paymentMode === 'cartao') {
            this.validaCartao();            
        }


        // axios.post(`${myConfig.apiUrl}/comprar-curso`, data)
        //     .then(response => {
        //         console.log('responta submit', response);
        //     });
    }

    validaForm() {
        //Valida nome
        if(this.state.nome === ''){
            let elem = document.querySelector('#nome');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        }

        //Valida cpf
        if(this.state.num_cpf === ''){
            let elem = document.querySelector('#num_cpf');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatóriodd'
            });
            return false;
        }else if(validaCPF(this.state.num_cpf) === false) {
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
        if(this.state.email === ''){
            let elem = document.querySelector('#email');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        }else if(checkMail(this.state.email) === false) {
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
        if(this.state.num_telefone === '') {
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

    validaCartao() {

        //Valida nome
        if(this.state.nome === ''){
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
        if(this.state.nome === ''){
            let elem = document.querySelector('#car_numero');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        }

        //Valida cvv
        if(this.state.nome === ''){
            let elem = document.querySelector('#car_cvv');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                errorMessage: 'Campo Obrigatório'
            });
            return false;
        }
    }


    /**
     * Pega bandeira do cartão
     */
    getBrand() {
        let cardNum = '376449047333005';
        PagSeguroDirectPayment.getBrand({
            cardBin: cardNum.substr(0, 6),
            success: (response) => {
                console.log('pagseguro',response);
            }
        })
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
                            <a className='btn btn-default'>Link Para Boleto</a>
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
                                           value={this.state.car_nome} onChange={this.handleChange}
                                           placeholder='Nome Igual do Cartão'/>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 form-group">
                                <label htmlFor="nome" className="control-label">Número do Cartão</label>
                                    <input type="text" name="car_numero" className="form-control" id='car_numero'
                                           value={this.state.car_numero} onChange={this.handleChange}
                                           placeholder='xxxx.xxxx.xxxx.xxxx'/>
                            </div>
                            <div className="col-md-2 col-xs-12 form-group">
                                <ul className="cards">
                                    <strong>Bandeira:</strong>
                                    <li className="visa hand">Visa</li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-xs-12 form-group">
                                <label htmlFor="nome" className="control-label">CVV</label>
                                <input type="text" name="car_cvv" className="form-control" id='car_cvv'
                                       value={this.state.car_cvv} onChange={this.handleChange}
                                       placeholder='xxx'/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="validade" className="control-label">Data Validade</label>
                                <div className="form-inline row">
                                    <div className="form-group col-sm-6">
                                        <select className="form-control" name='car_mes' id='car_mes' value={this.state.car_mes} onChange={this.handleChange}>
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
                                        <select className="form-control" name='car_ano' id='car_ano' value={this.state.car_ano} onChange={this.handleChange}>
                                            <option value="">Ano</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                        </select>
                                    </div>
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
                return (<div></div>)
        }
    }

    /**
     * Atualizador do estado com a forma de pagamento escolhida
     * @param param
     */
    chengePaymentMode(param) {
        this.setState({
            ...this.state,
            paymentMode: param,
        });
    }

    render() {
        return (
        <div>
            <div className="container wrapper">
                <div className="row cart-head">
                    <div className="container">
                        <div className="row">
                            <p></p>
                        </div>
                        <div className="row">
                            <div className='display-table'>
                                <span className="step step_complete"> <a className="check-bc"> Carrinho</a> <span className="step_line step_complete"> </span> <span className="step_line backline"> </span> </span>
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
                            <ShowMessage class='danger' message={this.state.errorMessage}/>
                        </If>
                        <form className="" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6">
                                    <CarrinhoView listaCursos={this.state.listaCursos} removeCurso={this.state.removeCurso}  btnComprar='hide'/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
                                    <div className="panel panel-success">
                                        <div className="panel-heading">Informações para Pagamento</div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <h4>Dados Pessoais</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-xs-12 form-group ">
                                                <label htmlFor="nome" className="control-label">Nome</label>
                                                <input type="text" id='nome' name="nome" className="form-control"
                                                       value={this.state.nome} onChange={this.handleChange}/>
                                            </div>

                                            <div className="col-md-6 col-xs-12 form-group">
                                                <label htmlFor="nome" className="control-label">CPF</label>
                                                <input type="number" name="num_cpf" id='num_cpf'
                                                       className="form-control"
                                                       value={this.state.cpf}
                                                       onChange={this.handleChange}/>
                                            </div>
                                            <div className="col-md-6 col-xs-12 form-group">
                                                <label htmlFor="nome" className="control-label">Email</label>
                                                <input type="text" name="email" id='email' className="form-control"
                                                       value={this.state.email} onChange={this.handleChange}/>
                                            </div>
                                            <div className="col-md-6 col-xs-12 form-group">
                                                <label htmlFor="nome" className="control-label">Telefone</label>
                                                <input type="number" name="num_telefone" id='num_telefone' className="form-control"
                                                       value={this.state.num_telefone}
                                                       onChange={this.handleChange} maxLength='13'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6">
                                    {this.paymentMode(this.state.paymentMode)}
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
                                    <div className="panel panel-success">
                                        <div className="panel-heading">Formas de Pagamento</div>
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <h4>Escolha a forma de pagamento</h4>
                                                </div>
                                            </div>
                                            <div className="form-group group-btn">
                                                <a onClick={() => this.chengePaymentMode('cartao')}
                                                   className={`btn btn-default css-btn ${this.state.paymentMode == 'cartao' ? 'active' : ''}`}>
                                                    <i className="fa fa-credit-card fa-4x"></i> <p>Cartão</p>
                                                </a>
                                                <a onClick={() => this.chengePaymentMode('boleto')}
                                                   className={`btn btn-default css-btn ${this.state.paymentMode == 'boleto' ? 'active' : ''}`}>
                                                    <i className="fa fa-barcode fa-4x"></i> <p>Boleto</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
                <div className="row cart-footer">
                </div>
            </div>
        </div>
        )
    }
}