import React, { Component } from 'react'
import Slider from "react-slick";
import 'modules/slick-carousel/slick/slick.css'
import 'modules/slick-carousel/slick/slick-theme.css'
import './banner.css'


import axios from 'axios'
import { myConfig } from '../../../main/consts'

var settings = {
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { items: '' };
        this.listaBanners = this.listaBanners.bind(this)
    }

    componentDidMount() {
        axios.get(`${myConfig.apiUrl}/banner`).then(response => {
            this.setState({
                ...this.state,
                items: response.data.dados
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    listaBanners() {
        let list = this.state.items || [];

        console.log('here...', list)



        return list.map(todo => {
            return (
                <div key={todo.id}>
                    <a href="#"><img src={todo.path_image}/></a>
                </div>
            )
        })
    }

    render() {
        return (
        <div className="">
            <Slider {...settings}>
                {this.listaBanners()}
            </Slider>
        </div>
        )
    }
}
