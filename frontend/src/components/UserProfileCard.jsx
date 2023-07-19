import { Link } from "react-router-dom";

const UserProfileCard = () => {
  return (
    <div className="flex flex-shrink-0 bg-gray-200 rounded-none md:rounded-md p-4 hover:bg-primary-shade group transition duration-500 ease-in-out">
      <Link to="#" className=" block w-full flex-shrink-0">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-white">
              Whitney Francis
            </p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-white">
              View profile
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserProfileCard;
