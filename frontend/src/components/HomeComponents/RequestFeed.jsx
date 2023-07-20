import PropTypes from "prop-types";
import { Button } from "../index";

const RequestFeed = ({ activity }) => {
  return (
    <div>
      <div key={activity.id} className="py-4">
        <div className="flex space-x-3 items-center">
          <img
            className="h-12 w-12 rounded-md"
            src={activity.person.imageUrl}
            alt=""
          />
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">{activity.person.name}</h3>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
            <p className="text-sm text-gray-500">
              Wants to add into your friends list
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 mt-5">
          <Button className="bg-primary-shade text-white flex-1 hover:bg-primary-shade-v2">
            Decline
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
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    person: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default RequestFeed;
