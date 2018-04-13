import React, { Component } from 'react'
import axios from 'axios'
import { myConfig } from '../../main/consts'
import moment from 'moment'

import Breadcrumb from '../../components/breadcrumb/breadcrumb'
import InformativosRecentes from './informativoRecentes'

export default class InformativoDetalhes extends Component {

    constructor(props) {
        super(props);
        moment.locale('pt-br');
        this.state = {user: '', dia:'', mes:'', conteudo: '', recentes: []};

        this.changeInfo = this.changeInfo.bind(this);
    }
    componentWillMount() {
        axios.get(`${myConfig.apiUrl}/post-recentes`).then(response => {
            console.log('aqui', response.data.dados);
            this.setState({
                ...this.state,
                recentes: response.data.dados
            });
        }).catch(function (error) {
            console.log('errou...', error);
        })
    }

    componentDidMount(){
        let id = this.props.params.id;
        axios.get(`${myConfig.apiUrl}/post-detalhes/${id}`)
            .then(response => {
                console.log('ss',response.data.posts[0]);

                this.setState({
                    ...this.state,
                    conteudo: response.data.posts[0],
                    user: response.data.posts[0].name,
                    dia: moment(response.data.posts[0].created_at).format('L').split('/')[1],
                    mes: moment(response.data.posts[0].created_at).format('MMM')
                });
            })
            .catch(function (error) {
                console.log('erro:',error);
            })
    }

    changeInfo(info) {
        console.log('info', info);

        this.setState({
            ...this.state,
            conteudo: info,
            user: info.user.name,
            dia: moment(info.created_at).format('L').split('/')[1],
            mes: moment(info.created_at).format('MMM')
        });
    }
    
    render() {
        return (
            <div>
                <Breadcrumb name='Informativo'/>
                <section className="ptb ptb-sm-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 blog-post-hr post-section">
                                <div className="blog-post mb-30">
                                    <div className="post-meta">
                                        <span>por <a>{ this.state.user }</a>,</span>
                                    </div>
                                    <div className="post-header">
                                        <h2>{this.state.conteudo.titulo}</h2>
                                    </div>
                                    <div className="post-media"> <img src={this.state.conteudo.img_path} alt="" />
                                        <span className="event-calender blog-date"> {this.state.dia} <span>{this.state.mes}</span> </span>
                                    </div>
                                    <div className="post-entry">
                                        <div dangerouslySetInnerHTML={{__html: this.state.conteudo.conteudo}}/>
                                    </div>
                                </div>
                                <hr />
                                <div className="clearfix"></div>
                            </div>
                            <InformativosRecentes list={this.state.recentes} changeInfo={this.changeInfo} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}