import React, { Component } from 'react'

import Banner from '../../components/home/banner/banner'
import AboutHome from '../../components/home/aboutHome/aboutHome'
/*
import EspecialidadesHome from '../../components/home/especialidadesHome/especialidadesHome'
*/
import Atendimento from '../../components/home/atendimento/atendimento'
import Blog from '../../components/blog/blog'

export default class Home extends Component {
    render() {
        return (
            <div>
               <Banner/>
                <AboutHome/>
                {/*<EspecialidadesHome/>*/}
                <Atendimento/>
                <Blog limit={4}/>
            </div>
        )
    }
}
