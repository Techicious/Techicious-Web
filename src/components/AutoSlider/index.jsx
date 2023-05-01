import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import img from "../../Assets/slider1.jpg";

const AutoSlider = () => {
  const sliderData = [
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
    {
      imageURL: img,
    },
  ];

  return (
    <>
      <Flex>
        <Box
          className="slider"
          display={"grid"}
          placeItems={"center"}
          w={"90%"}
          position={"relative"}
          margin={"auto"}
          height={"250px"}
        >
          <Flex
            w={"calc(250px * 12)"}
            // w={`calc(250px * ${sliderData.length}`}
            className="slider-track"
          >
            {sliderData.map((item, idx) => {
              return (
                <Box
                  key={idx}
                  w={"250px"}
                  height={"250px"}
                  p={"15px"}
                  className="slide"
                >
                  <img src={item.imageURL} alt="imageref" />
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default AutoSlider;
