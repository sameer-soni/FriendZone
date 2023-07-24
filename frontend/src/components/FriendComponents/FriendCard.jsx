import PropTypes from "prop-types";
import { ActivityIcon, Button } from "../index";
import { UserIcon, InboxIcon } from "@heroicons/react/24/outline";

const FriendCard = ({ person, user, setIsOpen, open, setSelectedUser }) => {
  // Handler for clicking the user profile button
  const handleUserClick = () => {
    setIsOpen(!open);
    setSelectedUser(user);
  };

  return (
    <li key={person.user}>
      {/* Friend card container */}
      <div className="bg-main-shade rounded-md py-5 text-text-color group">
        <div className="relative overflow-hidden rounded-full">
          {/* User profile picture */}
          <img
            className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 object-cover group-hover:blur-sm duration-200"
            src={person.pic}
            alt=""
          />
          {/* Buttons for viewing user profile and sending a message */}
          <div className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-200 flex flex-row items-center justify-center gap-2">
            <Button
              type="button"
              className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-1"
            >
              <div onClick={handleUserClick}>
                <UserIcon className="h-4 w-4" aria-hidden="true" />
              </div>
            </Button>
            <Button
              type="button"
              className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-1"
            >
              <InboxIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          {/* User information */}
          <div className="space-y-1 text-lg font-medium leading-6 text-center">
            <h3 className="font-bold mt-4">{person.username}</h3>
            <span className="flex flex-row items-center justify-center space-x-1">
              {/* Activity icon based on user status */}
              <ActivityIcon status="online" />
              <p className="text-xs font-medium text-white">Online</p>
            </span>
          </div>
          {/* Links to social media profiles */}
          <ul role="list" className="flex justify-center space-x-5">
            <li>
              <a
                href={person.twitterUrl}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={person.linkedinUrl}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {/* LinkedIn icon SVG */}
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

FriendCard.propTypes = {
  person: PropTypes.object.isRequired, // Friend object
  user: PropTypes.object.isRequired, // User object
  setIsOpen: PropTypes.func.isRequired, // Function to manage profile card
  open: PropTypes.bool.isRequired, // State to manage profile card
  setSelectedUser: PropTypes.func, // Function to set the selected user
};

export default FriendCard;
