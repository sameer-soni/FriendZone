import PropTypes from "prop-types";
import { ActivityIcon } from "../index";
import { UserIcon, InboxIcon } from "@heroicons/react/24/outline";
import { Button } from "../index";

const ContactCard = ({ picture, name, status }) => {
  return (
    <div className="flex flex-col w-full flex-shrink-0 py-4 px-1 cursor-pointer text-text-color">
      <div className="relative group">
        {/* User profile picture and display name */}
        <div className="flex items-center group-hover:translate-x-20 group-hover:blur-sm duration-200">
          <div>
            {/* User profile picture */}
            <img
              className="inline-block h-9 w-9 rounded-full object-cover"
              src={picture}
              alt=""
            />
          </div>
          <div className="ml-3">
            {/* User display name */}
            <div className="flex flex-row justify-between w-full">
              <p className="text-sm font-bold uppercase">{name}</p>
            </div>
            {/* User status */}
            <span className="flex flex-row items-center justify-start space-x-1">
              {/* Activity icon based on user status */}
              <ActivityIcon status={status} />
              <p className="text-xs font-medium text-white">{status}</p>
            </span>
          </div>
        </div>

        {/* Accept and reject buttons */}
        <div className="absolute -left-48 top-1/2 -translate-y-1/2 group-hover:-left-0 duration-200 flex flex-row items-center justify-center gap-2">
          {/* Button to view user profile */}
          <Button
            type="button"
            className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-1"
          >
            <UserIcon className="h-4 w-4" aria-hidden="true" />
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
  picture: PropTypes.string.isRequired, // User profile picture URL
  name: PropTypes.string.isRequired, // User display name
  status: PropTypes.bool.isRequired, // User status (true or false)
};

export default ContactCard;
