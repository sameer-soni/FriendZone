import { useContext, useState } from "react";
import { Story, Button, AddStoryModal } from "../index";
import { stories } from "../../constants/Constants";
import { MyContext } from "../../context/MyContext";
import { IoMdAdd } from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";

const Stories = () => {
  // Embla Carousel hook to enable carousel functionality
  const [emblaRef] = useEmblaCarousel();

  // Access the loggedUser from the context using useContext hook
  const { loggedUser } = useContext(MyContext);

  // State to control the visibility of the AddStoryModal
  const [openStoryModal, setOpenStoryModal] = useState(false);

  // Function to handle when a story is added (currently logs a message)
  const handleOnStoryAdd = () => {
    console.log("Story added");
  };

  // Prepare a loggedUserStory object with user and source information
  const loggedUserStory = {
    user: loggedUser,
    source:
      "https://i.pinimg.com/564x/a1/a0/f3/a1a0f34b1277b21b128fe14537ead7b5.jpg",
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        {/* AddStoryModal Component */}
        <AddStoryModal
          open={openStoryModal}
          setOpen={setOpenStoryModal}
          handleOnStoryAdd={handleOnStoryAdd}
        />
        <div className="embla__container">
          {/* Logged User Story */}
          <div className="relative embla__slide flex-shrink-0 w-full md:w-1/3">
            <div className="relative group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-md">
              {/* Display loggedUserStory's image */}
              <img className="blur-sm" src={loggedUserStory?.source} />
              <div onClick={() => setOpenStoryModal(!openStoryModal)}>
                {/* Add Story Button */}
                <Button
                  type="button"
                  className="inline-flex text-white items-center rounded-full shadow-sm absolute border-2 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 scale-150"
                >
                  {/* Add Story Icon */}
                  <div
                    className="border-white rounded-full relative"
                    onClick={() => console.log("added")}
                  >
                    <img
                      className="inline-block h-9 w-9 rounded-full object-cover"
                      src={loggedUserStory?.user?.pic}
                      alt=""
                    />
                    <IoMdAdd
                      className="w-full h-full p-1 rounded-full bg-primary-shade absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-500"
                      aria-hidden="true"
                    />
                  </div>
                </Button>
              </div>
              {/* Text indicating "Add Your Story" */}
              <div className="text-white hidden md:inline-block font-bold absolute left-1/2 -translate-x-1/2 bottom-1/3 -translate-y-1/3">
                Add Your Story
              </div>
            </div>
          </div>

          {/* Loop through and render all stories */}
          {stories.map((story) => (
            <div
              className="embla__slide flex-shrink-0 w-full md:w-1/3"
              key={story.source}
            >
              <Story story={story} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
