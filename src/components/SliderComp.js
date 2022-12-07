import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slidercomp.css"




export default class SimpleSlider extends Component {
  render() {
    var settings = {
      className:"box",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: "0px",
        speed:1000,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        useTransform:true,
        responsive: [
            {
              breakpoint: 1032,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 680,
              settings: {
                
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
      
      };
    return (
      <div className="slidershadow">
        <Slider {...settings}>
          <div>
            <div className="Services_card"></div>
          </div>
          <div>
          <div className="Services_card"></div>
          </div>
          <div>
          <div className="Services_card"></div>
          </div>
          <div>
          <div className="Services_card"></div>
          </div>
          <div>
          <div className="Services_card"></div>
          </div>
          <div>
          <div className="Services_card"></div>
          </div>
        </Slider>
      </div>
    );
  }
}