import React from "react";
import img1 from "../Assets/contact.png";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Contact_Form = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    toast({
      title: "Successful",
      position: "bottom",
      status: "success",
      description: `Thanks  ${
        " " + data.FirstName + " " + data.LastName
      } for contacting us `,
    });
  };
  return (
    <>
      <Flex
        my={"5rem"}
        id="#contact"
        justifyContent={"center"}
        alignItems="flex-start"
        minH={"100vh"}
      >
        <Flex
          shadow={"xl"}
          flexWrap="wrap-reverse"
          my={"3rem"}
          minH={"70vh"}
          w={{
            lg: "calc(100% - 100px)",
            md: "calc(100% - 100px)",
            sm: "calc(100% - 70px)",
            xs: "calc(100% - 50px)",
          }}
          bg="#fff"
        >
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={{ lg: "300px", md: "300px", sm: "100%", xs: "100%" }}
            minH={"70vh"}
            bg="dark.bgcolorl"
            color={"#fff"}
          >
            <Text fontSize={"2xl"} fontWeight={"bold"} my={"2rem"}>
              Contact Info
            </Text>
            <Text fontSize={"sm"} textAlign={"center"} my={"1rem"}>
              XYZ bulinghum street, <br /> sahibabad, Ghaziabad, 201010
            </Text>
            <Text fontSize={"sm"} my={"1rem"}>
              {" "}
              Techicious.reachus@gmail.com
            </Text>
            <Text fontSize={"sm"} my={"1rem"}>
              +91-9999999999
            </Text>
            <img src={img1} alt="" />
          </Flex>
          <Flex
            direction={"column"}
            minH={"70vh"}
            width={{
              lg: "calc(100% - 300px)",
              md: "calc(100% - 300px)",
              sm: "100%",
              xs: "100%",
            }}
            p={{ lg: "3rem", md: "2rem", sm: "1rem", xs: "1rem" }}
          >
            <Text fontWeight={"bold"} fontSize="3xl" my={"1rem"}>
              Contct Form
            </Text>
            <Box justifyContent={"center"} alignItems="center" p={".3rem 2rem"}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup
                  my={"1rem"}
                  w="100%"
                  display={"grid"}
                  gap={9}
                  gridTemplateColumns={{
                    lg: "1fr 1fr",
                    md: "1fr",
                    sm: "1fr",
                    xs: "1fr",
                  }}
                >
                  <Flex direction={"column"} gap="2" w={"100%"}>
                    <Text fontWeight={"semi-bold"}> First Name </Text>
                    <Input
                      w={"100%"}
                      placeholder="Enter First Name ...."
                      {...register("FirstName", { required: true })}
                    />
                  </Flex>
                  <Flex direction={"column"} gap="2" w={"100%"}>
                    <Text fontWeight={"semi-bold"}> Last name </Text>
                    <Input
                      w={"100%"}
                      placeholder="Enter Last name ...."
                      {...register("LastName", { required: true })}
                    />
                  </Flex>
                </InputGroup>

                <InputGroup
                  my={"1rem"}
                  w="100%"
                  display={"grid"}
                  gap={9}
                  gridTemplateColumns={{
                    lg: "1fr 1fr",
                    md: "1fr",
                    sm: "1fr",
                    xs: "1fr",
                  }}
                >
                  <Flex direction={"column"} gap="2" w={"100%"}>
                    <Text fontWeight={"semi-bold"}> Mobile </Text>
                    <Input
                      w={"100%"}
                      placeholder="Enter Mobile ...."
                      {...register("Mobile", { required: true })}
                    />
                  </Flex>
                  <Flex direction={"column"} gap="2" w={"100%"}>
                    <Text fontWeight={"semi-bold"}> Email </Text>
                    <Input
                      w={"100%"}
                      placeholder="Enter Email ...."
                      {...register("Email", { required: true })}
                    />
                  </Flex>
                </InputGroup>

                <InputGroup
                  my={"1rem"}
                  w="100%"
                  display={"grid"}
                  gap={9}
                  gridTemplateColumns="1fr"
                >
                  <Flex direction={"column"} gap="2" w={"100%"}>
                    <Text fontWeight={"semi-bold"}> Message </Text>
                    <Textarea
                      resize={"none"}
                      w={"100%"}
                      placeholder="Enter Message ...."
                      {...register("Message", { required: true })}
                    />
                  </Flex>
                </InputGroup>
                <InputGroup
                  my={"2rem"}
                  w={"100%"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Input
                    cursor={"pointer"}
                    bg={"dark.blue"}
                    color="#fff"
                    w={"200px"}
                    type="submit"
                  />
                </InputGroup>
              </form>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Contact_Form;
