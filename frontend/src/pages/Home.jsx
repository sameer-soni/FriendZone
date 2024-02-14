import axios from "axios";
import { Feed, PostContainer, Stories } from "../components";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";

// Define the Home component using a functional component
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { fetchPostAgain } = useContext(MyContext);

  // Function to fetch posts from the server
  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/post/fetch-post`,
        { withCredentials: true }
      );
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch posts on initial mount and whenever fetchPostAgain changes
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
          {/* Stories */}
          <Stories />

          {/* Main content area */}
          <div className="flex flex-col items-center justify-start h-full rounded-lg md:px-5 py-5">
            {/* PostContainer */}
            <PostContainer />

            {/* Render Feed for each post */}
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
