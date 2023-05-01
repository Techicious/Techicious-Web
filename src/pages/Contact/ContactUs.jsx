import React from "react";
import ContactForm from "../../components/ContactForm";
import FormatWrapper from "..";
import { Box, Flex, Text } from "@chakra-ui/react";

const ContactUs = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <FormatWrapper>
      <Flex
        w={"100%"}
        minH="100vh"
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontSize={"5xl"} color={"#fff"} fontWeight={"bold"}>
          Contact Us
        </Text>
        <Box w={"100%"}>
          <ContactForm />
        </Box>
      </Flex>
    </FormatWrapper>
  );
};

export default ContactUs;
