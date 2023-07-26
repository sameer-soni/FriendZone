import PropTypes from "prop-types";
import { ActivityIcon } from "../index";
import { UserIcon, InboxIcon } from "@heroicons/react/24/outline";
import { Button } from "../index";

const ContactCard = ({ user, setIsOpen, open, setSelectedUser }) => {
  const handlerUserClick = () => {
    setIsOpen(!open);
    setSelectedUser(user);
  };
  return (
    <div className="  flex flex-col w-full flex-shrink-0 py-4 px-1 cursor-pointer text-text-color  rounded-md">
      <div className="relative group">
        {/* User profile picture and display name */}
        <div className="flex items-center group-hover:translate-x-20 group-hover:blur-sm duration-500">
          <div>
            {/* User profile picture */}
            <img
              className="inline-block h-9 w-9 rounded-full object-cover"
              src={user.pic}
              alt=""
            />
          </div>
          <div className="ml-3">
            {/* User display name */}
            <div className="flex flex-row justify-between w-full">
              <p className="text-sm font-bold uppercase">{user.username}</p>
            </div>
            {/* User status */}
            <span className="flex flex-row items-center justify-start space-x-1">
              {/* Activity icon based on user status */}
              {/* <ActivityIcon status={user.status} /> */}
              <p className="text-xs font-medium text-white">{user.status}</p>
            </span>
          </div>
        </div>

        {/* Accept and reject buttons */}
        <div className="absolute -left-48 top-1/2 -translate-y-1/2 group-hover:left-3 duration-500 flex flex-row items-center justify-center gap-2">
          {/* Button to view user profile */}
          <Button
            type="button"
            className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-1"
          >
            <div onClick={handlerUserClick}>
              <UserIcon className="h-4 w-4" aria-hidden="true" />
            </div>
          </Button>
          {/* Button to send a message */}
          <Button
            type="button"
            className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-1"
          >
            <InboxIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  user: PropTypes.object.isRequired, // User object
  setIsOpen: PropTypes.func.isRequired, // Function to manage profile card
  open: PropTypes.bool.isRequired, // State to manage profile card
  setSelectedUser: PropTypes.func, // Fuction to set selection user
};

export default ContactCard;
