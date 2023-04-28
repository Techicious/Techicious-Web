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
  // console.log(scrollVal);

  return (
    <>
      <Box className="parallax">
        <Box className="landingpage">
          <SliderComp />
        </Box>
        {scrollVal < 14068 ? (
          <ShowcaseParalexCards
            reverse={false}
            scroll={scrollVal}
            trigerval={181}
            startval={800}
            endvalDesktop={7640}
            endval={14068}
            initval={0}
          />
        ) : (
          <ShowcaseParalexCards
            reverse={true}
            scroll={scrollVal}
            trigerval={14068}
            startval={14068}
            // endvalDesktop={20908}
            endvalDesktop={7640}
            endval={28000}
            initval={14068}
          />
          // <ShowcaseParalexCards
          //   scroll={scrollVal}
          //   trigerval={181}
          //   startval={800}
          //   endvalDesktop={7640}
          //   startvalMobile={800}
          //   endval={14068}
          //   initval={0}
          // />
        )}
      </Box>
    </>
  );
};

export default Landinpage;
