// Import necessary dependencies and components
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

// Define the Signup component
const Signup = () => {
  // State variables for form input values, profile picture, and loading status
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // Access the Chakra UI toast utility for displaying messages
  const toast = useToast();

  // React Router's navigate function for programmatic navigation
  const navigate = useNavigate();

  // Function to reset the form input fields
  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  // Function for profile picture (image) upload to Cloudinary
  const pfpUpload = async (pic) => {
    setLoading(true);

    console.log("pic uploading...");
    if (pic === undefined) {
      alert("pic is undefined");
      return;
    }

    // Check if the selected file is an image (png, jpeg, jpg)
    if (
      pic.type === "image/png" ||
      pic.type === "image/jpeg" ||
      pic.type === "image/jpeg"
    ) {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "socialMeidaProject");
      data.append("cloud_name", "dvjzuiyp1");

      // Send a POST request to Cloudinary API to upload the image
      fetch("https://api.cloudinary.com/v1_1/dvjzuiyp1/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // Update the profile picture URL in the state
          setImage(data.url.toString());
          setLoading(false);
        });
    }
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation for password and confirm password matching
    if (password !== confirmPassword) {
      toast({
        title: `password and confirm password don't match`,
        status: "error",
        duration: 1800,
        position: "top",
        isClosable: true,
      });
      return;
    }

    try {
      // Send a POST request to the backend API to create a new account
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/signup`,
        {
          username,
          email,
          password,
          pic: image,
        },
        { withCredentials: true }
      );

      console.log(data);

      // Show a success message using Chakra UI toast
      toast({
        title: `${data.message}. Now, login`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });

      // Navigate to the signin page after successful signup
      navigate("/signin");
    } catch (error) {
      console.log(error);

      // Show an error message using Chakra UI toast for failed signup
      toast({
        title: `${error.response.data.error}`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }

    // Reset the form input fields after form submission
    resetForm();
  };

  // Render the Signup component
  return (
    <div className="h-screen w-screen bg-auth-bg-image bg-cover bg-top flex flex-col items-center justify-center">
      <AuthContainer>
        {/* Render the Logo component */}
        <Logo />

        {/* Render the FormHeader component */}
        <FormHeader
          headline="Create a new account"
          text="Log into your account"
          isUnderlined={true}
          to="/signin"
        />

        {/* Container for the signup form */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Form submitHandler={(event) => handleSubmit(event)}>
            {/* FormInput components for username, email, password, and confirm password */}
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

            {/* Container for profile picture upload */}
            <div className="sm:col-span-6 mt-5">
              <div className="mt-1 flex items-center">
                {/* PlaceholderUserImage displays the current profile picture */}
                <PlaceholderUserImage img={image ? image : ""} />
                <ImageSelector>
                  {/* Label to trigger file input for profile picture selection */}
                  <Label text="Change" />
                  {/* InputFile for profile picture selection */}
                  <InputFile
                    id="userPhoto"
                    name="userPhoto"
                    onChange={(e) => pfpUpload(e.target.files[0])}
                  />
                </ImageSelector>
              </div>
            </div>

            {/* PrimaryButton for submitting the signup form */}
            {loading === true ? null : (
              <PrimaryButton type="submit">Sign Up</PrimaryButton>
            )}
          </Form>
        </div>
      </AuthContainer>
    </div>
  );
};

// Export the Signup component as the default export
export default Signup;
