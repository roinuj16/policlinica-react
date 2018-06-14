import React, { Component } from 'react'
import Loading from 'react-loading'
import axios from 'axios'

import If from '../../components/if/if'
import Breadcrumb from '../../components/breadcrumb/breadcrumb'
import EspecialidadesList from'./especialidadesList'

import { myConfig } from '../../main/consts'

export default class Especialidades extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: '', load: true};
    }
    componentDidMount(){
        axios.get(`${myConfig.apiUrl}/especialidades`).then(response => {
                this.setState({
                    ...this.state,
                    items: response.data,
                    load: false
                });
            }).catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <Breadcrumb name='Especialidades'/>

                <If mostrar={this.state.load}>
                    <div className="container pt-80">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-5">
                                <Loading type='bars' color='#31B77D' delay={5}/>
                            </div>
                        </div>
                    </div>
                </If>

                 <EspecialidadesList list={this.state.items.dados} />
            </div>
        )
    }
}