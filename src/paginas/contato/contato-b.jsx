import React, { Component } from 'react'

import Breadcrumb from '../../components/breadcrumb/breadcrumb'

const iframeStyle = {
    border:0,
    width: '100%'
};

export default class Contato extends Component {

    render() {
        return (
            <div>
                <Breadcrumb name='Contato'/>
                <section className="ptb ptb-sm-80">
                    <div className="container contact-form mt-up">
                        <div className="row pt-80">
                            <div className="col-md-8 col-md-offset-2 text-center">
                                <h2>Entre em contato conosco</h2>
                            </div>
                        </div>
                        <div className="row pt-30">
                            <div className="col-sm-6">
                                <div className="row-fluid">
                                    <div className="col-md-6">
                                        <h4>Unidade - Jardim do Ingá</h4>
                                        <h4><span className="glyphicon glyphicon-map-marker"></span> Endereço</h4>
                                        <span>Av Lucena Roriz, qd 58, Lote 27. Jardim Ingá,  Luziânia - GO</span>
                                        <h4><span className="glyphicon glyphicon-phone-alt"></span> Telefone</h4>
                                        <span>(61) 3623-6550 / (61) 9-8629-5131 WhatsApp</span>
                                    </div>
                                    <div className="col-md-6">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1500424217448!6m8!1m7!1s7IFfvYf7uyXFKIJXJWWLiA!2m2!1d-16.25703966977896!2d-47.95588402435257!3f262.9494678331693!4f10.490779730019895!5f0.7820865974627469" height="250" frameBorder="0" style={iframeStyle} allowFullScreen=""></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="row-fluid">
                                    <div className="col-md-6">
                                        <h4>Unidade - Cidade Ocidental</h4>
                                        <h4><span className="glyphicon glyphicon-map-marker"></span> Endereço</h4>
                                        <span>SQ 12, quadra 01, n. 05. Cidade Ocidental - GO</span>
                                        <h4><span className="glyphicon glyphicon-phone-alt"></span> Telefone</h4>
                                        <span>(61) 3625-2809 / (61) 9-8585-5675 WhatsApp</span>
                                    </div>
                                    <div className="col-md-6">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1500424217448!6m8!1m7!1s7IFfvYf7uyXFKIJXJWWLiA!2m2!1d-16.25703966977896!2d-47.95588402435257!3f262.9494678331693!4f10.490779730019895!5f0.7820865974627469" height="250" frameBorder="0" style={iframeStyle} allowFullScreen=""></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}