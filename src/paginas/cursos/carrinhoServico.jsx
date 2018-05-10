import React, { Component } from 'react'
import Breadcrumb from '../../components/breadcrumb/breadcrumb'
import './cursos.css'

import CarrinhoView from './carrinhoView'
import FormularioPagamento from './formularioPagamento'

export default class CarrinhoContador extends Component {
    constructor(props) {
        super(props);
        this.state = { cursos: '', vlrTotal: 0, urlBack:'', view: 'lista' };
        this.removeCurso = this.removeCurso.bind(this);
        this.iniciarCompra = this.iniciarCompra.bind(this);
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            cursos: JSON.parse(localStorage.getItem('curso')),
            urlBack: localStorage.getItem('urlBack')
        });
    }

    /**
     * Remove um curso do estado e altera o localStorage
     * @param todo
     */
    removeCurso(todo) {

        //Removendo o curso do state
        let listaCursos = this.state.cursos;
        let afterRemove = listaCursos.filter((elem) => {
            return elem.id !== todo.id;
        });

        //Atualiza o state
        this.setState({
            ...this.state,
            cursos: afterRemove
        });

        //Atualiza o localStorage
        localStorage.setItem('curso', JSON.stringify(afterRemove));
    }

    /**
     * Inicia Compra e muda para tela pagamento onde inicia conexão com pagseguro
     * @param listaCursos
     * @param valor
     */
    iniciarCompra(listaCursos, valor) {
        console.log('iniciando pagamento...');
        //Atualiza o state
        this.setState({
            ...this.state,
            view: 'pagamento'
        });
    }

    /**
     * alterna entre os componentes carrinho, forma de pagamento
     * @param param
     * @returns {*}
     */
    renderView(param) {
        switch (param) {
            case 'pagamento':
                return <FormularioPagamento listaCursos={this.state.cursos}/>
                return 'bar';
            default:
                return <CarrinhoView listaCursos={this.state.cursos} removeCurso={this.removeCurso} iniciarCompra={this.iniciarCompra} btnComprar='show'/>;
        }

    }

    render() {
        return (
            <div>
                <Breadcrumb name='Carrinho de Compras'/>
                {this.renderView(this.state.view)}
            </div>
        )
    }
}

