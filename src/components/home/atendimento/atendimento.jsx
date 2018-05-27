import React, { Component } from 'react'

import './atendimento.css'

export default class Atendimento extends Component {

    render() {
        return (
            <div>
                <section className="overlay-bg-color light-color ptb">
                    <div className="container atendimento">
                        <div className="row">
                            <div className="col-sm-4 mt-xs-30">
                                <h4>Horário de Atendimento</h4>
                                <ul className="timing">
                                    <li>
                                        <span className="fl">Segunda - Sexta</span>
                                        <span className="fr">07:00 às 18:00</span>
                                    </li>
                                    <li><span>Sábado</span> <span className="fr">07:00 ao 12:00</span></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 mt-xs-30">
                                <h4>Preços Acessíveis</h4>
                                <p>Para ter qualidade não é preciso pagar caro. Nosso objetivo é oferecer saúde com qualidade e conforto a preços acessíveis e pagamentos facilitados.</p>
                            </div>
                            <div className="col-sm-4 mt-xs-30">
                                <h4>Qualidade e Conforto</h4>
                                <p>Equipe de médicos treinada, qualificada e diversificada para atender com todo cuidado, atenção e agilidade. Nosso corpo clinico é composto por diversos especialistas dos mais variados segmentos.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}