import React, { Component } from 'react'

import Blog from '../../components/blog/blog'
import Breadcrumb from '../../components/breadcrumb/breadcrumb'

export default class Informativo extends Component {
    render() {
        return (
            <div>
                <Breadcrumb name='Informativo'/>
                <Blog/>
            </div>
        )
    }
}