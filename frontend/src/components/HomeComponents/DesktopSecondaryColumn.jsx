import { RequestFeed, NotificationInNumber, ContactCard } from "../index";
import { randomNamesWithPictures } from "../../constants/Constants";
import axios from "axios";
import { useEffect, useState } from "react";

const DesktopSecondaryColumn = () => {
  const [friendReq, setFriendReq] = useState([]);

  // Function to fetch friend requests from the server
  const fetchFriendRequest = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/friend/fetchFriendRequest",
        { withCredentials: true }
      );

      setFriendReq(data.friendRequests);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch friend requests when the component mounts
  useEffect(() => {
    fetchFriendRequest();
  }, []);

  return (
    <aside className="bg-main-shade text-text-color relative hidden w-72 flex-shrink-0 overflow-y-auto  xl:flex xl:flex-col overflow-x-hidden">
      <div className="absolute inset-0">
        <div className="h-full px-5">
          <div>
            {/* Friend Requests */}
            <div className="py-8">
              <div className="flex flex-row items-center justify-between uppercase">
                <p className="font-semibold">Recent</p>
                {/* Show the number of friend requests in a notification */}
                <NotificationInNumber
                  total={friendReq ? friendReq.length : "0"}
                />
              </div>
              {/* Render friend requests or "No Friend Request" if none */}
              {!friendReq
                ? "No Friend Request"
                : friendReq?.map((user) => (
                    <RequestFeed key={user.id} user={user} />
                  ))}
            </div>
            {/* Contacts */}
            <div className="py-8">
              <div className="flex flex-row items-center justify-between uppercase">
                <p className="font-semibold">CONTACTS</p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {/* Render contact cards with name, picture, and status */}
                {randomNamesWithPictures.map((item) => (
                  <ContactCard
                    key={item.id}
                    name={item.username}
                    picture={item.pic}
                    status={item.status}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DesktopSecondaryColumn;
