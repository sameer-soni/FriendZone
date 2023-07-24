import PropTypes from "prop-types";
import { ActivityIcon } from "../index";
import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Notification = ({ notification }) => {
  return (
    <li key={notification.user.email}>
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
                src={notification.user.imageUrl}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                {/* User name */}
                <p className="truncate text-sm font-medium text-primary-shade">
                  {notification.user.name}
                </p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <div className="flex flex-row items-center justify-start space-x-1">
                    {/* Activity icon based on user status */}
                    <ActivityIcon status={notification.status} />
                    {/* User status */}
                    <div className="text-xs font-medium text-white">
                      {notification.status}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div>
                  {/* Notification date */}
                  <p className="text-sm text-text-color">
                    Sent On{" "}
                    <time dateTime={notification.date}>
                      {notification.dateFull}
                    </time>
                  </p>
                  {/* Notification message */}
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    {/* Check circle icon */}
                    <CheckCircleIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                      aria-hidden="true"
                    />
                    {notification.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right chevron icon */}
          <div>
            <ChevronRightIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
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
      name: PropTypes.string.isRequired,
      // User email (required)
      email: PropTypes.string.isRequired,
      // User avatar image URL (required)
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
    // Date in YYYY-MM-DD format (required)
    date: PropTypes.string.isRequired,
    // Full date description (e.g., January 7, 2020) (required)
    dateFull: PropTypes.string.isRequired,
    // Notification message (required)
    message: PropTypes.string.isRequired,
    // Link to the notification destination (required)
    href: PropTypes.string.isRequired,
    // Status of the user (online or offline) (required)
    status: PropTypes.oneOf(["online", "offline"]).isRequired,
  }).isRequired,
};

export default Notification;
