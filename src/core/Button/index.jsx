import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CustomButton = (props) => {
  const navigate = useNavigate();

  const navigateToPage = (to) => {
    navigate("/" + to);
  };
  return (
    <Flex
      onClick={() => {
        props.link ? navigateToPage(props.link) : console.log("");
      }}
      width={"10rem"}
      position={"relative"}
      className="btnHoverEffect"
      my={"1rem"}
      cursor={"pointer"}
    >
      <Text
        fontSize={"2xl"}
        bg={"dark.pink"}
        rounded="500px"
        p={".4rem"}
        transition={".4s"}
        color={"#fff"}
        className="effect"
        _hover={{ pr: "8rem" }}
      >
        <BsArrowRightShort />
      </Text>
      <Text
        className="readmore"
        color={"#000"}
        transition={".4s"}
        position={"absolute"}
        top={"50%"}
        left={0}
        mx={"1rem"}
        transform={"translate(50%,-50%)"}
      >
        {props.value}
      </Text>
    </Flex>
  );
};

export default CustomButton;
