import React, { Component } from 'react'

import axios from 'axios'
import {myConfig} from '../../main/consts'
import { checkMail } from "../../common/helpers/functionsValidade";

import ContatoEndereco from './contato-endereco'
import ContafoForm from './contato-form'
import Breadcrumb from '../../components/breadcrumb/breadcrumb'

export default class Contato extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            classMessage:'',
            nome: '',
            email: '',
            assunto: '',
            mensagem: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.validForm = this.validForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            [name]: value,
            message: ''
        });
    }
    
    handleSend() {
        if(this.validForm()) {

            let dataSend = {
                nome: this.state.nome,
                email: this.state.email,
                assunto: this.state.assunto,
                mensagem: this.state.mensagem,
            };

            axios.post(`${myConfig.apiUrl}/contato`, dataSend).then(response => {
                this.setState({
                    ...this.state,
                    message: response.data.dados.msg,
                    classMessage: response.data.dados.codigo === 1 ? 'success' : 'danger'
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    resetForm() {
        this.setState({
            ...this.state,
            nome: '',
            email: '',
            assunto: '',
            mensagem: ''
        });
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

        if(this.state.assunto === '') {
            let elem = document.querySelector('#assunto');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                message: 'Favor preencher o campo assunto!',
                classMessage: 'danger'
            });
            return false;
        }

        if(this.state.mensagem === '') {
            let elem = document.querySelector('#mensagem');
            elem.parentNode.classList.add('has-error');
            elem.focus();
            this.setState({
                ...this.state,
                message: 'Favor preencher o campo mensagem!',
                classMessage: 'danger'
            });
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                <Breadcrumb name='Contato'/>
                <section className="ptb ptb-sm-80">
                    <div className="container contact-form mt-up">
                        <div className="row pt-80">
                            <div className="col-md-8 col-md-offset-2 text-center">
                                <h2>Entre em contato conosco</h2>
                            </div>
                        </div>
                        <ContatoEndereco/>
                        <ContafoForm
                            nome={this.state.nome}
                            email={this.state.email}
                            assunto={this.state.assunto}
                            mensagem={this.state.mensagem}
                            message={this.state.message}
                            classMessage={this.state.classMessage}
                            handleChange={this.handleChange}
                            handleSend={this.handleSend}
                        />
                    </div>
                </section>
            </div>
        )
    }
}