import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";

import Social from "../components/SocialMediaIcons";
import Header from "../components/Header";

const FormatWrapper = ({ children }) => {
  const [count2, setCount2] = useState(false);

  function handleclick2() {
    setCount2((count2) => !count2);
  }

  return (
    <Flex
      width={"100%"}
      minH={"100vh"}
      justifyContent={"center"}
      bg={"dark.bgcolor"}
      direction={"column"}
      alignItems={"center"}
    >
      <Social />
      {/* <Box className={`theme${thme}`} onClick={handleclick2}>
        <Box className="tgle"></Box>
      </Box> */}
      <Header />

      <Box
        w={"100%"}
        minH={"100vh"}
        overflow={"hidden"}
        // px={{ lg: "3rem", md: "3rem", sm: "3rem", xs: "1rem" }}
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default FormatWrapper;
