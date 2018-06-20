import React from 'react'
import logo from '../../assets/images/logo2_.png'
import './menu.css'

import Contador from '../../paginas/cursos/CarrinhoContador'

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
                                    {/*<li>*/}
                                        {/*<a href="#" data-toggle="modal" data-target=".emergency-call">*/}
                                            {/*<i className="fa fa-file-word-o"></i> Trabalhe Conosco*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                    <li>
                                        <a href="#" className="btn btn-md btn-white-line">
                                            <i className="icon ion-university"></i> <strong>Cursos Online</strong>
                                        </a>
                                    </li>
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
                                        <a href={`#/cursos`}>Cursos</a>
                                        <i className="ion-ios-plus-empty visible-xs"></i>
                                        <ul className="sub-nav">
                                            <li> <a href={`#/ead`}>Ensino a Distância EAD</a> </li>
                                            <li> <a href="#/semipresencial">Ensino Semipresencial</a> </li>
                                            <li> <a href="#/ebook">E-Books Grátis</a> </li>
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
                                    <li>
                                        <a href="#/carrinho-servico">
                                            <div className="qntde_cart">
                                                {/*<i className="fa fa-shopping-cart fa-2x pull-left"></i>*/}
                                                {/*<span>xxx</span>*/}
                                                <Contador/>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}