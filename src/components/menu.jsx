import React from 'react'
import logo from '../assets/images/logo2_.png'

export default props => (
    <header id="header" className="header header-1">
        <div id="top-bar" className="top-bar-section top-bar-bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="top-contact link-hover-black hidden-xs">
                            <a href="tel"> <i className="fa fa-phone"></i>(61)9-8629-5131</a>
                            <a href="tel"> <i className="fa fa-phone"></i>(61)9-8585-5675</a>
                        </div>
                        <div className="top-social-icon icons-hover-black">
                            <ul>
                                <li> <a href="#"> <i className="icon ion-power"></i> Login </a></li>
                                <li><a href="#" data-toggle="modal" data-target=".emergency-call"> <i className="icon ion-ios-bell"></i> Telefones de Emergência </a> </li>
                                <li>
                                    <a href="#" className="btn btn-md btn-white-line">
                                        <i className="icon ion-university"></i> <strong>Cursos Online</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="logo">
                            <a href="#">
                                <img src={logo} alt="Policlínica Saúde"></img>
                            </a>
                        </div>
                        <button id="menu" className="menu visible-xs"></button>
                    </div>
                    <div className="col-sm-9 nav-bg">
                        <nav className="navigation">
                            <ul>
                                <li className="active">
                                    <a href="#/">Início</a>
                                    <i className="ion-ios-plus-empty visible-xs"></i>
                                </li>
                                <li>
                                    <a href="#/sobre">Quem Somos</a>
                                </li>
                                <li>
                                    <a>Cursos</a>
                                    <i className="ion-ios-plus-empty visible-xs"></i>
                                    <ul className="sub-nav">
                                        <li> <a href="#/ead">Ensino a Distância EAD</a> </li>
                                        <li> <a href="#/semipresencial">Ensino Semipresencial</a> </li>
                                        <li> <a href="#presencial">Ensino Presencial</a> </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/especialidades">Especialidades</a>
                                    <i className="ion-ios-plus-empty visible-xs"></i>
                                </li>
                                <li>
                                    <a href="#/convenios">Convênios</a>
                                    <i className="ion-ios-plus-empty visible-xs"></i>
                                </li>
                                <li>
                                    <a href="#/informativo">Informativo</a>
                                    <i className="ion-ios-plus-empty visible-xs"></i>
                                </li>
                                <li><a href="#/contato">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
)