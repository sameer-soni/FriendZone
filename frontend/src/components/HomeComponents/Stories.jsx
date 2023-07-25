import { useContext, useState } from "react";
import { Story, Button, AddStoryModal } from "../index";
import { stories } from "../../constants/Constants";
import { MyContext } from "../../context/MyContext";
import { IoMdAdd } from "react-icons/io";

const Stories = () => {
  const { loggedUser } = useContext(MyContext);
  const [openStoryModal, setOpenStoryModal] = useState(false);

  const handleOnStoryAdd = () => {
    console.log("story added");
  };

  const loggedUserStory = {
    user: loggedUser,
    source:
      "https://i.pinimg.com/564x/a1/a0/f3/a1a0f34b1277b21b128fe14537ead7b5.jpg",
  };
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4  sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 "
    >
      <AddStoryModal
        open={openStoryModal}
        setOpen={setOpenStoryModal}
        handleOnStoryAdd={handleOnStoryAdd}
      />
      <li className="relative">
        <div className=" relative group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-md  ">
          <img className="blur-sm " src={loggedUserStory.source} />
          <div onClick={() => setOpenStoryModal(!openStoryModal)}>
            <Button
              type="button"
              className="inline-flex text-white items-center rounded-full shadow-sm absolute  border-2 border-white top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 scale-150"
            >
              <div
                className=" border-white rounded-full relative "
                onClick={() => console.log("added")}
              >
                <img
                  className="inline-block h-9 w-9 rounded-full object-cover "
                  src={loggedUserStory.user.pic}
                  alt=""
                />
                <IoMdAdd
                  className="w-full h-full p-1 rounded-full bg-primary-shade absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-500 "
                  aria-hidden="true"
                />
              </div>
            </Button>
          </div>
          <div className="text-white hidden md:inline-block font-bold absolute  left-1/2 -translate-x-1/2 bottom-1/3 -translate-y-1/3   ">
            Add Your Story
          </div>
        </div>
      </li>
      {stories.map((story) => (
        <Story key={story.source} story={story} />
      ))}
    </ul>
  );
};

export default Stories;
