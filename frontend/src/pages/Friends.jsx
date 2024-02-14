import { useContext, useEffect, useRef, useState } from "react";
import { FriendCard, MobileProfileModal } from "../components";
import axios from "axios";
import { randomNamesWithPictures } from "../constants/Constants";
import { MyContext } from "../context/MyContext";
// const people = [
//   {
//     name: "Whitney Francis",
//     role: "Copywriter",
//     imageUrl:
//       "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//   },
//   {
//     name: "Whitney Francis",
//     role: "Copywriter",
//     imageUrl:
//       "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//   },
//   {
//     name: "Whitney Francis",
//     role: "Copywriter",
//     imageUrl:
//       "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//   },
//   {
//     name: "Whitney Francis",
//     role: "Copywriter",
//     imageUrl:
//       "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//   },
//   {
//     name: "Whitney Francis",
//     role: "Copywriter",
//     imageUrl:
//       "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//   },
//   {
//     name: "Whitney Francis",
//     role: "Copywriter",
//     imageUrl:
//       "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//   },
// ];

const Friends = () => {
  const [friends, setFriends] = useState([]);

  // State to manage the mobile profile modal
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  const { socket } = useContext(MyContext);

  const fetchFriends = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/friend/fetchFriends`,
        { withCredentials: true }
      );
      console.log(data);
      setFriends(data.friends);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  useEffect(() => {
    socket.on("friend list updated", () => {
      fetchFriends();
    });
  }, [socket]);

  return (
    <main className="relative z-0 flex-1 overflow-y-auto  focus:outline-none   custom-scrollbar ">
      {/* Start main area */}
      <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 ">
        <div className="h-full rounded-lg bg-main-shade">
          <div>
            <div className="text-center my-4">
              <div>
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-5 px-5"
                >
                  {friends?.map((person) => (
                    <FriendCard
                      key={person.name}
                      person={person}
                      user={person}
                      open={isOpen}
                      setIsOpen={setIsOpen}
                      setSelectedUser={setSelectedUser}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Render the MobileProfileModal with the selected user */}
      <MobileProfileModal
        open={isOpen}
        setOpen={setIsOpen}
        user={selectedUser}
      />
      {/* End main area */}
    </main>
  );
};

export default Friends;
