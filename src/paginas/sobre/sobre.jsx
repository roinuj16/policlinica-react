import React, { Component } from 'react'
import axios from 'axios'
import { myConfig } from '../../main/consts'

import Breadcrumb from '../../components/breadcrumb/breadcrumb'

export default class Sobre extends Component {

    constructor(props) {
        super(props)
        this.state = { titulo: '', conteudo: '', img_path: '' }
    }

    componentDidMount() {
        axios.get(`${myConfig.apiUrl}/quem-somos`)
            .then(response => {
                console.log(response);
                this.setState({
                    ...this.state,
                    titulo: response.data.dados.titulo,
                    conteudo: response.data.dados.conteudo,
                    img_path: response.data.dados.img_path,
                })
            })
            .catch(function (error) {
                console.log('erro:', error);
            })
    }

    render() {
        return (
            <div>
                <Breadcrumb name='Quem Somos' />
                <section className="about-section ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 pb-xs-30"> <img src={this.state.img_path} alt="" /> </div>
                            <div className="col-sm-6"> <span className="sub-title">Policlínica Saúde & Vida</span>
                                <h2>{ this.state.titulo }</h2>
                                <div dangerouslySetInnerHTML={{__html: this.state.conteudo}}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}