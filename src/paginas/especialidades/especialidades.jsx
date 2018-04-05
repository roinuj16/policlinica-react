import React, { Component } from 'react'
import axios from 'axios'

import Breadcrumb from '../../components/breadcrumb/breadcrumb'
import EspecialidadesList from'./especialidadesList'

import { myConfig } from '../../main/consts'

export default class Especialidades extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: ''};
    }
    componentDidMount(){
        axios.get(`${myConfig.apiUrl}/especialidades`).then(response => {
                this.setState({
                    ...this.state,
                    items: response.data
                });
            }).catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <Breadcrumb name='Especialidades'/>
                 <EspecialidadesList list={this.state.items.dados} />
            </div>
        )
    }
}