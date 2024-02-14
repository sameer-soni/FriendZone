// Import necessary components and modules
import { Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import MobileProfileModal from "../HomeComponents/MobileProfileModal";
import { useContext, useState } from "react";
import { MyContext } from "../../context/MyContext";
import Button from "../ReUseableComponents/Button";
import { BiLogOut } from "react-icons/bi";

// Define the ProfileDropDown component
const ProfileDropDown = () => {
  // State to control the visibility of the mobile profile modal
  const [open, setOpen] = useState(false);

  // React Router's useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Access the logged-in user's data from the MyContext context
  const { loggedUser } = useContext(MyContext);

  // Chakra UI's useToast hook for displaying toast notifications
  const toast = useToast();

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      // Send a POST request to the logout endpoint to clear the session
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/logout`,
        null,
        {
          withCredentials: true,
        }
      );

      // Remove user data from local storage
      localStorage.removeItem("userInfo");

      // Show a success toast message to the user
      toast({
        title: `${data.message}`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });

      // Navigate the user to the signin page after successful logout
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  // Function to toggle the visibility of the mobile profile modal
  const handleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    // Menu component for the profile dropdown (visible only on small screens)
    <Menu as="div" className="md:hidden relative ml-4 flex-shrink-0">
      <div>
        {/* Profile picture (clickable to open the profile modal) */}
        <div
          className="cursor-pointer sm:mr-5 flex rounded-full bg-indigo-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
          onClick={handleOpen}
        >
          <span className="sr-only">Open user menu</span>
          {/* Render the profile picture of the logged-in user */}
          <img
            className="h-8 w-8 rounded-full"
            src={loggedUser?.pic} // Use the user's profile picture if available
            alt=""
          />
        </div>
      </div>
      {/* Render the MobileProfileModal component (profile dropdown content) */}
      <MobileProfileModal
        open={open}
        setOpen={setOpen}
        handleLogout={handleLogout}
        user={loggedUser} // Pass the user's data to the profile modal
      >
        <div className="mt-5 flex">
          {/* Back Button for logout */}
          <Button
            type="button"
            // Styling for the logout button
            className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-2"
          >
            {/* Render the logout icon */}
            <BiLogOut className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </MobileProfileModal>
    </Menu>
  );
};

// Export the ProfileDropDown component as the default export
export default ProfileDropDown;
