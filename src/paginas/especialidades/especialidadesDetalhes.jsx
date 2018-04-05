import React, { Component } from 'react'
import axios from 'axios'
import { myConfig } from '../../main/consts'
 var style = {
     borderBottom: '1px solid #eee'
 };

export default class EspecialidadesDetalhes extends Component {

    constructor(props) {
        super(props);
        this.state = {image: '', conteudo: ''};
    }

    componentDidMount(){
        let id = this.props.params.id;
        axios.get(`${myConfig.apiUrl}/especialidades-detalhes/${id}`)
            .then(response => {
                this.setState({
                    ...this.state,
                    image: response.data.dados.img_path,
                    nome: response.data.dados.nome,
                    conteudo: response.data.dados.conteudo,
                });
            })
            .catch(function (error) {
                console.log('erro:',error);
            })
    }
    render(){
        return (
        <section className="about-section ptb">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 pb-xs-30"> <img src={this.state.image} alt="" /> </div>
                    <div className="col-sm-6"> <span className="sub-title">Policlínica Saúde & Vida</span>
                        <h2>Consulta e exames com alto padrão de qualidade e com preços acessíveis.</h2>
                        <div dangerouslySetInnerHTML={{__html: this.state.conteudo}}/>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}