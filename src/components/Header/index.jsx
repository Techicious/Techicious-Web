import { Box, Flex, Link, StatDownArrow, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import img1 from "../../Assets/logo.png";
import { AiFillCaretUp } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [subMenu2, setSubMenu2] = useState(false);
  const navigate = useNavigate();

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 1000 && currentScrollPos < 28000) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.transform = "translateY(0px)";
      } else {
        document.getElementById("navbar").style.transform =
          "translateY(-200px)";
      }
    } else {
      document.getElementById("navbar").style.transform = "translateY(0px)";
    }

    prevScrollpos = currentScrollPos;
  };

  const navigateToPage = (to) => {
    navigate("/" + to);
  };
  return (
    <>
      <Flex
        top={0}
        transition={".3s"}
        id="navbar"
        direction={"column"}
        position={"fixed"}
        zIndex={"999999"}
        left={0}
        w={"100%"}
        color={"#fff"}
        bg={"#0e1012ad"}
        backdropFilter={"blur(10px)"}
      >
        <Flex
          bg={"#0e101289"}
          backdropFilter={"blur(4px)"}
          color={"#fff"}
          zIndex={"9999999"}
          justifyContent={"space-between"}
          p={".2rem"}
          px={"3rem"}
          alignItems={"center"}
          w={"100%"}
        >
          <Link to="/">
            <img width="200px" src={img1} alt="" />
          </Link>
          {/* desktop */}
          {/* home */}
          <Flex
            fontWeight={"bold"}
            display={{ lg: "flex", md: "none", sm: "none", xs: "none" }}
            gap={"1rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex direction={"column"} className="parentMenu">
              <Text
                fontSize={"sm"}
                onClick={() => {
                  navigateToPage("");
                }}
              >
                Home
              </Text>
            </Flex>
            {/* about */}
            <Flex direction={"column"} className="parentMenu">
              <Text
                fontSize={"sm"}
                onClick={() => {
                  navigateToPage("about");
                }}
              >
                About us
              </Text>
            </Flex>
            {/* services */}

            <Flex direction={"column"}>
              <Flex
                className="parentMenu"
                justifyContent={"center"}
                alignItems={"flex-start"}
              >
                {/* main menu */}
                <Flex alignItems={"center"} gap="2">
                  <Text p={".5rem"} fontSize={"sm"}>
                    Services
                  </Text>
                  <Text as={"span"} className="arrow">
                    <AiFillCaretUp />
                  </Text>
                </Flex>
                {/* submenu */}
                <Flex
                  flexWrap={"wrap"}
                  transition={".3s"}
                  className="childMenu"
                  display={"none"}
                  position={"absolute"}
                  top={0}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"#161a1d"}
                  zIndex={"999"}
                  p={"3rem 2rem"}
                  rounded={"md"}
                  textAlign={"center"}
                  gap={"1rem"}
                  color={"#fff"}
                  opacity={"0"}
                  maxW={"30rem"}
                >
                  <Text
                    color={"#161a1d"}
                    position={"absolute"}
                    top={"-5"}
                    left={"40%"}
                  >
                    <AiFillCaretUp size={"3rem"} />
                  </Text>
                  <Text
                    w={"11rem"}
                    _hover={{ transform: "scale(1.1)" }}
                    p={".5rem 1rem"}
                    rounded={"md"}
                    bg="#0e1012"
                    fontSize={"sm"}
                    fontWeight={"bold"}
                    onClick={() => {
                      navigateToPage("services/design-factory");
                    }}
                  >
                    Design Factory
                  </Text>

                  <Text
                    w={"11rem"}
                    _hover={{ transform: "scale(1.1)" }}
                    p={".5rem 1rem"}
                    rounded={"md"}
                    bg="#0e1012"
                    fontSize={"sm"}
                    fontWeight={"bold"}
                    onClick={() => {
                      navigateToPage("services/converter-factory");
                    }}
                  >
                    Converter Factory
                  </Text>

                  <Text
                    w={"11rem"}
                    _hover={{ transform: "scale(1.1)" }}
                    p={".5rem 1rem"}
                    rounded={"md"}
                    bg="#0e1012"
                    fontSize={"sm"}
                    fontWeight={"bold"}
                    onClick={() => {
                      navigateToPage("services/code-factory");
                    }}
                  >
                    Code Factory
                  </Text>

                  <Text
                    w={"11rem"}
                    _hover={{ transform: "scale(1.1)" }}
                    p={".5rem 1rem"}
                    rounded={"md"}
                    bg="#0e1012"
                    fontSize={"sm"}
                    fontWeight={"bold"}
                    onClick={() => {
                      navigateToPage("services/talent-factory");
                    }}
                  >
                    Tallent Factory
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            {/* solution */}
            <Flex direction={"column"}>
              <Flex
                className="parentMenu"
                justifyContent={"center"}
                alignItems={"flex-start"}
              >
                {/* main menu */}
                <Flex alignItems={"center"} gap="2">
                  <Text p={".5rem"} fontSize={"sm"}>
                    Solution
                  </Text>
                  <Text as={"span"} className="arrow">
                    <AiFillCaretUp />
                  </Text>
                </Flex>
                {/* submenu */}
                <Flex
                  flexWrap={"wrap"}
                  transition={".3s"}
                  className="childMenu"
                  display={"none"}
                  position={"absolute"}
                  top={0}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"#161a1d"}
                  zIndex={"999"}
                  p={"1rem"}
                  rounded={"md"}
                  textAlign={"center"}
                  gap={"1rem"}
                  color={"#fff"}
                  opacity={"0"}
                  maxW={"30rem"}
                >
                  <Text
                    color={"#161a1d"}
                    position={"absolute"}
                    top={"-5"}
                    left={"40%"}
                  >
                    <AiFillCaretUp size={"3rem"} />
                  </Text>
                  <Text
                    w={"11rem"}
                    _hover={{ transform: "scale(1.1)" }}
                    p={".5rem 1rem"}
                    rounded={"md"}
                    bg="#0e1012"
                    fontSize={"sm"}
                    fontWeight={"bold"}
                    onClick={() => {
                      navigateToPage("solutions/iot-solutions");
                    }}
                  >
                    IOT Solution
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex direction={"column"} className="parentMenu">
              <Text
                fontSize={"sm"}
                onClick={() => {
                  navigateToPage("technology");
                }}
              >
                Technology
              </Text>
            </Flex>

            <Flex direction={"column"} className="parentMenu">
              <Text
                fontSize={"sm"}
                onClick={() => {
                  navigateToPage("contact");
                }}
              >
                Contact Us
              </Text>
            </Flex>
          </Flex>

          {/* Mobile */}
          <Flex
            display={{ lg: "none", md: "flex", sm: "flex", xs: "flex" }}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"flex-end"}
          >
            <Text
              cursor={"pointer"}
              onClick={() => {
                setMenuToggle(!menuToggle);
              }}
            >
              <GiHamburgerMenu />
            </Text>
          </Flex>
        </Flex>

        <Flex
          display={{
            lg: "none",
            md: `${menuToggle ? "flex" : "none"}`,
            sm: `${menuToggle ? "flex" : "none"}`,
            xs: `${menuToggle ? "flex" : "none"}`,
          }}
          transform={menuToggle ? "translate(0,0%)" : "translate(0,-100%)"}
          transition={".4s"}
          gap={"2rem"}
          justifyContent={"center"}
          direction={"column"}
          alignItems={"center"}
        >
          <Flex direction={"column"} cursor={"pointer"}>
            <Text
              fontSize={"sm"}
              onClick={() => {
                navigateToPage("");
              }}
            >
              Home
            </Text>
          </Flex>
          {/* about */}
          <Flex direction={"column"} cursor={"pointer"}>
            <Text
              fontSize={"sm"}
              onClick={() => {
                navigateToPage("about");
              }}
            >
              About us
            </Text>
          </Flex>
          {/* services */}

          <Flex direction={"column"}>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              onClick={() => {
                setSubMenu(!subMenu);
              }}
            >
              {/* main menu */}
              <Flex alignItems={"center"} gap="2" cursor={"pointer"}>
                <Text p={".5rem"} fontSize={"sm"}>
                  Services
                </Text>
                <Text
                  as={"span"}
                  className="arrow"
                  transform={subMenu ? "rotate(180deg)" : ""}
                >
                  <AiFillCaretUp />
                </Text>
              </Flex>
              {/* submenu */}
              <Flex
                flexWrap={"wrap"}
                transition={".3s"}
                justifyContent={"center"}
                display={subMenu ? "flex" : "none"}
                alignItems={"center"}
                bg={"#161a1d"}
                zIndex={"9"}
                p={"3rem 2rem"}
                rounded={"md"}
                textAlign={"center"}
                gap={"1rem"}
                color={"#fff"}
              >
                <Text
                  w={"11rem"}
                  _hover={{ transform: "scale(1.1)" }}
                  p={".5rem 1rem"}
                  rounded={"md"}
                  cursor={"pointer"}
                  bg="#0e1012"
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  onClick={() => {
                    navigateToPage("services/design-factory");
                  }}
                >
                  Design Factory
                </Text>

                <Text
                  w={"11rem"}
                  _hover={{ transform: "scale(1.1)" }}
                  p={".5rem 1rem"}
                  rounded={"md"}
                  cursor={"pointer"}
                  bg="#0e1012"
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  onClick={() => {
                    navigateToPage("services/converter-factory");
                  }}
                >
                  Converter Factory
                </Text>

                <Text
                  w={"11rem"}
                  _hover={{ transform: "scale(1.1)" }}
                  p={".5rem 1rem"}
                  rounded={"md"}
                  cursor={"pointer"}
                  bg="#0e1012"
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  onClick={() => {
                    navigateToPage("services/code-factory");
                  }}
                >
                  Code Factory
                </Text>

                <Text
                  w={"11rem"}
                  _hover={{ transform: "scale(1.1)" }}
                  p={".5rem 1rem"}
                  rounded={"md"}
                  bg="#0e1012"
                  fontSize={"sm"}
                  cursor={"pointer"}
                  fontWeight={"bold"}
                  onClick={() => {
                    navigateToPage("services/talent-factory");
                  }}
                >
                  Tallent Factory
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* solution */}
          <Flex direction={"column"}>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              onClick={() => {
                setSubMenu2(!subMenu2);
              }}
            >
              {/* main menu */}
              <Flex alignItems={"center"} gap="2" cursor={"pointer"}>
                <Text p={".5rem"} fontSize={"sm"}>
                  Solution
                </Text>
                <Text
                  as={"span"}
                  className="arrow"
                  transform={subMenu2 ? "rotate(180deg)" : ""}
                >
                  <AiFillCaretUp />
                </Text>
              </Flex>
              {/* submenu */}
              <Flex
                flexWrap={"wrap"}
                transition={".3s"}
                justifyContent={"center"}
                display={subMenu2 ? "flex" : "none"}
                alignItems={"center"}
                bg={"#161a1d"}
                zIndex={"9"}
                p={"3rem 2rem"}
                rounded={"md"}
                textAlign={"center"}
                gap={"1rem"}
                color={"#fff"}
              >
                <Text
                  w={"11rem"}
                  _hover={{ transform: "scale(1.1)" }}
                  p={".5rem 1rem"}
                  rounded={"md"}
                  bg="#0e1012"
                  fontSize={"sm"}
                  cursor={"pointer"}
                  fontWeight={"bold"}
                  onClick={() => {
                    navigateToPage("solutions/iot-solutions");
                  }}
                >
                  IOT Solution
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex direction={"column"} className="parentMenu">
            <Text
              fontSize={"sm"}
              onClick={() => {
                navigateToPage("technology");
              }}
            >
              Technology
            </Text>
          </Flex>

          <Flex direction={"column"} className="parentMenu">
            <Text
              fontSize={"sm"}
              onClick={() => {
                navigateToPage("contact");
              }}
            >
              Contact Us
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Box w={"100%"} h={"8rem"}></Box>
    </>
  );
};

export default Header;
