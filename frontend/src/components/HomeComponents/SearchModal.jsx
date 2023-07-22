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
import { randomNamesWithPictures } from "../../constants/Constants";
import { MobileProfileModal, Button } from "../index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const SearchModal = ({ open, setOpen }) => {
  const [query, setQuery] = useState("");
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const handleProfileModal = () => {
    setProfileModalOpen((modal) => !modal);
  };

  //my code starts from here:
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const toast = useToast();

  const handleSearch = async (e) => {
    // console.log(e.target.value);
    setQuery(e.target.value);
    try {
      const { data } = await axios.get(
        `http://localhost:8000/user/searchUser?searchInput=${e.target.value}`,
        { withCredentials: true }
      );

      console.log(data);
      setUsers(data.users);
    } catch (error) {
      // console.log(error);

      if (error.response.data.error === "no token") {
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

  // ADD friend-----------------------------------------------------------
  const addFriend = async (u) => {
    console.log("addfirendclicked", u);
    try {
      const response = await axios.post(
        "http://localhost:8000/friend/sendFriendRequest",
        {
          recieverId: u._id,
        },
        { withCredentials: true }
      );

      console.log(response);

      toast({
        title: `${response.data.message}`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.log(error);

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
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

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
            <Dialog.Panel className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-400 placeholder-gray-400 focus:ring-0 sm:text-sm outline-double"
                    placeholder="Search..."
                    // onChange={(event) => setQuery(event.target.value)}
                    onChange={handleSearch}
                  />
                </div>

                {query === "" && (
                  <div className="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                    <GlobeAmericasIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold text-gray-900">
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
                                active && "bg-primary-shade text-white"
                              )
                            }
                          >
                            <div className="flex flex-row items-center justify-between font-bold">
                              <div className="flex flex-row items-center gap-x-2">
                                <img
                                  className="h-10 w-10  rounded-md object-cover"
                                  src={user.pic}
                                  alt="Contact's Profile"
                                />
                                {user.username}
                              </div>
                              <div className="flex flex-row items-center justify-center">
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
                        <MobileProfileModal
                          open={profileModalOpen}
                          setOpen={setProfileModalOpen}
                          user={selectedUser}
                        >
                          <Button className="bg-orange-800 hover:bg-orange-950 text-white focus:outline-none">
                            Message
                          </Button>
                          <Button
                            className="bg-orange-800 hover:bg-orange-950 text-white focus:outline-none"
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
                  <div className="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                    <FaceFrownIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold text-gray-900">
                      No results found
                    </p>
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
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SearchModal;
