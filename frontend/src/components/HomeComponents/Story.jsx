import PropTypes from "prop-types";
import { Button } from "../index";

const Story = ({ story }) => {
  return (
    <li key={story.source} className="relative">
      <div className=" relative group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-md ">
        <img
          src={story.source}
          alt=""
          className="pointer-events-none object-cover group-hover:blur-sm duration-500"
        />
        <Button
          type="button"
          className="inline-flex items-center rounded-full shadow-sm absolute top-2 left-2 border-2 border-white group-hover:top-1/2  group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 duration-300 group-hover:scale-150"
        >
          <div
            className=" border-white rounded-full "
            onClick={() => console.log("added")}
          >
            <img
              className="inline-block h-9 w-9 rounded-full object-cover"
              src={story.user.pic}
              alt=""
            />
          </div>
        </Button>
        <div className="text-white hidden md:inline-block font-bold absolute opacity-0 left-1/2 -translate-x-1/2 bottom-1/3 -translate-y-1/3   group-hover:opacity-100 duration-500  ">
          {story.user.username}
        </div>
      </div>
    </li>
  );
};

Story.propTypes = {
  story: PropTypes.object.isRequired,
};

export default Story;
