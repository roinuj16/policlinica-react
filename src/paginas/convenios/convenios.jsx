import React, { Component } from 'react'

import Breadcrumb from '../../components/breadcrumb/breadcrumb'

export default class Convenios extends Component {
    render() {
        return (
            <div>
                <Breadcrumb name='Convênios' />
                <section className='ptb'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">CONVÊNIOS AMHP</div>
                                <ul className="list-group">
                                <li className="list-group-item">AFEB BRASIL</li>
                                    <li className="list-group-item">AFFEGO</li>
                                    <li className="list-group-item">ASETE (ASTE)</li>
                                    <li className="list-group-item">CAESAN</li>
                                    <li className="list-group-item">CAMED</li>
                                    <li className="list-group-item">CAEME</li>
                                    <li className="list-group-item">CASEMBRAPA (EMBRAPA)</li>
                                    <li className="list-group-item">CASEC (CODEVASF)</li>
                                    <li className="list-group-item">CONAB</li>
                                    <li className="list-group-item">EMBRATEL PAME</li>
                                    <li className="list-group-item">GAMA SAÚDE</li>
                                    <li className="list-group-item">INFRAERO</li>
                                    <li className="list-group-item">IRB</li>
                                    <li className="list-group-item">LIFE EMPRESARIAL SAÚDE</li>
                                    <li className="list-group-item">MEDISERVICE</li>
                                    <li className="list-group-item">PETROBRÁS</li>
                                    <li className="list-group-item">PLAN ASSISTE (MPDFT)</li>
                                    <li className="list-group-item">PLAN ASSISTE (MPF)</li>
                                    <li className="list-group-item">PLAN ASSISTE (MPM)</li>
                                    <li className="list-group-item">PLAN ASSISTE (MPT)</li>
                                    <li className="list-group-item">PROASA</li>
                                    <li className="list-group-item">SAÚDE CAIXA</li>
                                    <li className="list-group-item">SERPRO</li>
                                    <li className="list-group-item">STF - MED</li>
                                    <li className="list-group-item">STJ</li>
                                    <li className="list-group-item">STM (PLAS/JMU)</li>
                                    <li className="list-group-item">TJDFT</li>
                                    <li className="list-group-item">TRE</li>
                                    <li className="list-group-item">TRF</li>
                                    <li className="list-group-item">TRT</li>
                                    <li className="list-group-item">TST - SAÚDE</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">DEMAIS CONVÊNIOS</div>
                                <ul className="list-group">
                                    <li className="list-group-item">EXCLUSIVA SAÚDE</li>
                                    <li className="list-group-item">FORÇA POLICIAL</li>
                                    <li className="list-group-item">GEAP</li>
                                    <li className="list-group-item">GOLDEN CROSS</li>
                                    <li className="list-group-item">IPASGO</li>
                                    <li className="list-group-item">INTERLIFE</li>
                                    <li className="list-group-item">MAIS SAÚDE</li>
                                    <li className="list-group-item">MASTER CLIN</li>
                                    <li className="list-group-item">MEDPREV /  SOLUMED</li>
                                    <li className="list-group-item">MINUANO</li>
                                    <li className="list-group-item">PREMIUM SAÚDE</li>
                                    <li className="list-group-item">QUALLITY SAÚDE</li>
                                    <li className="list-group-item">SAÚDE PLENA</li>
                                    <li className="list-group-item">SEMPRE SAÚDE</li>
                                    <li className="list-group-item">UNIMED/IPASLUZ</li>
                                    <li className="list-group-item">VITALLIS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}