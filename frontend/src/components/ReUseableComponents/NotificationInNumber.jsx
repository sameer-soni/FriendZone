// Import PropTypes for prop type validation
import PropTypes from "prop-types";

// Define the NotificationInNumber component
const NotificationInNumber = ({ total }) => {
  return (
    // Span element for displaying the notification count in a rounded circle
    <span className="bg-primary-shade rounded-full w-6 h-6 flex flex-row items-center justify-center p-2 text-text-color">
      {/* Render the 'total' prop (notification count) inside the circle */}
      {total}
    </span>
  );
};

// Define prop types for the NotificationInNumber component
NotificationInNumber.propTypes = {
  total: PropTypes.number, // Expects a number for the 'total' prop (notification count)
};

// Export the NotificationInNumber component as the default export
export default NotificationInNumber;
