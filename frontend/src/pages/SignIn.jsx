import { useState } from "react";
import {
  FormInput,
  PrimaryButton,
  Logo,
  Form,
  FormHeader,
  AuthContainer,
  DeveloperSlogan,
} from "../components";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log(data);

      localStorage.setItem("userInfo", JSON.stringify(data.user));

      toast({
        title: `${data.message}`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch ({ response }) {
      console.log(response.data.error);

      toast({
        title: `${response.data.error}`,
        status: "error",
        duration: 1800,
        position: "top",
        isClosable: true,
      });
    }
  };
  return (
    <div className="h-screen w-screen bg-my-image bg-cover bg-top flex flex-col items-center justify-center">
      <AuthContainer>
        <Logo />
        <FormHeader
          headline="Log in to your account"
          text="create a brand new account today"
          isUnderlined={true}
          to="/signup"
        />
        <Form submitHandler={submitHandler}>
          <FormInput
            labelName="Email Address"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            labelName="Password"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PrimaryButton type="submit">Sign In</PrimaryButton>
        </Form>
        <DeveloperSlogan />
      </AuthContainer>
    </div>
  );
};

export default SignIn;
