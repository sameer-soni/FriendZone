// Import PropTypes for prop type validation
import PropTypes from "prop-types";
// Import the Link component from "react-router-dom"
import { Link } from "react-router-dom";

// Define the ButtonLink component
const ButtonLink = ({ text, Icon, to }) => {
  return (
    // Link component for navigation
    <Link
      to={to}
      // Styling for the button link
      className="flex flex-row items-center justify-center gap-1 rounded-md px-3 py-2 text-sm font-medium bg-primary-shade text-white hover:text-white"
    >
      {/* Render the text of the button link */}
      {text}
      {/* Render the Icon (if provided) */}
      {Icon}
    </Link>
  );
};

// Define prop types for the ButtonLink component
ButtonLink.propTypes = {
  text: PropTypes.string.isRequired, // Expects a required string for the text of the button link
  Icon: PropTypes.any, // Accepts any type for the Icon (optional)
  to: PropTypes.string.isRequired, // Expects a required string for the destination of the link
};

// Export the ButtonLink component as the default export
export default ButtonLink;
