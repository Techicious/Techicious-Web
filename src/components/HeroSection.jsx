import React, { useEffect, useState } from "react";
import SliderComp from "./ProjectShowcaseCard";
import Landinginto from "./LandingPage";
import { Box } from "@chakra-ui/react";
import ShowcaseParalexCards from "./ShowcaseParalexCard2";

const Landinpage = () => {
  const [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollVal(
        Math.abs(document.getElementById("parl").getBoundingClientRect().top)
      );
    });

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);
  console.log(scrollVal);

  return (
    <>
      <Box className="parallax">
        <Box className="landingpage">
          <SliderComp />
        </Box>

        <ShowcaseParalexCards
          scroll={scrollVal}
          trigerval={181}
          startval={800}
          endvalDesktop={7640}
          startvalMobile={800}
          endval={14068}
          initval={0}
        />
      </Box>
    </>
  );
};

export default Landinpage;
