import PropTypes from "prop-types";
import { Button } from "../index";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const RequestFeed = ({ user }) => {
  const toast = useToast();
  const { friendReq_response, setFriendReq_response } = useContext(MyContext);

  // Function to accept a friend request
  const acceptRequest = async (u) => {
    console.log(u);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/friend/respond_FriendRequest`,
        {
          status: "accept",
          requested_user_Id: u.user, // .user => is this user's id
        },
        { withCredentials: true }
      );

      setFriendReq_response(!friendReq_response);
      // Show success toast when request is accepted
      toast({
        title: `Friend Request accepted`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Function to reject a friend request
  const rejectRequest = async (u) => {
    console.log(u);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/friend/respond_FriendRequest`,
        {
          status: "decline",
          requested_user_Id: u.user, // .user => is this user's id
        },
        { withCredentials: true }
      );

      setFriendReq_response(!friendReq_response);
      // Show error toast when request is rejected
      toast({
        title: `Friend Request rejected`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full flex-shrink-0 py-4 px-1 cursor-pointer text-text-color">
      <div className="relative group">
        {/* User profile picture and display name */}
        <div className="flex items-center group-hover:translate-x-20 group-hover:blur-sm duration-500">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full object-cover"
              src={user.pic}
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="flex flex-row justify-between w-full">
              <p className="text-sm font-bold uppercase">{user.name}</p>
            </div>
            <span className="flex flex-row items-center justify-start space-x-1">
              <p className="text-sm">Sent a Friend Request</p>
            </span>
          </div>
        </div>

        {/* Accept and reject buttons */}
        <div className="absolute -left-48 top-1/2 -translate-y-1/2 group-hover:left-3 duration-500 flex flex-row items-center justify-center gap-2">
          <Button
            clickHandler={() => acceptRequest(user)}
            type="button"
            className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-1"
          >
            <CheckIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            clickHandler={() => rejectRequest(user)}
            type="button"
            className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-1"
          >
            <XMarkIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// PropTypes for RequestFeed component
RequestFeed.propTypes = {
  user: PropTypes.shape({
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string,
  }).isRequired,
};

export default RequestFeed;
