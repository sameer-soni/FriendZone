import PropTypes from "prop-types";
import { ActivityIcon, Button } from "../index";
import { UserIcon, InboxIcon } from "@heroicons/react/24/outline";

const FriendCard = ({ person }) => {
  return (
    <li key={person.name}>
      <div className="bg-main-shade rounded-md py-5 text-text-color group">
        <div className="relative overflow-hidden rounded-full">
          {/* User profile picture */}
          <img
            className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 object-cover group-hover:blur-sm duration-200"
            src={person.imageUrl}
            alt=""
          />
          <div className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-200 flex flex-row items-center justify-center gap-2">
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

        <div className="space-y-2">
          <div className="space-y-1 text-lg font-medium leading-6 text-center">
            <h3 className="font-bold mt-4">{person.name}</h3>
            <span className="flex flex-row items-center justify-center space-x-1">
              {/* Activity icon based on user status */}
              <ActivityIcon status={person.status} />
              <p className="text-xs font-medium text-white">{person.status}</p>
            </span>
          </div>
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
                  {/* Twitter icon SVG */}
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
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    twitterUrl: PropTypes.string.isRequired,
    linkedinUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default FriendCard;
