import PropTypes from "prop-types";
import { useState } from "react";
import { ActivityIcon, Button, RemoveUserModal } from "../index";
import { UserIcon, InboxIcon } from "@heroicons/react/24/outline";
import { getRandomStatus } from "../../constants/Constants";
import { BsFillPersonXFill } from "react-icons/bs";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const FriendCard = ({ person, user, setIsOpen, open, setSelectedUser }) => {
  const status = getRandomStatus();
  const [removeFriendOpen, setRemoveFriendOpen] = useState(false);
  // Handler for clicking the user profile button
  const handleUserClick = () => {
    setIsOpen(!open);
    setSelectedUser(user);
  };

  const toast = useToast();

  // Handler fot removing user form friends
  const handleRemoveFriend = async () => {
    console.log(person.name, " is remove");
    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/friend/removeFriend`,
        {
          friend_id: person.user, //id of the user
        },
        { withCredentials: true }
      );

      toast({
        title: `${person.name} is successfully removed from your friend list.`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative flex items-center justify-between space-x-3 rounded-lg text-text-color border border-white px-6 py-5 shadow-sm hover:bg-seconday-shade duration-500 ">
      <div className="flex flex-row">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={person.pic}
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1 ml-2">
          <p className="text-sm font-bold">{person.name}</p>
          <span className="flex flex-row items-center justify-start space-x-1">
            {/* Activity icon based on user status */}
            <ActivityIcon status={status} />
            <p className="text-xs font-medium text-white">{status}</p>
          </span>
        </div>
      </div>
      <div className="space-x-2">
        {/* Button to view user profile */}
        <Button
          type="button"
          className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-1"
        >
          <div onClick={handleUserClick}>
            <UserIcon className="h-4 w-4" aria-hidden="true" />
          </div>
        </Button>
        {/* Button to send a message */}
        <Button
          type="button"
          className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-primary-shade focus:outline-none focus:ring-2 border-white p-1"
        >
          <InboxIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
        {/* Button to remove friend */}
        <Button
          type="button"
          className="inline-flex items-center rounded-full border border-transparent bg-transparent text-text-color shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 border-white p-1"
        >
          <div onClick={() => setRemoveFriendOpen(!removeFriendOpen)}>
            <BsFillPersonXFill />
          </div>
        </Button>
      </div>
      {/* Modal to warn user before removing user */}
      <RemoveUserModal
        open={removeFriendOpen}
        setOpen={setRemoveFriendOpen}
        handleRemove={handleRemoveFriend}
      />
    </div>
  );
};

FriendCard.propTypes = {
  person: PropTypes.object.isRequired, // Friend object
  user: PropTypes.object.isRequired, // User object
  setIsOpen: PropTypes.func.isRequired, // Function to manage profile card
  open: PropTypes.bool.isRequired, // State to manage profile card
  setSelectedUser: PropTypes.func, // Function to set the selected user
};

export default FriendCard;
