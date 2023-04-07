import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex } from "@chakra-ui/react";
const sliderData = [
  {
    item: "ss",
  },
  {
    item: "ss",
  },
  {
    item: "ss",
  },
  {
    item: "ss",
  },
  {
    item: "ss",
  },
  {
    item: "ss",
  },
  {
    item: "ss",
  },
  {
    item: "ss",
  },
  {
    item: "ss",
  },
  {
    item: "ss",
  },
];

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 2.3,
      centerMode: true,
      slidesToScroll: 1,
      autoplay: true,
      centerPadding: "0",
      speed: 1000,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      useTransform: true,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerMode: true,
            centerPadding: "-80px",
            slidesToShow: 2.3,
          },
        },
        {
          breakpoint: 950,
          settings: {
            centerMode: true,
            centerPadding: "120px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 620,
          settings: {
            centerPadding: "100px",
            centerMode: true,

            slidesToShow: 1.1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            centerPadding: "180px",
            slidesToShow: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 514,
          settings: {
            centerPadding: "100px",
            slidesToShow: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 383,
          settings: {
            centerPadding: "20px",
            slidesToShow: 1,
            centerMode: true,
          },
        },
      ],
    };

    return (
      <Box w={"100%"} overflow={"hidden"}>
        <Slider {...settings}>
          {sliderData.map((item, idx) => {
            return (
              <Box m={"2rem 1rem"} key={idx}>
                <Box
                  bg="rgb(253, 0, 0)"
                  className="Services_card"
                  justifyContent={"center"}
                  alignItems={"center"}
                  overflow="hidden"
                  my={"5rem"}
                  mx={"1rem"}
                  zIndex="1"
                  rounded="xl"
                  width={{
                    lg: "400px",
                    md: "400px",
                    sm: "300px",
                    xs: "200px",
                  }}
                  height={{
                    lg: "300px",
                    md: "300px",
                    sm: "200px",
                    xs: "120px",
                  }}
                ></Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    );
  }
}
