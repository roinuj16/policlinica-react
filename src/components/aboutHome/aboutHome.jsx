import React from 'react'

export default props => (
    <section id="about" className="wow fadeIn ptb">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-8 col-md-offset-2">
                    <h2>Por que escolher a Policlínica Saúde?</h2>
                    <p className="lead">Todos os nossos profissionais são altamente qualificados, desde o atendimento inicial até os consultórios médicos.</p>
                </div>
            </div>
            <div className="row why-choose mt-30">
                <div className="col-md-3 col-sm-6 text-center">
                    <div className="padding-20">
                        <div className="page-icon-top"><i className="fa fa-user-md fa-4x"></i></div>
                        <h5>Médicos</h5>
                        <p>Profissionais capacitados e comprometidos com a saúde e o bem estar dos nossos pacientes.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 text-center">
                    <div className="padding-20">
                        <div className="page-icon-top"><i className="fa fa-book fa-4x"></i></div>
                        <h5>Cursos</h5>
                        <p>
                            Oferecemos cursos e treinamentos completos e com foco no mercado de trabalho.
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6  text-center">
                    <div className="padding-20">
                        <div className="page-icon-top"><i className="fa fa-headphones fa-4x"></i></div>
                        <h5>Atendimento</h5>
                        <p>Fazemos do processo de atendimento uma atividade de excelência para nossos pacientes.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 text-center">
                    <div className="padding-20">
                        <div className="page-icon-top"><i className="far fa-money-bill-alt fa-4x"></i></div>
                        <h5>Praticidade </h5>
                        <p>Consulta e exames com alto padrão de qualidade e com preços acessíveis.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)