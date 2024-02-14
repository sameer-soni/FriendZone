// Import necessary dependencies and components
import { notifications } from "../constants/Constants";
import { Notification } from "../components/index";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";

// Notifications component displays a list of notifications
const Notifications = () => {
  const { noti, setNoti, socket } = useContext(MyContext);

  const fetchNotification = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/notification`, {
        withCredentials: true,
      });
      console.log("notification--> ", data.noti);
      setNoti(data.noti);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  useEffect(() => {
    socket.on("new friend request", () => {
      fetchNotification();
    });
  }, [socket]);

  return (
    <>
      {/* Main content area */}
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none custom-scrollbar">
        {/* Absolute positioning for padding on the sides */}
        <div className="absolute inset-0 md:py-5 px-1 sm:px-6 lg:px-8 ">
          {/* Container with rounded corners */}
          <div className="h-full rounded-lg sm:mt-0 mt-4">
            {/* Overflow and background styling */}
            <div className="overflow-hidden bg-main-shade shadow sm:rounded-md">
              {/* Unordered list to display notifications */}
              <ul role="list" className="divide-y divide-gray-200 ">
                {/* Map through the notifications and render Notification component for each */}
                {noti.length > 0 ? (
                  noti.map((notification) => (
                    <Notification
                      key={notification._id} // Unique key for React rendering
                      notification={notification} // Pass the notification object to Notification component
                    />
                  ))
                ) : (
                  <div className="text-white text-center">
                    No new Notification
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
        {/* End main area */}
      </main>
    </>
  );
};

export default Notifications;
