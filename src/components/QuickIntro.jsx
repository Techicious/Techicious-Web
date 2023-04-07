import { BsArrowRightShort } from "react-icons/bs";
import { Box, Flex, Text } from "@chakra-ui/react";
import CustomButton from "../core/Button";
const Intro = () => {
  return (
    <Flex
      width={"100%"}
      my={"5rem"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      <Box bg={"dark.blue"} shadow={"md"} p={"4rem 3rem"} rounded={"2xl"}>
        <Text fontSize={"3xl"} fontWeight={"bold"} my="2rem">
          QUICK INTRODUCTION
        </Text>

        <Text fontSize={"md"}>
          Welcome to the world of VAPPRTECH, we help you imagine, implement and
          accelerate your digital journey by creating applications you desire.
          Whether, you are looking to craft the most attractive and easily
          navigable website or focus on mobile app development services, our
          team will venture into your thought process and turn that into
          reality.
        </Text>

        <CustomButton value="Read More" />
      </Box>
    </Flex>
  );
};

export default Intro;
