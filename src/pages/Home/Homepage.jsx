import React from "react";
import Contactform from "../../components/ContactForm";
import Technology from "../../components/TechnologyCorosal";
import Intro from "../../components/QuickIntro";
import Infohelps from "../../components/HelpCard";
import Sdata from "../../Data/Showcasedata";
import Sdata2 from "../../Data/Imagedata";
import Landinpage from "../../components/HeroSection";
import ShowcaseCard from "../../components/OfferCard";
import FormatWrapper from "..";
import Clientcomponent from "../../components/ShowcaseParalexCard";

import { Box, Flex, Text } from "@chakra-ui/react";
import LandingPage from "../../components/LandingPage";
import AutoSlider from "../../components/AutoSlider";
import ProjectShowcaseCard from "../../components/HeroSection";

const Homepage = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  function Ncard(val) {
    return (
      <ShowcaseCard
        key={val.id}
        title={val.title}
        icon={val.icon}
        link={val.link}
      />
    );
  }

  function Ncard2(val1) {
    return <Infohelps key={val1.id} title={val1.title} names={val1.names} />;
  }

  return (
    <>
      <div id="parl"></div>
      <FormatWrapper>
        <LandingPage />
        <ProjectShowcaseCard />

        <Box id="quickIntro" w={"100%"} height={"10vh"}></Box>
        <Intro />
        <Flex
          minH={"100vh"}
          px={"3rem"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"3xl"} fontWeight={"bold"} my={"5rem"} color={"#fff"}>
            WHERE WE CAN HELP
          </Text>
          <Flex
            w={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            {Sdata2.map(Ncard2)}
          </Flex>
        </Flex>
        <Flex
          minH={"100vh"}
          my={"3rem"}
          px={"3rem"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"3xl"} fontWeight={"bold"} my={"5rem"} color={"#fff"}>
            What We Offer
          </Text>
          <Text px={"3rem"} fontSize={"md"} color={"#fff"}>
            We are here to help you in designing and building digital products
            and platforms with data and cloud as our primary points. For that,
            we have addressed the best cutting-edge technologies.
          </Text>

          <Flex
            my={"5rem"}
            gap={"2rem"}
            w={"100%"}
            flexWrap="wrap"
            justifyContent={"center"}
            alignItems={"center"}
          >
            {Sdata.map(Ncard)}
          </Flex>
        </Flex>
        {/* <Technology /> */}
        <AutoSlider />
        <Contactform />
      </FormatWrapper>
    </>
  );
};

export default Homepage;
