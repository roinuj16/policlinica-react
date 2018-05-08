import React, { Component } from 'react'

export default class CarrinhoContador extends Component {
    constructor(props) {
        super(props);
        this.state = { items: '', qtdItem: 0};
    }

    componentWillMount() {
        console.log('qtd', this.props.qtd);
        this.setState({
            ...this.state,
            qtdItem: this.props.qtd
        });
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

