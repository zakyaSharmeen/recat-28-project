import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderImgs } from '../../utils/images';





function SliderHome() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        
        autoplaySpeed: 3000,
      };
  return (
    <div className='slider'>
    <div className=''>
      <div className='overflow-x-hidden'>
        <Slider {...settings}>
          <div className='slider-item'>
            <img src = {sliderImgs[0]} alt = "" />
          </div>
          <div className='slider-item'>
            <img src = {sliderImgs[1]} alt = "" />
          </div>
          
        </Slider>
      </div>
    </div>
  </div>
  )
}

export default SliderHome