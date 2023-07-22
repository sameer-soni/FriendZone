import { RequestFeed, NotificationInNumber, ContactCard } from "../index";
import { randomNamesWithPictures } from "../../constants/Constants";
import axios from "axios";
import { useEffect, useState } from "react";

const DesktopSecondaryColumn = () => {
  const [friendReq, setFriendReq] = useState([]);

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

  useEffect(() => {
    fetchFriendRequest();
  }, []);

  return (
    <aside className="relative hidden w-80 flex-shrink-0 overflow-y-auto border-l border-gray-300 xl:flex xl:flex-col ">
      <div className="absolute inset-0 ">
        <div className="h-full px-1">
          <div>
            <div className="border-b border-borders-color py-8">
              <div className="flex flex-row items-center justify-between text-tertiary-shade uppercase  ">
                <p>Recent</p>
                <NotificationInNumber
                  total={friendReq ? friendReq.length : "0"}
                />
              </div>
              {/* rendering friend request portion */}
              {!friendReq
                ? "No Friend Request"
                : friendReq?.map((user) => (
                    <RequestFeed key={user.id} user={user} />
                  ))}
            </div>
            <div className="py-8">
              <div className="flex flex-row items-center justify-between text-dark-shade uppercase ">
                <p>CONTACTS</p>
                <NotificationInNumber total={randomNamesWithPictures.length} />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {randomNamesWithPictures.map((item) => (
                  <ContactCard
                    key={item.id}
                    name={item.username}
                    picture={item.pic}
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
