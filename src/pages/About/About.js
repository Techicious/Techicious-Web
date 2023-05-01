import React from "react";

import img1 from "../../Assets/about_us.png";
import { Flex } from "@chakra-ui/react";
import FormatWrapper from "..";

const About = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <FormatWrapper>
      <Flex className="mw">
        <Flex className="pagemargin">
          <Flex className="aboutlanding">
            <Flex className="aboutlanding_left">
              <img src={img1} alt="about us" width={400} />
            </Flex>
            <Flex className="aboutlanding_right">
              <Flex className="title">
                <h1>About Us</h1>
              </Flex>
              <Flex className="para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt placeat unde architecto. Natus corporis optio minima
                  atque accusamus, iusto error. Optio suscipit dolorum
                  voluptatem. Quia facere officiis molestias praesentium
                  recusandae et dolores quas omnis deserunt sit. Eos, officiis
                  libero voluptas nesciunt maxime, impedit excepturi aliquid
                  voluptatem incidunt error provident ab.
                </p>
              </Flex>
            </Flex>
          </Flex>
         
        </Flex>
      </Flex>
    </FormatWrapper>
  );
};

export default About;
