import React, { Component } from 'react'

import axios from 'axios'
import { myConfig } from '../../main/consts'

import Breadcrumb from '../../components/breadcrumb/breadcrumb'
import './cursos.css'

export default class Cursos extends Component {
    constructor(props) {
        super(props);
        this.state = { items: '' };
        this.listaCursos = this.listaCursos.bind(this)
    }

    componentWillMount() {
        console.log('props', this.props);
        let tipo = this.props.tipo;

        axios.get(`${myConfig.apiUrl}/cursos/${tipo}`).then(response => {
            console.log('retorno', response.data);
            this.setState({
                ...this.state,
                items: response.data.dados
            });
        }).catch(function (error) {
            console.log(error);
        })
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
                            <div className="col-md-3 col-sm-4 curso-mobile">
                                <p className="price">{ todo.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</p>
                            </div>
                            <div className="col-md-9 col-sm-6">
                                <button className="btn btn-info right" > COMPRAR</button>
                            </div>
                        </div>
                    </span>
                </div>
            )
        })
    }


    render() {
        return (
            <div>
                <Breadcrumb name='Cursos'/>
                <div className="container pt-80">
                    <div className="row">
                        {this.listaCursos()}
                    </div>
                </div>
            </div>
        )
    }
}