import React, { useEffect, useState } from "react";
import SliderComp from "./ProjectShowcaseCard";
import Landinginto from "./LandingPage";
import { Box } from "@chakra-ui/react";
import ShowcaseParalexCard from "./ShowcaseParalexCard";

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

        <ShowcaseParalexCard
          scroll={scrollVal}
          trigerval={181}
          startval={800}
          endval={7640}
          initval={0}
        />

        <ShowcaseParalexCard
          scroll={scrollVal}
          trigerval={6950}
          startval={7640}
          endval={12940}
          initval={6950}
        />
      </Box>
    </>
  );
};

export default Landinpage;
