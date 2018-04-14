import React from 'react'
import Slider from "react-slick";
import 'modules/slick-carousel/slick/slick.css'
import 'modules/slick-carousel/slick/slick-theme.css'
import './banner.css'

import img1 from '../../../assets/images/banner/img2.jpg';
import img2 from '../../../assets/images/banner/slide-2.jpg';
import img3 from '../../../assets/images/banner/img3.jpg';


var settings = {
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default props => (
    <div className="">
        <Slider {...settings}>
            <div>
                <a href="#"><img src={img1} /></a>
            </div>
            <div>
                <a href="#"><img src={img2} /></a>
            </div>
            <div>
                <a href="#"><img src={img3} /></a>
            </div>
            <div>
                <a href="#"><img src={img1} /></a>
            </div>
        </Slider>
    </div>
)