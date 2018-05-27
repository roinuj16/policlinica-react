import React from 'react'

const iframeStyle = {
    border:0,
    width: '100%'
};

export default props => (
    <div>
        <div className="row pt-30">
            <div className="col-sm-6">
                <div className="row-fluid">
                    <div className="col-md-6">
                        <h4>Jardim do Ingá</h4>
                        <h5><span className="glyphicon glyphicon-map-marker"></span> Endereço</h5>
                        <span>Av Lucena Roriz, qd 58, Lote 27. Jardim Ingá,  Luziânia - GO</span>
                        <h5><span className="glyphicon glyphicon-phone-alt"></span> Telefone</h5>
                        <span>(61) 3623-6550 / (61) 9-8629-5131 WhatsApp</span>
                    </div>
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.388917241604!2d-47.94798928564033!3d-16.148882088831794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599b0ff1fd15d3%3A0x6b78454221776eaf!2zUG9saWNsw61uaWNhIFNhw7pkZSAmIFZpZGE!5e0!3m2!1spt-BR!2sbr!4v1527340871681" width="248" height="250" frameBorder="0" style={iframeStyle} allowFullScreen></iframe>

                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="row-fluid">
                    <div className="col-md-6">
                        <h4>Cidade Ocidental</h4>
                        <h5><span className="glyphicon glyphicon-map-marker"></span> Endereço</h5>
                        <span>SQ 12, quadra 01, n. 05. Cidade Ocidental - GO</span>
                        <h5><span className="glyphicon glyphicon-phone-alt"></span> Telefone</h5>
                        <span>(61) 3625-2809 / (61) 9-8585-5675 WhatsApp</span>
                    </div>
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.147462334269!2d-47.938028382556155!3d-16.10967089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93598568defe3119%3A0xa1b768505c255739!2zUG9saWNsw61uaWNhIFNhw7pkZSAmIFZpZGE!5e0!3m2!1spt-BR!2sbr!4v1527342708925" width="248" height="250" frameBorder="0" style={iframeStyle} allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
)