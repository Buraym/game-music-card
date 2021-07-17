import React, { Component } from "react";
import Slider from "react-slick";
import Card from '../components/Card'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function Carousel() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <ChevronRightIcon />,
      prevArrow: <ChevronLeftIcon />
    }
    
    return (
    <Slider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </Slider>
    );
}

export default Carousel;