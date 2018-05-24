import React, { Component } from 'react'

export default class CarrinhoContador extends Component {
    constructor(props) {
        super(props);
        this.state = { items: '', qtdItem: ''};
    }

    componentDidMount() {
        // alert('lll');
        // @TODO: Finalizar aqui a soma de protudos no carrinho do menu
        let dadosLocalStorage = localStorage.getItem('curso');
        // console.log('quantidade', dadosLocalStorage);
        // this.setState({
        //     ...this.state,
        //     qtdItem: this.props.qtd
        // });
    }

    render() {
        return(
            <div className="qntde_cart">
                <i className="fa fa-shopping-cart fa-2x pull-left"></i>
                <span>{this.state.qtdItem}</span>
            </div>
        )
    }
}

