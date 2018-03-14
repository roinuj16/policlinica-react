import '../common/template/dependencies'
import React from 'react'
import Routes from './routes'
import Menu from '../components/menu/menu'
import Footer from '../components/footer/footer'

export default props => (
    <div className="wrapper">
        <Menu/>
        <Routes/>
        <Footer/>
    </div>
)