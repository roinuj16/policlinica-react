import React, { Component } from 'react'
import Loading from 'react-loading'

import axios from 'axios'
import If from '../../components/if/if'
import { myConfig } from '../../main/consts'

import Breadcrumb from '../../components/breadcrumb/breadcrumb'

export default class Convenios extends Component {

    constructor(props) {
        super(props);
        this.state = {items: '', load: true};
        this.listaConvenios = this.listaConvenios.bind(this);
    }

    componentWillMount() {
        axios.get(`${myConfig.apiUrl}/convenios`).then(response => {
            this.setState({
                ...this.state,
                items: response.data.dados,
                load: false
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    listaConvenios() {
        let list = this.state.items || [];
        return list.map(todo => {
            return (
                <div className="col-md-3 col-sm-6" key={todo.id}>
                    <span className="thumbnail">
                        <a >
                            <img src={ todo.path_image } alt={ todo.nome }/>
                        </a>
                    </span>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Breadcrumb name='Convênios' />
                <If mostrar={this.state.load}>
                    <div className="container pt-80">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-5">
                                <Loading type='bars' color='#31B77D' delay={5}/>
                            </div>
                        </div>
                    </div>
                </If>
                <div className="container pt-80">
                    <div className="row">
                        {this.listaConvenios()}
                    </div>
                </div>
            </div>
        )
    }
}