import React, { Component } from 'react'

import axios from 'axios'
import { myConfig } from '../../../main/consts'

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = { items: ''};
    }
    componentDidMount() {
        axios.get(`${myConfig.apiUrl}/especialidades`).then(response => {
            this.setState({
                ...this.state,
                items: response.data.dados
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    renderNames() {
        const list = this.state.items || [];
        return list.map(todo => (
            <div className="col-xs-12 col-sm-3" key={todo.id}>
                <h5><a href={`#/especialidades-detalhes/${todo.id}`}><i className="fa fa-heartbeat"></i> {todo.nome}</a></h5>
            </div>
        ))
    }

    render() {
        return (
            <section className="our-services" id="our-service">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12"> <span className="sub-title">Nossas</span>
                            <h2> Especialidades</h2>
                        </div>
                    </div>
                    <div className="row padding mt-10">
                        {this.renderNames()}
                    </div>
                </div>
            </section>
        )
    }
}
