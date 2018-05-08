import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../paginas/home/home'
import Sobre from '../paginas/sobre/sobre'
import Especialidades from '../paginas/especialidades/especialidades'
import Convenios from '../paginas/convenios/convenios'
import Informativo from '../paginas/informativo/informativo'
import InformativoDetalhes from '../paginas/informativo/informativoDetalhes'
import Contato from '../paginas/contato/contato'
import Ead from '../components/menu/menuEad'
import SemiPresencial from '../components/menu/menuSemiPresencial'
import CarrinhoServico from '../paginas/cursos/carrinhoServico'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/especialidades' component={Especialidades} />
        <Route path='/convenios' component={Convenios} />
        <Route path='/informativo' component={Informativo} />
        <Route path='informativo-detalhes/:id' component={InformativoDetalhes} />
        <Route path='/contato' component={Contato} />
        <Route path='/ead' component={Ead} />
        <Route path='/semipresencial' component={SemiPresencial} />
        <Route path='/carrinho/:id' component={InformativoDetalhes} />
        <Route path='/carrinho-servico' component={CarrinhoServico} />
        <Redirect from='*' to='/' />
    </Router>
)