import React, { Component } from 'react'

import Banner from '../../components/banner/banner'
import AboutHome from '../../components/aboutHome/aboutHome'
import EspecialidadesHome from '../../components/especialidadesHome/especialidadesHome'

export default class Home extends Component {
    render() {
        return (
            <div>
               <Banner/>
                <AboutHome/>
                <EspecialidadesHome/>
            </div>
        )
    }
}