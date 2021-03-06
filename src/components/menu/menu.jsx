import React from 'react'
import logo from '../../assets/images/policlinica.png'
import './menu.css'

export default props => {

    let dados = localStorage.getItem('curso');

    return (
        <header id="header" className="header header-1">
            <div id="top-bar" className="top-bar-section top-bar-bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="top-contact link-hover-black hidden-xs">
                                <a> <i className="fa fa-whatsapp"></i>(61)9-8629-5131</a>
                                <a> <i className="fa fa-whatsapp"></i>(61)9-8585-5675</a>
                            </div>
                            <div className="top-social-icon icons-hover-black">
                                <ul>
                                    <li>
                                        <a href="http://lsantamaria.com.br/logins/login" target="_blank" className="btn btn-md btn-white-line">
                                            <i className="fa fa-list-alt"></i> <strong>Resultados Online</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-wrap">
                <div className="container js-menu">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="logo">
                                <a href="#">
                                    <img src={logo} className='img-logo' alt="Policlínica Saúde"></img>
                                </a>
                            </div>
                            <button id="menu" className="menu visible-xs"></button>
                        </div>
                        <div className="col-sm-9 nav-bg">
                            <nav className="navigation">
                                <ul>
                                    <li className="active">
                                        <a href="#/" >Início</a>
                                    </li>
                                    <li>
                                        <a href="#/sobre">Quem Somos</a>
                                    </li>
                                    <li>
                                        <a href="#/convenios">Convênios</a>
                                    </li>
                                    <li>
                                        <a href="#/informativo">Informativo</a>
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
}
