import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../components/home/home'
import Sobre from '../components/sobre/sobre'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Redirect from='*' to='/' />
    </Router>
)