import { Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import MobileProfileModal from "../HomeComponents/MobileProfileModal";
import { useContext, useState } from "react";
import { MyContext } from "../../context/MyContext";

import Button from "../ReUseableComponents/Button";

const ProfileDropDown = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { loggedUser } = useContext(MyContext);

  const toast = useToast();

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/logout",
        null,
        {
          withCredentials: true,
        }
      );

      localStorage.removeItem("userInfo");

      toast({
        title: `${data.message}`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });

      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <Menu as="div" className=" md:hidden relative ml-4 flex-shrink-0">
      <div>
        <div
          className=" cursor-pointer sm:mr-5 flex rounded-full bg-indigo-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
          onClick={handleOpen}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            // src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
            src={loggedUser?.pic}
            alt=""
          />
        </div>
      </div>
      <MobileProfileModal
        open={open}
        setOpen={setOpen}
        handleLogout={handleLogout}
        user={loggedUser}
      >
        <Button
          clickHandler={handleLogout}
          className="bg-primary-shade hover:bg-primary-shade-v2 text-white focus:outline-none"
        >
          Log Out
        </Button>
      </MobileProfileModal>
    </Menu>
  );
};

export default ProfileDropDown;
