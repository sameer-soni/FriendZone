import PropTypes from "prop-types";
import { ActivityIcon } from "../index";
import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { MdCircleNotifications } from "react-icons/md";

const Notification = ({ notification }) => {
  return (
    <li key={notification.sender.email}>
      {/* Link to the notification href */}
      <a
        href={notification.href}
        className="block hover:bg-seconday-shade duration-500"
      >
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center">
            {/* User avatar */}
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={notification.sender.pic}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4 ">
              <div className=" flex items-center ">
                {/* User name */}
                <p className="truncate text-lg font-medium text-primary-shade   ">
                  {notification.sender.username}
                </p>
              </div>
              <div className="">
                <div>
                  {/* Notification date */}
                  <p className="text-sm text-text-color">
                    {/* Sent On:{" "} */}
                    <time dateTime={notification.createdAt}>
                      {/* {notification.createdAt} */}
                      {new Date(notification.createdAt).toLocaleString()}
                    </time>
                  </p>
                  {/* Notification message */}
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    {/* Check circle icon */}
                    {/* <CheckCircleIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                      aria-hidden="true"
                    /> */}
                    <MdCircleNotifications
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                      aria-hidden="true"
                    />

                    {notification.notification}
                  </p>

                  {/* in phone devices */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

// Prop types for Notification component
Notification.propTypes = {
  // Shape of the notification prop
  notification: PropTypes.shape({
    user: PropTypes.shape({
      // User name (required)
      name: PropTypes.string,
      // User email (required)
      email: PropTypes.string,
      // User avatar image URL (required)
      imageUrl: PropTypes.string,
    }),
    // Date in YYYY-MM-DD format (required)
    date: PropTypes.string,
    // Full date description (e.g., January 7, 2020) (required)
    dateFull: PropTypes.string,
    // Notification message (required)
    message: PropTypes.string,
    // Link to the notification destination (required)
    href: PropTypes.string,
    // Status of the user (online or offline) (required)
    status: PropTypes.oneOf(["online", "offline"]),
  }),
};

export default Notification;
