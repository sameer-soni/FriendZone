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
    <div>
      <div className="border border-b-gray-300 px-3 py-4">
        <div className="flex flex-row items-center justify-between text-tertiary-shade uppercase ">
          <p>Recent</p>
          <NotificationInNumber total={friendReq?.length} />
        </div>

        {/* rendering friend request portion */}
        {friendReq?.map((user) => (
          <RequestFeed key={user.id} user={user} />
        ))}
      </div>
      <div className="px-3 py-4">
        <div className="flex flex-row items-center justify-between text-tertiary-shade uppercase">
          <p>CONTACTS</p>
          <NotificationInNumber total={randomNamesWithPictures.length} />
        </div>
        {randomNamesWithPictures.map((item) => (
          <ContactCard key={item.id} name={item.name} picture={item.picture} />
        ))}
      </div>
    </div>
  );
};

export default DesktopSecondaryColumn;
