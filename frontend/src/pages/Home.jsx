import axios from "axios";
import { Feed, PostContainer, Stories } from "../components";
import { feeds } from "../constants/Constants";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";

// Define the Home component using a functional component
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { fetchPostAgain } = useContext(MyContext);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/post/fetch-post",
        { withCredentials: true }
      );
      // console.log(data.posts);
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    fetchPosts();
  }, [fetchPostAgain]);

  return (
    <>
      {/* Main content area */}
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none custom-scrollbar">
        {/* Start main area*/}
        {/* An absolute positioned div that takes up the entire space */}
        {/* It creates a placeholder for the main content */}
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          {/* A div with a dashed red border, creating a placeholder */}
          {/* This is useful for previewing the layout or as a placeholder for actual content */}
          <Stories />
          <div className="flex flex-col items-center justify-start h-full rounded-lg   md:px-5 py-5">
            <PostContainer />
            {posts.map((feed) => (
              <Feed key={feed._id} feed={feed} />
            ))}
          </div>
        </div>
        {/* End main area */}
      </main>
    </>
  );
}
