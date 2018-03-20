import React, { Component } from 'react'
import image from  '../../assets/images/image5.jpg'

import Breadcrumb from '../../components/breadcrumb/breadcrumb'

export default class Sobre extends Component {
    render() {
        return (
            <div>
                <Breadcrumb name='Quem Somos' />
                <section className="about-section ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 pb-xs-30"> <img src={image} alt="" /> </div>
                            <div className="col-sm-6"> <span className="sub-title">Policlínica Saúde & Vida</span>
                                <h2>Consulta e exames com alto padrão de qualidade e com preços acessíveis.</h2>
                                <p>
                                    A Policlínica Saúde & Vida é um centro médico completo, que oferece aos pacientes diversas especialidades médicas. Buscando sempre a inovação e a qualidade na prestação de serviço a policlínica vêm se destacando com o preço justo em consultas e exames de imagens.
                                </p>
                                <p>
                                    Responsabilidade e atendimento humanitário são os princípios da Policlínica Saúde & Vida, que enxerga em cada paciente um ser humano merecedor de atenção, cuidados e do melhor atendimento por parte de toda a equipe da clínica.
                                </p>
                                <p>
                                    Todos os nossos profissionais são altamente qualificados, desde o atendimento inicial até os consultórios médicos. Hoje contamos com mais de 15 especialidade médicas, oferecendo todo o conforte e qualidade aos nossos clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}