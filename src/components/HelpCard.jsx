import { Box, Flex, Text } from "@chakra-ui/react";

const Info_helps = (props) => {
  return (
    <>
      <Flex
        className="info_help"
        _hover={{ transform: "scale(1.2)",cursor:'pointer' }}
        transition={".4s"}
        cursor={"pointer"}
        bg={"dark.blue"}
        w={"300px"}
        m={"2rem"}
        rounded={"md"}
        p={"1rem"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          w={"100%"}
          height={"9rem"}
          bgImage={require("../Assets/" + props.names + ".png")}
          backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"center"}
        />

        <Text fontSize={"sm"} my={"1rem"} textAlign={"center"} color={"#fff"}>
          {props.title}
        </Text>
      </Flex>
    </>
  );
};

export default Info_helps;
