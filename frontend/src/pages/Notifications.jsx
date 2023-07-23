// Import necessary dependencies and components
import { notifications } from "../constants/Constants";
import { Notification } from "../components/index";

// Notifications component displays a list of notifications
const Notifications = () => {
  return (
    <>
      {/* Main content area */}
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
        {/* Absolute positioning for padding on the sides */}
        <div className="absolute inset-0 md:py-5 px-1 sm:px-6 lg:px-8">
          {/* Container with rounded corners */}
          <div className="h-full rounded-lg">
            {/* Overflow and background styling */}
            <div className="overflow-hidden bg-main-shade shadow sm:rounded-md">
              {/* Unordered list to display notifications */}
              <ul role="list" className="divide-y divide-gray-200">
                {/* Map through the notifications and render Notification component for each */}
                {notifications.map((notification) => (
                  <Notification
                    key={notification.message} // Unique key for React rendering
                    notification={notification} // Pass the notification object to Notification component
                  />
                ))}
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
