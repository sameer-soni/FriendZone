// Import necessary dependencies and components
import { useContext, useState } from "react";
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
import { MyContext } from "../context/MyContext";

// Define the SignIn component
const SignIn = () => {
  // State variables to hold the email and password entered by the user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Access the user context to check if the user is logged in and update the user's status
  const { loggedUser, setLoggedUser } = useContext(MyContext);

  // Use the useToast hook from Chakra UI to display toast messages
  const toast = useToast();

  // Use the useNavigate hook from react-router-dom to handle navigation
  const navigate = useNavigate();

  // Function to handle form submission when the user clicks the "Sign In" button
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the server to log in the user
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true } // Include credentials to send cookies
      );

      // Log the response data from the server
      console.log(data);

      // Store the user information in local storage
      localStorage.setItem("userInfo", JSON.stringify(data.user));

      // Update the loggedUser state with the user information from local storage
      setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));

      // Display a success toast message
      toast({
        title: `${data.message}`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });

      // Navigate to the home page after a short delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch ({ response }) {
      // If there is an error response from the server, log the error and display an error toast message
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

  // Render the SignIn component
  return (
    <div className="h-screen w-screen bg-auth-bg-image  bg-cover bg-top group flex flex-col items-center justify-center">
      {/* Use the AuthContainer component to create a centered container */}
      <AuthContainer>
        {/* Display the Logo component */}
        <Logo />

        {/* Display the FormHeader component with appropriate props */}
        <FormHeader
          headline="Log in to your account"
          text="create a brand new account today"
          isUnderlined={true}
          to="/signup"
        />

        {/* Render the form with input fields and a submit button */}
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

        {/* Display the DeveloperSlogan component */}
        <DeveloperSlogan />
      </AuthContainer>
    </div>
  );
};

// Export the SignIn component as the default export
export default SignIn;
