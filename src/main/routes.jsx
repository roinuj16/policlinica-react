import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../paginas/home/home'
import Sobre from '../paginas/sobre/sobre'
import Especialidades from '../paginas/especialidades/especialidades'
import Convenios from '../paginas/convenios/convenios'
import Informativo from '../paginas/informativo/informativo'
import InformativoDetalhes from '../paginas/informativo/informativoDetalhes'
import Contato from '../paginas/contato/contato'
import Cursos from '../paginas/cursos/cursos'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/especialidades' component={Especialidades} />
        <Route path='/convenios' component={Convenios} />
        <Route path='/informativo' component={Informativo} />
        <Route path='informativo-detalhes/:id' component={InformativoDetalhes} />
        <Route path='/contato' component={Contato} />
        <Route path='/ead' component={Cursos} />
        <Route path='/semipresencial' component={Cursos} />
        <Route path='/presencial' component={Cursos} />
        <Redirect from='*' to='/' />
    </Router>
)