import React, { Component } from 'react'
import axios from 'axios'

import { myConfig } from '../../../main/consts'

const URL = 'http://localhost:8000/api/homeInfo';

export default class AboutHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            descricao: '',
            icone1: '',
            icone2: '',
            icone3: '',
            icone4: '',
            label1: '',
            label2: '',
            label3: '',
            label4: '',
            infolable1: '',
            infolable2: '',
            infolable3: '',
            infolable4: '',

        };

        this.getData();
    }

    getData() {
        axios.get(`${myConfig.apiUrl}/homeInfo`).then(resp => this.setState({
            ...this.state,
            titulo: resp.data.dados.titulo,
            descricao: resp.data.dados.descricao,
            icone1: resp.data.dados.classe_css_1,
            icone2: resp.data.dados.classe_css_2,
            icone3: resp.data.dados.classe_css_3,
            icone4: resp.data.dados.classe_css_4,
            label1: resp.data.dados.label_1,
            label2: resp.data.dados.label_2,
            label3: resp.data.dados.label_3,
            label4: resp.data.dados.label_4,
            infolable1: resp.data.dados.info_label_1,
            infolable2: resp.data.dados.info_label_2,
            infolable3: resp.data.dados.info_label_3,
            infolable4: resp.data.dados.info_label_4,

        }));
    }

    render () {
        return (
            <section id="about" className="wow fadeIn ptb">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-8 col-md-offset-2">
                            <h2>{ this.state.titulo }</h2>
                            <p className="lead">{ this.state.descricao }</p>
                        </div>
                    </div>
                    <div className="row why-choose mt-30">
                        <div className="col-md-4 col-sm-6 text-center">
                            <div className="padding-20">
                                <a href="#/especialidades">
                                    <div className="page-icon-top">
                                        <i className='fa fa-heartbeat fa-4x'></i>
                                    </div>
                                    <h5>Especialidades</h5>
                                </a>
                                    <p>Veja a lista com nossas especialidades</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center">
                            <div className="padding-20">
                                <a href="#/especialidades">
                                    <div className="page-icon-top">
                                        <i className={`fa ${this.state.icone2 } fa-4x`}></i>
                                    </div>
                                    <h5>Cursos</h5>
                                </a>
                                    <p>Veja a lista com nossas especialidades</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6  text-center">
                            <div className="padding-20">
                                <a>
                                    <div className="page-icon-top">
                                        <i className='fa fa-list-alt fa-4x'></i>
                                    </div>
                                    <h5>Resultados Online</h5>
                                </a>
                                    <p>Veja a lista com nossas especialidades</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center">
                            <div className="padding-20">
                                <a href="#/convenios">
                                    <div className="page-icon-top">
                                        <i className='fa fa-medkit fa-4x'></i>
                                    </div>
                                    <h5>Convênios</h5>
                                </a>
                                    <p>Veja a lista com nossos convênios</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center">
                            <div className="padding-20">
                                <a href="#/informativo">
                                    <div className="page-icon-top">
                                        <i className='fa fa-newspaper-o fa-4x'></i>
                                    </div>
                                    <h5>Informativo</h5>
                                </a>
                                <p>Veja nossa lista de Informações</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center">
                            <div className="padding-20">
                                <a href="#">
                                    <div className="page-icon-top">
                                        <i className='fa fa-map-marker fa-4x'></i>
                                    </div>
                                    <h5>Contato e Localização</h5>
                                </a>
                                <p>Fale conosco e veja nossa localização</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
     }
}
