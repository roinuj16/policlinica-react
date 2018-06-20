import React, { Component } from 'react'
import Loading from 'react-loading'

import axios from 'axios'
import { myConfig } from '../../main/consts'
import BtnAddCart from './btnAddCart'
import If from '../../components/if/if'
import DetalhesCurso from './curso-detalhes'
import './cursos.css'

export default class Cursos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true,
            items: '',
            objDetail: '',
            viewDetails: false //viewDetails { false = Lista de cursos, true = detalhes do curso
        };
        this.listaCursos = this.listaCursos.bind(this);
        this.validaStorage = this.validaStorage.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }

    componentWillMount() {
        let tipo = this.props.tipo;

        axios.get(`${myConfig.apiUrl}/cursos/${tipo}`).then(response => {
            this.setState({
                ...this.state,
                items: response.data.dados,
                load: false
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    /**
     * Valida se curso já esta adicionado no storage/carrinho
     * @param idCurso
     * @returns {boolean}
     */
    validaStorage(idCurso) {
        let dadosLocalStorage = localStorage.getItem('curso');
        if(dadosLocalStorage !== null) {
            let dados = JSON.parse(dadosLocalStorage);
            let index = dados.findIndex(val => val.id === idCurso);
            if(index < 0) {
                return true;
            }
            return false;
        }
        // @TODO: Validar se precisa desse return
        return true;
    }

    showDetails(info, objDetails) {
        this.setState({
            ...this.state,
            viewDetails: info,
            objDetail: (info) ? objDetails : ''
        });
    }

    listaCursos() {
        let list = this.state.items || [];
        return list.map(todo => {
            return (
                <div className="col-md-3 col-sm-6" key={todo.id}>
                    <span className="thumbnail">
                        <a onClick={() => this.showDetails(true, todo)}>
                            <img src={ todo.path_image } alt={ todo.nome }/>
                        </a>

                        <h4 className='text-center'>{ todo.nome }</h4>
                        <hr className="line" />
                        <div className="row">
                            <div className="col-md-12 text-center col-sm-4 curso-mobile">
                                <p className="price">{ todo.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</p>
                            </div>
                        </div>
                        <div className="row">
                            <BtnAddCart add={this.validaStorage(todo.id)}>
                                <div className="col-md-12 col-sm-6 text-center">
                                    <a onClick={() => this.props.addCarrinho(todo)} className="btn btn-md btn-color-line js-btn">Adicionar ao Carrinho</a>
                                </div>
                            </BtnAddCart>
                        </div>
                    </span>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <If mostrar={this.state.load}>
                    <div className="container pt-80">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-5">
                                <Loading type='bars' color='#31B77D' delay={5}/>
                            </div>
                        </div>
                    </div>
                </If>
                <If mostrar={!this.state.viewDetails}>
                    <div className="container pt-80">
                        <div className="row">
                            {this.listaCursos()}
                        </div>
                    </div>
                </If>
                <If mostrar={this.state.viewDetails}>
                    <div className="container pt-80">
                        <div className="row">
                            <DetalhesCurso
                                details={this.state.objDetail}
                                hideDetail={this.showDetails}
                                addCarrinho={this.props.addCarrinho}/>
                        </div>
                    </div>
                </If>

            </div>


        )
    }
}