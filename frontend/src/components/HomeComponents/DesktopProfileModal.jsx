import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import Button from "../ReUseableComponents/Button";
import { MyContext } from "../../context/MyContext";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const DesktopProfileModal = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const toast = useToast();
  // Access the loggedUser from the context
  const { loggedUser } = useContext(MyContext);

  const handleLogout = async () => {
    console.log("in handle logout");
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/logout`, null, {
        withCredentials: true,
      });
      localStorage.removeItem("userInfo");
      toast({
        title: `Logout successfull`,
        // status: "success",
        duration: 1400,
        position: "top",
        isClosable: true,
      });
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        {/* Dark overlay */}
        <div className="fixed inset-0 " />

        {/* Profile Modal */}
        <div
          className={`fixed inset-0 overflow-hidden  bg-main-shade duration-200  bg-opacity-0 ${
            open ? "bg-opacity-50" : ""
          } duration-500`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              {/* Profile Panel */}
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-main-shade text-text-color shadow-xl overflow-y-hidden">
                    {/* Main Content */}
                    <div>
                      <div className="pb-1 sm:pb-6">
                        <div>
                          {/* User's Profile Image and Close Button */}
                          <div className="relative h-40 sm:h-56">
                            <img
                              src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                              className="grayscale"
                            />
                            <div className="flex h-7 items-center absolute right-5 top-2">
                              <button
                                type="button"
                                className="rounded-md bg-white text-primary-shade"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                          <div className="relative mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                            {/* User's Profile Picture */}
                            <div className="absolute w-44 h-44 border-8 border-white drop-shadow-2xl rounded-full overflow-hidden -top-1/4 -translate-y-1/4 left-1/2 -translate-x-1/2">
                              <img
                                src={loggedUser?.pic}
                                className="w-full h-full object-cover object-left"
                              />
                            </div>
                            <div className="sm:flex-1 mt-24">
                              <div>
                                {/* User's Name */}
                                <div className="flex items-center">
                                  <h3 className="text-xl font-bold capitalize sm:text-2xl">
                                    {loggedUser?.username}
                                  </h3>
                                  {/* Online Status Indicator */}
                                  <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                    <span className="sr-only">Online</span>
                                  </span>
                                </div>
                                {/* User's Username */}
                                <p className="text-sm">
                                  @{loggedUser?.username}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* User's Details */}
                      <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                          <div>
                            <dt className="text-sm font-medium sm:w-40 sm:flex-shrink-0">
                              Bio
                            </dt>
                            <dd className="mt-1 text-sm sm:col-span-2">
                              <p>
                                Hi, I'm Whitney Francis and I'm a programmer. I
                                specialize in developing mobile applications and
                                web development. I have an eye for detail and
                                I'm passionate about creating beautiful,
                                well-crafted software products.
                              </p>
                            </dd>
                          </div>
                          {/* Add more user details here */}
                          {/* ... */}
                          <div className="mt-5 flex">
                            {/* Logout Button */}
                            <Button
                              type="button"
                              className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-2"
                              clickHandler={handleLogout}
                            >
                              <BiLogOut
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </Button>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

DesktopProfileModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default DesktopProfileModal;
