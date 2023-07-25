import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { AiOutlineSend } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { Button } from "../index";

const PostContainer = () => {
  const { loggedUser } = useContext(MyContext);

  return (
    <div className=" bg-main-shade   py-4 w-full my-5  rounded-md flex flex-col divide-y divide-white space-y-5 drop-shadow-lg">
      <div className="flex flex-row items-center px-2">
        <img
          className="inline-block w-9  rounded-full object-cover h-9"
          src={loggedUser?.pic}
          alt=""
        />
        <div className="flex flex-1 items-center justify-center px-2 w-full">
          <div className="w-full ">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <GiWorld className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-md font-bold border border-transparent bg-seconday-shade text-text-color py-2 pl-10 pr-3 text-sm sm:text-sm"
                placeholder={`What's on your mind ${loggedUser?.username.toUpperCase()}?`}
                type="search"
                autoComplete="off"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                {/* Back Button */}
                <Button
                  type="button"
                  className="inline-flex items-center rounded-full border border-transparent bg-primary-shade text-white shadow-sm   focus:outline-none focus:ring-2 border-white p-1"
                >
                  <AiOutlineSend className=" h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
