import React, { Component } from 'react'

import axios from 'axios'
import { myConfig } from '../../main/consts'
import BtnAddCart from './btnAddCart'
import './cursos.css'

export default class Cursos extends Component {
    constructor(props) {
        super(props);
        this.state = { items: ''};
        this.listaCursos = this.listaCursos.bind(this)
        this.validaStorage = this.validaStorage.bind(this)
    }

    componentWillMount() {
        let tipo = this.props.tipo;

        axios.get(`${myConfig.apiUrl}/cursos/${tipo}`).then(response => {
            console.log('dados=', response.data);
            this.setState({
                ...this.state,
                items: response.data.dados
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

    listaCursos() {
        let list = this.state.items || [];
        return list.map(todo => {
            return (
                <div className="col-md-3 col-sm-6" key={todo.id}>
                    <span className="thumbnail">
                        <img src={ todo.path_image } alt={ todo.nome }/>
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

                <div className="container pt-80">
                    <div className="row">
                        {this.listaCursos()}
                    </div>
                </div>
            </div>
        )
    }
}