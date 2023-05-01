import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function LandingPage() {
  return (
    <Flex
      direction={"column"}
      color={"#fff"}
      w={"100%"}
      height={"20rem"}
      px={"3rem"}
    >
      <Text fontSize={"lg"} my={"1rem"}>
        WELCOME,
      </Text>
      <Text
        fontSize={{ lg: "5xl", md: "5xl", sm: "4xl", xs: "2xl" }}
        lineHeight={{ lg: "3rem", md: "3rem", sm: "3rem", xs: "2rem" }}
        fontWeight={"bold"}
      >
        Innovative Solutions Focused on Your Success
      </Text>
      <Text fontSize={"lg"} my={"1rem"}>
        <Text as={"span"}>INNOVATIVE. OPTIMIZE. AUTOMATE</Text>
      </Text>
    </Flex>
  );
}

export default LandingPage;
