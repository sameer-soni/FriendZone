import PropTypes from "prop-types";
import { Button } from "../index";

const RequestFeed = ({ key, user }) => {
  return (
    <div>
      <div key={key} className="py-4">
        <div className="flex space-x-3 items-center">
          <img className="h-12 w-12 rounded-md" src={user.pic} alt="" />
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.time}</p>
            </div>
            <p className="text-sm text-gray-500">
              Wants to add into your friends list
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 mt-5">
          <Button className="bg-primary-shade text-white flex-1 hover:bg-primary-shade-v2">
            Accept
          </Button>
          <Button className="bg-gray-200 text-secondary-shade flex-1 hover:bg-gray-300">
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};

RequestFeed.propTypes = {
  key: PropTypes.string.isRequired,
  user: PropTypes.shape({
    pic: PropTypes.string.isRequired,
    name: PropTypes.string,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default RequestFeed;
