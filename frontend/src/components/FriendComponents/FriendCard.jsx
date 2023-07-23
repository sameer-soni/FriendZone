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
              <ActivityIcon status="online" />
              <p className="text-xs font-medium text-white">Online</p>
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
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
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
