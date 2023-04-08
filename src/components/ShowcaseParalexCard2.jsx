import React from "react";

import Title from "react-vanilla-tilt";
// import vid from "../resources/mov_bbb.mp4";
import img from "../Assets/client1.png";
import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

function ShowcaseParalexCards(props) {
  var r = document.querySelector(":root");

  const scrollvalue = props.scroll - props.initval;
  if (scrollvalue <= props.endvalDesktop) {
    if (scrollvalue < 900) {
      r.style.setProperty("--imagescrolly", `${0}%`);
      r.style.setProperty("--scale", `${1}`);
      r.style.setProperty("--scrollbarwidth", `10px`);
      r.style.setProperty("--transition", `.1s linear`);
    }
    if (scrollvalue >= 900) {
      r.style.setProperty("--scrollbarwidth", `0px`);
      r.style.setProperty("--imagescrolly", `${-scrollvalue / 80 + 11}%`);
      r.style.setProperty("--transition", `.1s linear`);
      r.style.setProperty("--scale", `${0.6 + scrollvalue / 2000}`);
    }
    // paused state

    if (scrollvalue >= 2230) {
      r.style.setProperty("--scale", `${-scrollvalue / 3000 + 2.5}`);
      r.style.setProperty("--transition", `.1s linear`);
    }
    // paused state
    if (scrollvalue >= 4200) {
      r.style.setProperty("--transition", `1s linear`);
      r.style.setProperty("--scale", `${1.4}`);
    }
    if (scrollvalue >= 4200 && scrollvalue <= 5400) {
      r.style.setProperty("--transition", `.3s linear`);
      r.style.setProperty("--scale", `${1.4}`);
    }
    if (scrollvalue >= 6650) {
      r.style.setProperty("--scrollbarwidth", `10px`);
    }
  }

  var r = document.querySelector(":root");

  if (scrollvalue >= props.endvalDesktop && scrollvalue <= props.endval) {
    const scrollvalueMobile = props.scroll - props.endvalDesktop;
    console.log(scrollvalueMobile, "yaha aay");

    if (scrollvalueMobile < 50) {
      r.style.setProperty("--imagescrolly", `${0}%`);
      r.style.setProperty("--scale", `${1}`);
      r.style.setProperty("--scrollbarwidth", `10px`);
      r.style.setProperty("--transition", `1s linear`);
    }
    if (scrollvalueMobile >= 50) {
      r.style.setProperty("--scrollbarwidth", `0px`);
      r.style.setProperty("--imagescrolly", `${0 + -scrollvalueMobile / 120}%`);
      r.style.setProperty("--transition", `.1s linear`);
      r.style.setProperty("--scale", `${1 + scrollvalueMobile / 2000}`);
    }
    // paused state

    if (scrollvalueMobile >= 2230) {
      r.style.setProperty("--scale", `${-scrollvalueMobile / 3000 + 2.5}`);
      r.style.setProperty("--transition", `.1s linear`);
    }
    // paused state
    if (scrollvalueMobile >= 4200) {
      r.style.setProperty("--transition", `1s linear`);
      r.style.setProperty("--scale", `${1.4}`);
    }
    if (scrollvalueMobile >= 4200 && scrollvalueMobile <= 5400) {
      r.style.setProperty("--transition", `.3s linear`);
      r.style.setProperty("--scale", `${1.4}`);
    }
    if (scrollvalueMobile >= 6650) {
      r.style.setProperty("--scrollbarwidth", `10px`);
    }
  }
  useEffect(() => {
    // var vid = document.getElementById("videop");
    // vid.currentTime = (props.scroll - (props.startval + 100)) / 600;
  }, [props.scroll, props.startval]);

  return (
    <Flex
      className="thisOne"
      id="fixed"
      style={{
        gap: 40,
        top: 0,

        left: 0,
        position: props.scroll > 900 ? "fixed" : "sticky",
        opacity: props.scroll > props.trigerval && "1",
        display:
          props.scroll < props.trigerval
            ? "none"
            : props.scroll > props.endval
            ? "none"
            : "flex",
      }}
      direction={{ lg: "row", md: "column", sm: "column", xs: "column" }}
    >
      <Box
        width={"500px"}
        height={{ lg: "400px", md: "0", sm: "0", xs: "0" }}
        bg={"green"}
      ></Box>
      <Flex
        justifyContent={"center"}
        transform={{
          lg: "scale(1)",
          md: "scale(1)",
          sm: "scale(.9)",
          xs: "scale(.7)",
        }}
        alignItems={"center"}
        w={"600px"}
        height={"600px"}
        overflow={"hidden"}
      >
        {scrollvalue <= props.endvalDesktop ? (
          <Title className="titlehover" loop>
            <Box
              width="100% !important"
              height="100% !important"
              overflow="hidden"
              borderRadius="9px"
            >
              <div className="innerbox" id="inn">
                <img id="myimage" src={img} />
              </div>
            </Box>
          </Title>
        ) : (
          <motion.div
            initial={{ x: 250 }}
            animate={{ x: 10 }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
          >
            <Title className="titlehover2" loop>
              <Box
                width="100% !important"
                height="100% !important"
                overflow="hidden"
                ml={"4px"}
                borderRadius="10px"
              >
                <div className="innerbox" id="inn">
                  <img id="myimage" src={img} />
                </div>
              </Box>
            </Title>
          </motion.div>
        )}
      </Flex>

      {/*  */}
    </Flex>
  );
}

export default ShowcaseParalexCards;
