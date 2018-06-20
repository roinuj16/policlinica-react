import React, { Component } from 'react'
import Loading from 'react-loading'
import axios from 'axios'

import { myConfig } from '../../main/consts'
import If from '../../components/if/if'
import { checkMail } from "../../common/helpers/functionsValidade";

import Breadcrumb from '../../components/breadcrumb/breadcrumb'
import EbookDetail from './ebook-details'

export default class Ebook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: '',
            nome:'',
            email:'',
            loadSendEmail: false,
            load: true,
            viewDetails: false,
            objDetail: '',
            message: ''
        };

        this.listarEboks = this.listarEboks.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    componentWillMount() {
        axios.get(`${myConfig.apiUrl}/ebooks`).then(response => {
            console.log('ebooks', response.data);
            this.setState({
                ...this.state,
                items: response.data.dados,
                load: false
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    handleChange (e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            [name]: value,
            message: '',
            classMessage: ''
        });
    }

    handleSend (idEbook) {

        this.setState({
            ...this.state,
            loadSendEmail: true
        });

        if(this.validForm()) {
            let dataSend = {
                idEbook: idEbook,
                nome: this.state.nome,
                email: this.state.email,
            };

            axios.post(`${myConfig.apiUrl}/send-ebook`, dataSend).then(response => {
                console.log(response.data);
                this.setState({
                    ...this.state,
                    message: response.data.dados.msg,
                    classMessage: response.data.dados.codigo === 1 ? 'success' : 'danger',
                    loadSendEmail: false
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    validForm() {
        if(this.state.nome === '') {
            let elem = document.querySelector('#nome');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                message: 'Favor preencher o campo nome!',
                classMessage: 'danger'
            });
            return false;
        }

        if(this.state.email === '') {
            let elem = document.querySelector('#email');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                message: 'Favor preencher o campo email!',
                classMessage: 'danger'
            });
            return false;
        }else if (checkMail(this.state.email) === false) {
            let elem = document.querySelector('#email');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                message: 'Email Inválido',
                classMessage: 'danger'
            });
            return false;
        }
        return true;
    }

    listarEboks() {
        let list = this.state.items || [];
        return list.map(todo => {
            return (
                <div className="col-md-3 col-sm-6" key={todo.id}>
                    <span className="thumbnail">
                        <a onClick={() => this.showDetails(true, todo)}>
                            <img src={ todo.path_image } alt={ todo.nome }/>
                        </a>
                        <h4 className='text-center'>{ todo.nome }</h4>
                    </span>
                </div>
            )
        })
    }

    showDetails(info, objDetails) {
        this.setState({
            ...this.state,
            viewDetails: info,
            objDetail: (info) ? objDetails : ''
        });
    }

    render() {
        return (
            <div>
                <Breadcrumb name='E-Books'/>
                <If mostrar={this.state.load}>
                    <div className="container pt-80">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-5">
                                <Loading type='bars' color='#31B77D' delay={5}/>
                            </div>
                        </div>
                    </div>
                </If>
                <If mostrar={!this.state.viewDetails}>
                    <div className="container pt-80">
                        <div className="row">
                            {this.listarEboks()}
                        </div>
                    </div>
                </If>
                <If mostrar={this.state.viewDetails}>
                    <div className="container pt-80">
                        <div className="row">
                            <EbookDet
                                 ail
                                details={this.state.objDetail}
                                load={this.state.loadSendEmail}
                                handleChange={this.handleChange}
                                handleSend={this.handleSend}
                                classMessage={this.state.classMessage}
                                message={this.state.message}/>
                        </div>
                    </div>
                </If>
            </div>
        )
    }
}