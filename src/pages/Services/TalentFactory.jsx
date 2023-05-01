import React from "react";
import img1 from "../../Assets/talentfactory.png";
import FormatWrapper from "..";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TalentFactory = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <FormatWrapper>
      <Flex
        padding={{
          lg: "2rem 5rem",
          md: "2rem 3rem",
          sm: "2rem 2rem",
          xs: "2rem 1rem",
        }}
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          as={motion.div}
          initial={{ transform: "translateX(-100%)" }}
          animate={{ transform: "translateX(0%)" }}
          transition="0.5s linear"
        >
          <Box mx={"1rem"} w={"400px"}>
            <img src={img1} alt="" />
          </Box>
        </Flex>
        <Flex
          as={motion.div}
          initial={{ transform: "translateX(100%)" }}
          animate={{ transform: "translateX(0%)" }}
          transition="0.5s linear"
        >
          <Flex px="2rem" direction={"column"} color={"#fff"}>
            <Text fontSize={"5xl"} fontWeight={"bold"}>
              Talent Factory
            </Text>

            <Text fontSize={"md"} textAlign={"justify"} my={"1rem"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              placeat unde architecto. Natus corporis optio minima atque
              accusamus, iusto error. Optio suscipit dolorum voluptatem. Quia
              facere officiis molestias praesentium recusandae et dolores quas
              omnis deserunt sit. Eos, officiis libero voluptas nesciunt maxime,
              impedit excepturi aliquid voluptatem incidunt error provident ab.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </FormatWrapper>
  );
};

export default TalentFactory;
