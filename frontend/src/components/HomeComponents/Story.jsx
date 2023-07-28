import PropTypes from "prop-types";
import { Button } from "../index";

const Story = ({ story }) => {
  return (
    // Story item container
    <li key={story.source} className="relative pointer-events-none h-full">
      {/* Container for the story image */}
      <div className="relative group block w-full h-full overflow-hidden rounded-md">
        {/* Display the story image */}
        <img
          src={story.source}
          alt=""
          className="pointer-events-none h-full object-cover group-hover:blur-sm duration-500"
        />

        {/* Button with user's profile picture */}
        <Button
          type="button"
          className="inline-flex items-center rounded-full shadow-sm absolute top-2 left-2 border-2 border-white group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 duration-300 group-hover:scale-150"
        >
          {/* Clickable area for adding story (currently logs a message) */}
          <div
            className="border-white rounded-full"
            onClick={() => console.log("added")}
          >
            <img
              className="inline-block h-9 w-9 rounded-full object-cover"
              src={story.user.pic}
              alt=""
            />
          </div>
        </Button>

        {/* Text showing the username (hidden by default, appears on hover) */}
        <div className="text-white hidden md:inline-block font-bold absolute opacity-0 left-1/2 -translate-x-1/2 bottom-1/3 -translate-y-1/3 group-hover:opacity-100 duration-500 pointer-events-none">
          {story.user.username}
        </div>
      </div>
    </li>
  );
};

// Prop types for the Story component
Story.propTypes = {
  story: PropTypes.object.isRequired, // Object representing the story data
};

export default Story;
