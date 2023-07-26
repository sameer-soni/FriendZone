// Importing required modules and components
import PropTypes from "prop-types";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { ActivityIcon } from "../index";
import { BsThreeDots, BsShare } from "react-icons/bs";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
  AiOutlineSend,
} from "react-icons/ai";
import { Button } from "../index";
import { generateRandomFeedComments } from "../../constants/Constants";

// Component definition for Feed
const Feed = ({ feed, contentImg }) => {
  // Using the useContext hook to get data from MyContext
  const { loggedUser } = useContext(MyContext);

  // Generating random feed comments using a utility function
  const randomFeedComments = generateRandomFeedComments();

  // Rendering the Feed component
  return (
    <div className="bg-main-shade w-full h-auto rounded-md flex flex-col text-text-color py-5 my-2 border border-cyan-400">
      <div>
        <div className="flex items-center justify-between px-2 mb-4 duration-500">
          <div className="flex flex-row">
            <div>
              {/* User profile picture */}
              <img
                className="inline-block h-9 w-9 rounded-full object-cover"
                src={feed.user.pic}
                alt=""
              />
            </div>
            <div className="ml-3">
              {/* User display name */}
              <div className="flex flex-row justify-between w-full">
                <p className="text-sm font-bold uppercase">
                  {feed.user.username}
                </p>
              </div>
              {/* User status */}
              <span className="flex flex-row items-center justify-start space-x-1">
                {/* Activity icon based on user status */}
                <ActivityIcon status={feed.user.status} />
                <p className="text-xs font-medium text-white">
                  {feed.user.status}
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-col font-bold items-end">
            <BsThreeDots />
          </div>
        </div>
        <img
          className="w-full object-cover rounded-br-md rounded-bl-md"
          src={feed.img}
        />
        <div className="w-full px-4">
          {/* Text content */}
          {feed.content}
        </div>
        <div className="flex flex-row w-full items-center justify-between px-2 pt-4">
          {/* Like button */}
          <span
            onClick={() => console.log("image liked")}
            className="flex flex-row items-center justify-center"
          >
            <AiOutlineLike className="w-7 h-7" />
            <p className="font-bold ml-1">Like</p>
          </span>
          {/* Dislike button */}
          <span
            onClick={() => console.log("image disliked")}
            className="flex flex-row items-center justify-center"
          >
            <AiOutlineDislike className="w-7 h-7" />
            <p className="font-bold ml-1">Dislike</p>
          </span>
          {/* Share button */}
          <span
            onClick={() => console.log("image share")}
            className="flex flex-row items-center justify-center"
          >
            <BsShare className="w-5 h-5" />
            <p className="font-bold ml-1">Share</p>
          </span>
        </div>
        <div className="w-full">
          <div className="flex flex-row items-center px-2 w-full pt-5">
            <img
              className="inline-block w-9 rounded-full object-cover h-9"
              src={loggedUser?.pic}
              alt=""
            />
            <div className="flex flex-1 items-center justify-center px-2 w-full">
              <div className="w-full">
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <AiOutlineComment
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Comment input */}
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-md font-bold border border-transparent bg-seconday-shade text-text-color py-2 pl-10 pr-3 text-sm sm:text-sm"
                    placeholder={`Comment...`}
                    type="search"
                    autoComplete="off"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {/* Send button */}
                    <Button
                      type="button"
                      className="inline-flex items-center rounded-full border border-transparent bg-primary-shade text-white shadow-sm focus:outline-none focus:ring-2 border-white p-1"
                    >
                      <AiOutlineSend className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-2 my-5">
            {/* Rendering random feed comments */}
            {randomFeedComments.map((comment) => (
              <div key={comment.user.id} className="my-5">
                <div className="flex flex-row items-center justify-start my-2 ">
                  <img
                    className="inline-block w-9 rounded-full object-cover h-9"
                    src={comment.user.pic}
                  />
                  <div className="flex flex-col items-start justify-start ml-1">
                    <div className="font-bold text-sm">
                      {comment.user.username}
                    </div>
                    <div className="flex flex-col">
                      <span className="flex flex-row items-center justify-start space-x-1">
                        {/* Activity icon based on user status */}
                        <ActivityIcon status={comment.user.status} />
                        <p className="text-xs font-medium text-white">
                          {comment.user.status}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  {/* Text content of the comment */}
                  {comment.comment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes to define the expected prop types for the Feed component
Feed.propTypes = {
  feed: PropTypes.object.isRequired,
};

export default Feed;
