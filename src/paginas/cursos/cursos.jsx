import React, { Component } from 'react'

import Breadcrumb from '../../components/breadcrumb/breadcrumb'

export default class Cursos extends Component {
    render() {
        return (
            <div>
                <Breadcrumb name='Cursos'/>
                <h1>Cursos</h1>
            </div>
        )
    }
}