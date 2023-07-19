import { useState } from "react";
import {
  FormInput,
  PrimaryButton,
  Logo,
  Form,
  FormHeader,
  AuthContainer,
  PlaceholderUserImage,
  Label,
  ImageSelector,
  InputFile,
} from "../components";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  const toast = useToast();

  const navigate = useNavigate();

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: `password and confirm password doesn't match`,
        status: "error",
        duration: 1800,
        position: "top",
        isClosable: true,
      });
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/signup",
        {
          username,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(data);

      toast({
        title: `${data.message}. Now, login`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });

      navigate("/signin");
    } catch (error) {
      console.log(error);

      toast({
        title: `${error.response.data.error}`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }

    resetForm();
  };

  return (
    <div className="h-screen w-screen bg-my-image bg-cover bg-top flex flex-col items-center justify-center">
      <AuthContainer>
        <Logo />
        <FormHeader
          headline="Create a new account"
          text="Log into your account"
          isUnderlined={true}
          to="/signin"
        />
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Form submitHandler={(event) => handleSubmit(event)}>
            <FormInput
              labelName="Username"
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <FormInput
              labelName="Confirm Password"
              id="ConfirmPassword"
              name="ConfirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="sm:col-span-6 mt-5">
              <div className="mt-1 flex items-center">
                <PlaceholderUserImage />
                <ImageSelector>
                  <Label text="Change" />
                  <InputFile
                    id="userPhoto"
                    name="userPhoto"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </ImageSelector>
              </div>
            </div>
            <PrimaryButton type="submit">Sign Up</PrimaryButton>
          </Form>
        </div>
      </AuthContainer>
    </div>
  );
};

export default Signup;
