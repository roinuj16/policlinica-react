import React, { Component } from 'react'

export default class Atendimento extends Component {

    render() {
        return (
            <div>
                <section className="overlay-bg-color light-color ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 mt-xs-30">
                                <h4>Emergency Case</h4>
                                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem, Maecenas tempus, tellus eget condimentum rhoncus.</p>
                            </div>
                            <div className="col-sm-4 mt-xs-30">
                                <h4>Doctors Timetable</h4>
                                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem, Maecenas tempus, tellus eget condimentum rhoncus.</p>
                            </div>
                            <div className="col-sm-4 mt-xs-30">
                                <h4>Horário de Atendimento</h4>
                                <ul className="timing">
                                    <li> <span className="fl">Segunda - Sexta</span> <span className="fr">8:00 - 18:00</span> </li>
                                    <li><span>Sábado</span> <span className="fr">9:00 - 17:00</span></li>
                                    <li><span>Domingo</span> <span className="fr">8:00 - 12:00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}