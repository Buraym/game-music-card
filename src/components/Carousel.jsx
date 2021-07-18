import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/_slick.scss"; 
import "../styles/_slick-theme.scss";
import Card from '../components/Card'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <ChevronRightIcon />,
          prevArrow: <ChevronLeftIcon />,
        };
    
        return (
        <div>
            <Slider {...settings}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            </Slider>
        </div>
        );
    }
}