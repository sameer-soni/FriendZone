import { useContext, useState } from "react";
import DesktopProfileModal from "../HomeComponents/DesktopProfileModal";
import { MyContext } from "../../context/MyContext";

const UserProfileCard = () => {
  // State to manage the modal visibility
  const [modal, setModal] = useState(false);

  // Accessing logged-in user data from the context
  const { loggedUser } = useContext(MyContext);

  // Function to toggle the modal visibility
  const HandleModalOpen = () => {
    setModal((modal) => !modal);
  };

  return (
    // User profile card container with click event to open the modal
    <div
      className="cursor-pointer flex flex-shrink-0 bg-primary-shade group transition duration-500 ease-in-out"
      onClick={HandleModalOpen}
    >
      <div className="block w-full flex-shrink-0 py-4 px-5">
        <div className="flex items-center">
          <div className="border-2 border-white rounded-full">
            {/* User profile picture */}
            <img
              className="inline-block h-9 w-9 rounded-full object-cover"
              src={loggedUser?.pic}
              alt=""
            />
          </div>
          <div className="ml-3">
            {/* User display name */}
            <p className="text-sm font-bold text-white uppercase">
              {loggedUser?.username}
            </p>
            {/* Link to view user profile */}
            <p className="text-xs font-medium text-white">View profile</p>
          </div>
        </div>
      </div>
      {/* Desktop version of the user profile modal */}
      <DesktopProfileModal open={modal} setOpen={setModal} />
    </div>
  );
};

export default UserProfileCard;
