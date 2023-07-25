import PropTypes from "prop-types";
import { ActivityIcon } from "../index";
import { BsThreeDots } from "react-icons/bs";
const Feed = ({ feed, contentImg }) => {
  console.log(feed.time);
  return (
    <div className="bg-main-shade w-full h-auto rounded-md flex flex-col   text-text-color pt-5 my-2 border border-cyan-400  ">
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
          className="w-full object-cover md:mb-5 rounded-br-md rounded-bl-md"
          src={feed.img}
        />
        <div className="w-full px-4 mb-2">
          {/*text content*/}
          {feed.content}
        </div>
      </div>
    </div>
  );
};

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
};

export default Feed;
