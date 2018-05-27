import React from 'react'

import If from '../../components/if/if'
import ShowMessage from '../../components/formulario/showMessage'

export default props => {

    return (
        <div className="row pt-80">
            <div className="col-sm-12">
                <h4>Dúvidas, sugestões e marcações:</h4>
                <p> Tire dúvidas envie sugestões e marque sua consulta</p>
                <If mostrar={props.message}>
                    <ShowMessage cssClass={props.classMessage} message={props.message}/>
                </If>
                <form className="contact-form mt-45" id="contact">
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <div className="form-field">
                                <input className="input-sm form-full"
                                       id="nome"
                                       type="text"
                                       name="nome"
                                       value={props.nome}
                                       onChange={props.handleChange}
                                       placeholder="Nome"/>
                            </div>
                            <div className="form-field">
                                <input className="input-sm form-full"
                                       id="email"
                                       type="text"
                                       name="email"
                                       value={props.email}
                                       onChange={props.handleChange}
                                       placeholder="Email"/>
                            </div>
                            <div className="form-field">
                                <input className="input-sm form-full"
                                       id="assunto"
                                       type="text"
                                       name="assunto"
                                       value={props.assunto}
                                       onChange={props.handleChange}
                                       placeholder="Assunto"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-field">
                                <textarea className="form-full"
                                          id="mensagem"
                                          rows="7"
                                          name="mensagem"
                                          onChange={props.handleChange}
                                          value={props.mensagem}
                                          placeholder="Menssagem">
                                </textarea>
                            </div>
                        </div>
                        <div className="col-sm-12 mt-30">
                            <button className="btn btn-md btn-color-line" onClick={props.handleSend} type="button" id="submit" name="button">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}