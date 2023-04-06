import React, { useEffect, useState } from "react";
import "../css/Landingpage.css";
import SliderComp from "./SliderComp";
import "../css/Button.css";
import Social from "./Social";
import Landinginto from "./Landinginto";
import Clientcomponent from "./Clientcomponent";

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
      <div className="parallax" id="parl">
        <section className="landingpage">
          <Social />
          <Landinginto />
          <SliderComp />
        </section>
        {scrollVal < 5476 ? (
          <Clientcomponent
            scroll={scrollVal}
            trigerval={181}
            startval={800}
            endval={5476}
            initval={0}
          />
        ) : (
          <Clientcomponent
            scroll={scrollVal}
            trigerval={5476}
            startval={5476}
            endval={12550}
            initval={4676}
          />
        )}
      </div>
    </>
  );
};

export default Landinpage;
