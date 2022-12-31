import React, { useEffect, useState } from 'react'
import '../css/Landingpage.css'
import SliderComp from "./SliderComp"
import '../css/Button.css'
import Social from './Social'
import Landinginto from './Landinginto'
import Clientcomponent from './Clientcomponent'






const Landinpage = () => {


  const [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollVal(
        Math.abs(document.getElementById("parl").getBoundingClientRect().top)
      );
    });

    return () => {
      document.removeEventListener("scroll", () => { });
    };
  }, []);
  console.log(scrollVal);



  return (

    <>
      <div className="parallax" id='parl'>
        <section className="landingpage">
          <Social />
          <Landinginto />
          <SliderComp />
        </section>
        {
          scrollVal < 8800 ? <Clientcomponent
            scroll={scrollVal}
            trigerval={181}
            startval={800}
            endval={8800}
            initval={0}
          />
            : <Clientcomponent
              scroll={scrollVal}
              trigerval={8161}
              startval={8820}
              endval={17238}
              initval={8800}
            />
        }





      </div>
    </>
  )
}

export default Landinpage

