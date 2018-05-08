import React, { Component } from 'react'

import Cursos from './cursos'

import Breadcrumb from '../../components/breadcrumb/breadcrumb'
import './cursos.css'

export default class CursosServicos extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], tipo:'', qtd: 20 };

        this.lista = [];

        this.addCarrinho = this.addCarrinho.bind(this)
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            tipo: this.props.tipo
        });
    }


    addCarrinho(curso) {

        //Montando url de retorno
        localStorage.setItem('urlBack', window.location.href);
        
        let dadosLocalStorage = localStorage.getItem('curso');
        if (dadosLocalStorage === null) {
            console.log('passou no vazio...');
            let arCurso = [];
            arCurso.push(curso);
            localStorage.setItem('curso', JSON.stringify(arCurso));
        } else {
            let dados = JSON.parse(dadosLocalStorage);
            let index = dados.findIndex(val => val.id === curso.id);

            if(index < 0) {
                console.log('adicionando mais um...');
                dados.push(curso);
                localStorage.setItem('curso', JSON.stringify(dados));
            }
        }
        window.location.href = '/#/carrinho-servico';
    }

    render() {
        return (
            <div>
                <Breadcrumb name='Cursos'/>
                <Cursos tipo={this.state.tipo} addCarrinho={this.addCarrinho}/>
            </div>
        )
    }
}