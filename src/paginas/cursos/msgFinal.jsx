import React from 'react'

export default props => {


    return (
        <div className="container container-message">
            <div className="row">
                {/*<div className="panel panel-success">*/}
                {/*<div className="panel-heading">*/}
                {/*<span className='fa fa-user'></span> xxxxxxx*/}
                {/*</div>*/}
                {/*<div className="panel-body">*/}
                {/*<div>*/}
                {/*<p>Boleto gerado com sucesso com código <strong>{props.code}</strong></p>*/}
                {/*<br/>*/}
                {/*<a href={props.link} className='btn btn-default'>Link Para Boleto</a>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}

                <div className="thanks-box">
                    <div className="thanks-header">
                        <header data-v-2a4dd70f="" className="thanks-header">
                            <div className="thanks-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88">
                                    <path data-v-2a4dd70f="" fill="#5AC857" fillRule="evenodd"
                                          d="M43.717 87.713c24.145 0 43.718-19.585 43.718-43.744C87.435 19.811 67.862.225 43.717.225 19.573.225 0 19.811 0 43.97c0 24.16 19.573 43.744 43.717 43.744zm21.705-54.209l-4.39-4.431a2.34 2.34 0 0 0-3.333 0L40.253 46.689l-7.166-7.235a2.342 2.342 0 0 0-3.333-.002l-4.392 4.436a2.397 2.397 0 0 0-.002 3.366l12.124 12.243a3.814 3.814 0 0 0 5.42.01c5.544-5.56 18.002-18.093 22.515-22.633a2.387 2.387 0 0 0 .693-1.684 2.39 2.39 0 0 0-.69-1.686zM43.717 82.237c-21.12 0-38.24-17.132-38.24-38.268 0-21.135 17.12-38.267 38.24-38.267s38.241 17.132 38.241 38.267c0 21.136-17.121 38.268-38.24 38.268z"></path>
                                </svg>
                            </div>
                            <div className="thanks-text">
                                <h1>Parabéns</h1>
                                <div>
                                    <h2 data-v-2a4dd70f="">Agora você só precisa pagar o seu boleto!</h2>
                                </div>
                            </div>
                        </header>
                        <div className="transaction-code">
                            <p>O código da sua transação é:</p>
                            <span>{props.codigo}</span>
                        </div>
                        <div className="thanks-content">
                            <div className="thanks-billet">
                                <div className="thanks-instructions">
                                    <p>
                                        Olá <b >{props.nome}</b>, sua compra foi registrada e aqui está o seu Boleto para ser pago. Você deve pagar o boleto em qualquer agência bancária, casa lotérica, ou através do seu internet banking.
                                    </p>
                                </div>
                                {/*<div>*/}
                                    {/*<div id="barCodNumber" className="box">*/}
                                        {/*<div className="billet-code">*/}
                                            {/*<p>Código de pagamento do seu boleto</p>*/}
                                            {/*<input id="linhaDigitavel" readonly="readonly" />*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                <div className="box">
                                    <div>
                                        <a id="saveAndDownloadBillet"  target="_blank" className="action-button" href={props.link}>Baixar o boleto</a>

                                    </div>
                                </div>
                                <p className="bg-warning">
                                    A compensação do pagamento pode levar até 3 dias úteis após o pagamento.
                                </p>
                                <p>
                                    Em alguns casos o serviço de email utilizado por você pode se enganar e colocar uma de nossas mensagens no SPAM. Por isto, pedimos que sempre verifique também a sua caixa de SPAM, pois quando seu pagamento for aprovado seus dados de acesso podem cair lá!
                                </p>
                                <p>
                                    Caso já tenha se passado mais de 72h que você efetuou o pagamento e ainda não recebeu seus dados de acesso, por gentileza, entre em contato através dos nossos canais de atendimento para que possamos verificar esta situação.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};