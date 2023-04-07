import React from "react";
import img2 from "../../Assets/logo2.png";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { IoIosCall, IoIosMail, IoIosMap } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        w={"100%"}
        overflow={'hidden'}
        p={"2rem"}
        flexWrap={"wrap"}
        alignItems={"center"}
      >
        <Box color={"#fff"}>
          <Text fontSize={"2xl"} my={"2rem"} fontWeight={"bold"}>
            Navigation Links
          </Text>

          <Link to="/About_Us">
            {" "}
            <Text fontSize={"md"} my={"1rem"}>
              About Us
            </Text>
          </Link>

          <Link to="/Solutions/IOT_Solutions">
            {" "}
            <Text fontSize={"md"} my={"1rem"}>
              Solution
            </Text>
          </Link>

          <Link to="/Technology">
            {" "}
            <Text fontSize={"md"} my={"1rem"}>
              Technology
            </Text>
          </Link>

          <Link to="/Contact_Us">
            <Text fontSize={"md"} my={"1rem"}>
              {" "}
              Contact Us
            </Text>
          </Link>
        </Box>

        <Flex alignItems={"center"} direction={"column"} gap={"2rem"}>
          <img width="240px" src={img2} alt="logo" />
          <Text color={"#fff"}>Copyright @ Techicious 2022</Text>
        </Flex>
        <Flex
         
          alignItems={"flex-start"}
          color={"#fff"}
          direction={"column"}
          gap={"1rem"}
        >
          <Text fontSize={"2xl"} my={"2rem"} fontWeight={"bold"}>
            Connect With Us
          </Text>
          <Flex>
            <Text mx="1rem">
              <IoIosMap />
            </Text>
            <Text fontSize={"sm"}>
              XYZ bulinghum street, <br /> sahibabad, Ghaziabad, 201010
            </Text>
          </Flex>
          <Flex>
            {" "}
            <Text mx="1rem">
              <IoIosMail />
            </Text>
            <Text fontSize={"sm"}> Techicious.reachus@gmail.com</Text>
          </Flex>
          <Flex>
            {" "}
            <Text mx="1rem">
              <IoIosCall />
            </Text>
            <Text fontSize={"sm"}>+91-9999999999</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
