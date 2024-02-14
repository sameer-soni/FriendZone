import { Fragment, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  FaceFrownIcon,
  GlobeAmericasIcon,
  InformationCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { classNames } from "../../utils/Helpers";
import PropTypes from "prop-types";
import { MobileProfileModal, Button } from "../index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { InboxIcon } from "@heroicons/react/24/outline";
import { ActivityIcon } from "../index";

const SearchModal = ({ open, setOpen }) => {
  const [query, setQuery] = useState("");
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  // Function to toggle profile modal
  const handleProfileModal = () => {
    setProfileModalOpen((modal) => !modal);
  };

  // React Router's navigation function
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const toast = useToast();

  // Function to handle search and fetch users
  const handleSearch = async (e) => {
    setQuery(e.target.value);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/user/searchUser?searchInput=${e.target.value}`,
        { withCredentials: true }
      );

      setUsers(data.users);
    } catch (error) {
      if (error.response.data.error === "no token") {
        // Redirect to sign-in page if token is missing
        alert("please login again");
        localStorage.removeItem("userInfo");
        navigate("/signin");
      }
    }
  };

  useEffect(() => {
    if (query === "") {
      setUsers([]);
    }
  }, [query]);

  // Function to add friend
  const addFriend = async (u) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/friend/sendFriendRequest`,
        {
          recieverId: u._id,
        },
        { withCredentials: true }
      );

      toast({
        title: `${response.data.message}`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `${error.response.data.error}`,
        status: "warning",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm bg-opacity-25 transition-opacity" />
        </Transition.Child>

        {/* Search modal content */}
        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-main-shade text-text-color shadow-2xl ring-1 ring-primary-shade ring-opacity-5 transition-all">
              <Combobox>
                <div className="relative">
                  {/* Magnifying glass icon */}
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 "
                    aria-hidden="true"
                  />
                  {/* Search input */}
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-400 placeholder-gray-400 focus:ring-0 sm:text-sm outline-double"
                    placeholder="Search..."
                    onChange={handleSearch}
                  />
                </div>

                {query === "" && (
                  <div className="text-text-color border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                    <GlobeAmericasIcon
                      className="mx-auto h-6 w-6 "
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold ">
                      Search for users and projects
                    </p>
                    <p className="mt-2 text-gray-500">
                      Quickly access users and groups by running a global
                      search.
                    </p>
                  </div>
                )}

                {users.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2"
                  >
                    {users.map((user) => (
                      <li key={user._id}>
                        <ul className="mt-2 text-sm text-gray-800">
                          <Combobox.Option
                            key={user._id}
                            className={({ active }) =>
                              classNames(
                                "cursor-default select-none px-4 py-2",
                                active && "shade text-white"
                              )
                            }
                          >
                            <div className="flex flex-row items-center justify-between font-bold text-text-color">
                              <div className="flex flex-row items-center gap-x-2">
                                {/* User profile picture */}
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={user.pic}
                                  alt="Contact's Profile"
                                />
                                <div className="ml-3">
                                  {/* User display name */}
                                  <div className="flex flex-row justify-between w-full">
                                    <p className="text-sm font-bold uppercase">
                                      {user.username}
                                    </p>
                                  </div>
                                  {/* User status */}
                                  <span className="flex flex-row items-center justify-start space-x-1">
                                    {/* Activity icon based on user status */}
                                    <ActivityIcon status="online" />
                                    <p className="text-xs font-medium text-white">
                                      online
                                    </p>
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-center">
                                {/* Information icon */}
                                <div
                                  className="cursor-pointer"
                                  onClick={() => handleProfileModal()}
                                  onMouseEnter={() => setSelectedUser(user)}
                                >
                                  <InformationCircleIcon
                                    color="#fff"
                                    width="20px"
                                  />
                                </div>
                              </div>
                            </div>
                          </Combobox.Option>
                        </ul>
                        {/* Mobile profile modal */}
                        <MobileProfileModal
                          open={profileModalOpen}
                          setOpen={setProfileModalOpen}
                          user={selectedUser}
                        >
                          {/* Buttons inside mobile profile modal */}
                          <Button
                            type="button"
                            className="inline-flex items-center rounded-full border border-transparent bg-primary-shade text-text-color shadow-sm focus:outline-none focus:ring-2 border-white p-2"
                          >
                            <InboxIcon className="h-6 w-6" aria-hidden="true" />
                          </Button>
                          <Button
                            className="inline-flex items-center rounded-full border border-transparent bg-primary-shade text-text-color shadow-sm focus:outline-none focus:ring-2 border-white p-2"
                            clickHandler={() => addFriend(user)}
                          >
                            <UserPlusIcon className="mx-auto h-6 w-6" />
                          </Button>
                        </MobileProfileModal>
                      </li>
                    ))}
                  </Combobox.Options>
                )}

                {query !== "" && users.length === 0 && (
                  <div className=" text-text-color border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                    <FaceFrownIcon
                      className="mx-auto h-6 w-6 "
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold ">No results found</p>
                    <p className="mt-2 text-gray-500">
                      We couldn’t find anything with that term. Please try
                      again.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

SearchModal.propTypes = {
  open: PropTypes.bool.isRequired, // Whether the modal is open or not
  setOpen: PropTypes.func.isRequired, // Function to set the open state of the modal
};

export default SearchModal;
