import React from 'react'
import './cursos.css'

export default props =>{
return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default  panel--styled">
                        <div className="panel-body">
                            <div className="col-md-12 panelTop">
                                <div className="col-md-8 js-txt">
                                    <h2>{props.details.nome}</h2>
                                    <div dangerouslySetInnerHTML={{__html: props.details.descricao}}/>
                                </div>
                                <div className="col-md-4 js-left">
                                    <img className="img-responsive js-img-course" src={props.details.path_image} alt=""/>
                                    <div className="col-md-12 text-center">
                                        <h5>Valor <span className="itemPrice">{ props.details.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</span></h5>
                                    </div>
                                    <div className="col-md-12 text-center btn-comprar">
                                        <a onClick={() => props.addCarrinho(props.details)} className='btn btn-lg btn-color-line btn-block js-btn'><span className="glyphicon glyphicon-shopping-cart"></span> Comprar</a>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <a onClick={() => props.hideDetail(false, {})} className='btn btn-lg btn-color-line btn-block js-btn'><span className="fa fa-reply-all"></span> Voltar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};