import { Story } from "../index";

import { stories } from "../../constants/Constants";

const Stories = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {stories.map((story) => (
        <Story key={story.source} story={story} />
      ))}
    </ul>
  );
};

export default Stories;
