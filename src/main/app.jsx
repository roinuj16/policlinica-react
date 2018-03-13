import '../common/template/dependencies'
import React from 'react'
import Routes from './routes'
import Menu from '../components/menu'

export default props => (
    <div className="wrapper">
        <Menu/>
        <Routes/>
    </div>
)