import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import pink from "../../1403.jpg";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  EmailIcon,
  InfoIcon,
  InfoOutlineIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [mobileView] = useMediaQuery("(max-width: 670px)");

  // const submit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:8000/auth/login",
  //       {
  //         email,
  //         password,
  //       },
  //       { withCredentials: true }
  //     );
  //     console.log(data);
  //     localStorage.setItem("userInfo", JSON.stringify(data.user));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {/* MainContainer */}
      <Flex
        h={"100vh"}
        direction={"column"}
        justify={"center"}
        backgroundColor={"#fff4ff"}
      >
        {!mobileView ? (
          <Flex
            position={"absolute"}
            height={"100%"}
            width={"52.5%"}
            backgroundColor={"#bf8bcb"}
          ></Flex>
        ) : null}

        {/* Right-Container */}
        <Flex
          h={!mobileView ? "80vh" : "100vh"}
          justify={"center"}
          direction={mobileView ? "column" : "row"}
          p={mobileView ? "0px 30px" : ""}
        >
          {/*  */}
          <Flex
            flex={"0.45"}
            pos={"relative"}
            boxShadow={!mobileView ? "-16px 0px 38px 1px #310149b0" : null}
            backgroundColor={"white"}
            mt={mobileView ? 3 : null}
          >
            <img src={pink} alt="" style={{ transform: "rotate(0deg)" }} />
          </Flex>
          {/* input form */} {/* Left-Container */}
          <Flex
            flex={!mobileView ? "0.4" : "0.6"}
            backgroundColor={"white"}
            mb={mobileView ? 3 : null}
          >
            <Flex
              boxShadow={"0px 0px 38px 1px #510275c2"}
              w={"100%"}
              direction={"column"}
              align={"center"}
              justify={"center"}
            >
              <Text
                fontSize={!mobileView ? "5xl" : "4xl"}
                fontFamily={"'Kanit', sans-serif"}
                color={"#440044"}
              >
                Create Account
              </Text>
              <Text mt={8}>Use Email for Resgistration</Text>

              {/* Input */}
              <FormControl w={"60%"} mb={!mobileView ? "14" : "9"}>
                <FormLabel mt={4} fontSize={"11px"}>
                  <InfoIcon fontSize={"14px"} mr={1} />
                  NAME
                </FormLabel>
                <Input type="name" placeholder="Type your Name here.." mb={2} />
                <FormLabel mt={4} fontSize={"11px"}>
                  <EmailIcon fontSize={"14px"} mr={1} />
                  E-mail
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Type your Email here.."
                  mb={2}
                />
                <FormLabel mt={4} fontSize={"11px"}>
                  <LockIcon fontSize={"14px"} mr={1} />
                  PASSWORD
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={showPassword ? "text" : "password"}
                    placeholder="*******"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      backgroundColor={showPassword ? "#aabfd5" : ""}
                      _hover={showPassword ? "" : null}
                    >
                      {/* <ViewIcon /> */}
                      {!showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={"0px"}
                color={"white"}
                background={
                  "linear-gradient(90deg, rgba(162,0,255,1) 0%, rgba(98,0,255,1) 100%)"
                }
                mb={3}
                _hover={{
                  background:
                    "linear-gradient(90deg, #ff5cfc 0%, #b624ff 100%)",
                }}
              >
                Sign up
              </Button>
              <span style={{ marginBottom: "10px" }}>
                Already Signed?
                <span
                  style={{
                    color: "purple",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Login
                </span>
              </span>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
