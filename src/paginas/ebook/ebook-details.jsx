import React from 'react'
import Loading from 'react-loading'
import If from '../../components/if/if'
import ShowMessage from '../../components/formulario/showMessage'

import './ebook.css'

export default props => {

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
                                        <iframe width="580" height="320" src={props.details.url_video} frameBorder="0" allowFullScreen></iframe>
                                        <div dangerouslySetInnerHTML={{__html: props.details.descricao}}/>
                                    </div>
                                    <div className="col-md-4">
                                        <form className="form" id="form-ebook" >
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                                    <div className="row">

                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                                                <If mostrar={props.message}>
                                                                    <ShowMessage cssClass={props.classMessage} message={props.message}/>
                                                                </If>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12 col-md-offset-5 col-sm-6 col-xs-12">
                                                                <If mostrar={props.load}>
                                                                    <Loading type='bars' color='#31B77D' delay={5}/>
                                                                </If>
                                                            </div>
                                                        </div>

                                                        <div className="panel panel-success">
                                                            <div className="panel-heading">
                                                                <span className='fa fa-user'></span> Baixe nosso Ebook grátis
                                                            </div>
                                                            <div className="panel-body">
                                                                <div className="col-md-12 col-xs-12 form-group ">
                                                                    <label htmlFor="nome" className="control-label">Nome Completo</label>
                                                                    <input type="text" id='nome' name="nome"
                                                                           className="form-control"
                                                                           placeholder='Nome Completo'
                                                                           value={props.nome}
                                                                           maxLength={150}
                                                                           onChange={props.handleChange}
                                                                    />
                                                                </div>
                                                                <div className="col-md-12 col-xs-12 form-group">
                                                                    <label htmlFor="nome"
                                                                           className="control-label">Email</label>
                                                                    <input type="text" name="email" id='email'
                                                                           className="form-control"
                                                                           placeholder='email válido'
                                                                           value={props.nome}
                                                                           onChange={props.handleChange}/>
                                                                </div>
                                                                <div className="col-md-12 col-xs-12 form-group text-center">
                                                                    <div className="col-sm-12 mt-30">
                                                                        <button className="btn btn-md btn-color-line" onClick={() => props.handleSend(props.details.id)} type="button" id="submit" name="button">Baixar E-Book</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}