import React, { Component } from 'react'
import moment from 'moment'


import axios from 'axios'
import { myConfig } from '../../main/consts'

export default class Blog extends Component {
    constructor(props) {
        moment.locale('pt-br');
        super(props);
        this.state = { items: '' };
        this.listaPosts = this.listaPosts.bind(this)
    }

    componentDidMount() {
        axios.get(`${myConfig.apiUrl}/post`).then(response => {
            this.setState({
                ...this.state,
                items: response.data.dados
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    listaPosts() {
        let list = this.state.items || [];

        //Limita a quantidade de post que será exibido
        if (this.props.limit) {
            const item = this.props.limit;
            list = list.filter(function (elem, index, array) {
                if (index < item) {
                    return elem;
                }
            });
        }

        return list.map(todo => {
            let dia = moment(todo.created_at).format('L').split('/')[1];
            let mes = moment(todo.created_at).format('MMM');

            return (
                <div className="col-sm-3 mb-xs-30" key={todo.id}>
                    <div className="blog-post">
                        <div className="post-media">
                            <img src={todo.img_path} alt=""/>
                            <span className="event-calender blog-date"> {dia} <span>{mes}</span> </span>
                        </div>
                        <div className="post-meta">
                            <span>por <a>{ todo.user.name }</a>,</span>
                        </div>
                        <div className="post-header">
                            <h5>{ todo.titulo }</h5>
                        </div>
                        <div className="post-entry">
                            <div dangerouslySetInnerHTML={{__html: todo.resumo}}/>
                        </div>
                        <div className="post-more-link pull-left">
                            <a href={`#/informativo-detalhes/${todo.id}`} className="btn btn-md btn-color-line ">LeiaMais</a></div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <section id="blog" className="wow fadeIn ptb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 mb-xs-30 mb-sm-60">
                                <h2 className="mt-sm">Posts em Destaque </h2>
                                <div className="spacer-15"></div>
                                <div className="row">
                                    {this.listaPosts()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}