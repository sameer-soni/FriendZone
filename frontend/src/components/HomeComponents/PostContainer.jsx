// Import required dependencies and components
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/MyContext";
import { AiOutlineSend } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { BiImageAdd } from "react-icons/bi";
import { Button, InputFile } from "../index";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import Chatbot from "../../../../chatbot/chatbot";
import { Link } from "react-router-dom";



const PostContainer = () => {
  // Access the loggedUser from the context using useContext hook
  const { loggedUser, fetchPostAgain, setFetchPostAgain } =
    useContext(MyContext);
    
    const [sentimentResult, setSentimentResult] = useState(null);
  const [caption, setCaption] = useState("");
  const [img, setImg] = useState("");

  const [loading, setLoading] = useState(false);
  const toast = useToast();

  //function to upload img for post
  const imgUpload = (pic) => {
    setLoading(true);

    toast({
      title: "pic uploading....",
      // status: "success",
      duration: 2500,
      position: "top",
      isClosable: true,
    });

    if (pic === undefined) {
      alert("pic is undefined!");
      retrun;
    }

    if (
      pic.type === "image/png" ||
      pic.type === "image/jpeg" ||
      pic.type === "image/jpeg"
    ) {
      const data = new FormData();

      data.append("file", pic);
      data.append("upload_preset", "socialMeidaProject");
      data.append("cloud_name", "dvjzuiyp1");

      fetch("https://api.cloudinary.com/v1_1/dvjzuiyp1/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImg(data.url.toString());
          setLoading(false);
          // console.log("this is url-> ", data.url.toString());
        });
    }
  };

  //function to create post
  const createPost = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/post/create-post",
        {
          caption,
          img,
        },
        { withCredentials: true }
      );
      console.log(response);
      setCaption("");
      toast({
        title: Posted,
        status: "success",
        duration: 1800,
        position: "top",
        isClosable: true,
      });
      setFetchPostAgain(!fetchPostAgain);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await fetch('http://localhost:5000/analyze_sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: caption }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      if (data.sentiment !== null) {
        setSentimentResult(data.sentiment.toString());
      } else {
        // Handle the case where data.sentiment is null (if needed)
        setSentimentResult("Sentiment data is null");
      }
      
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

useEffect(() => {
    console.log(sentimentResult);
  }, [sentimentResult]);

  return (
    // Post Container - a flexbox container with a background color, padding, and rounded corners
    <div className="bg-main-shade py-4 w-full my-5 rounded-md flex flex-col divide-y divide-white space-y-5 drop-shadow-lg">
      {/* User information section */}
      <div className="flex flex-row items-center px-2">
        {/* User Profile Picture */}
        <img
          className="inline-block w-9 rounded-full object-cover h-9"
          src={loggedUser?.pic} // Display the user's profile picture if available
          alt=""
        />
        {/* User Input Section */}
        <div className="flex flex-1 items-center justify-center px-2 w-full">
          <div className="w-full">
            {/* Label for the input field, hidden from view */}
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            {/* Input field for posting messages */}
            <div className="relative">
              {/* Icon representing the input field */}
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <GiWorld className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              {/* Actual input field */}
              <input
                id="search"
                name="search"
                className="block w-full rounded-md font-bold border border-transparent bg-seconday-shade text-text-color py-2 pl-10 pr-3 text-sm sm:text-sm"
                placeholder={"What's on your mind ?"} // Placeholder text with the user's username (if available)
                type="search"
                autoComplete="off"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
              {/* Post Message Button */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {loading ? (
                  ""
                ) : (
                  <Button
                    type="button"
                    className="inline-flex items-center rounded-full border border-transparent bg-primary-shade text-white shadow-sm focus:outline-none focus:ring-2 border-white p-1"
                    clickHandler={createPost}
                
                  >
                    <AiOutlineSend className="h-4 w-4" aria-hidden="true" />
                  </Button>
                )}
              </div>
              {/* Post Image Button */}
              <div className="absolute inset-y-0 right-6 flex items-center mr-6 ">
                <Button
                  type="button"
                  className="inline-flex items-center rounded-full border border-transparent bg-primary-shade text-white shadow-sm focus:outline-none focus:ring-2 border-white p-1"
                >
                  <BiImageAdd className="h-4 w-4" aria-hidden="true" />
                </Button>
                {/* Input field for uploading an image */}
                <InputFile
                  id="userPhoto"
                  name="userPhoto"
                  onChange={(e) => imgUpload(e.target.files[0])} // Log a message when an image is uploaded (you may implement image upload logic here)
                />
              </div>
              {/* Post Image Button */}
              <div className="absolute inset-y-0 right-6 flex items-center pr-6">
                <Button
                  type="button"
                  className="inline-flex items-center rounded-full border border-transparent bg-primary-shade text-white shadow-sm focus:outline-none focus:ring-2 border-white p-1"
                >
                  <BiImageAdd className="h-4 w-4" aria-hidden="true" />
                </Button>
                {/* Input field for uploading an image */}
                <InputFile
                  id="userPhoto"
                  name="userPhoto"
                  onChange={(e) => console.log("image uploaded")} // Log a message when an image is uploaded (you may implement image upload logic here)
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Conditional rendering for displaying anti-depression message */}
      {sentimentResult === "0" && (
        <div className="bg-gray-200 text-center p-4 rounded-md">
          <p className="text-lg text-gray-800">
           Don't be depressed. If you need help, feel free to talk to our assistant.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              You can start a conversation with our assistant 
              <Link to="/chatbot" className="ml-1 underline">
              here
            </Link>.
               
            </p>

          <p className="text-sm text-gray-600 mt-2">
            Here are some resources:
            <a href="https://example.com" className="ml-1 underline">
              Example Anti-Depression Center
            </a>
          </p>
        </div>
      )}
    </div>

  );
};

export default PostContainer;