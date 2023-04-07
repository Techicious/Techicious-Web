import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";
import { SiMaterialdesignicons } from "react-icons/si";
import { TbArrowsExchange } from "react-icons/tb";
import { DiCode } from "react-icons/di";
import CustomButton from "../core/Button";

const Showcase_Card = (props) => {
  return (
    <Flex
      w={"250px"}
      rounded={"md"}
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
      m="1rem"
      bg={"dark.blue"}
      height={"300px"}
      direction={"column"}
    >
      <Flex id="hexagon" justifyContent={"center"} alignItems={"center"}>
        {props.icon === "design" ? (
          <SiMaterialdesignicons size={"2rem"} />
        ) : props.icon === "converter" ? (
          <TbArrowsExchange size={"2.5rem"} />
        ) : props.icon === "code" ? (
          <DiCode size={"4rem"} />
        ) : (
          ""
        )}
      </Flex>
      <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>
        {props.title}
      </Text>

      <CustomButton value="Read More" />
    </Flex>
  );
};

export default Showcase_Card;
