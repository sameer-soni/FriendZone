// Import PropTypes for prop type validation
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Define the TextLink component
const TextLink = ({ text, isUnderlined, to, children }) => {
  return (
    // Render a div element with appropriate styling for the text link
    <div className="text-sm">
      {/* Render a Link component with appropriate props */}
      <Link
        to={to}
        className={`flex flex-row justify-center items-center font-bold text-primary-shade ${
          isUnderlined ? "underline underline-offset-4" : ""
        }`}
      >
        {/* Render the text and any child elements inside the Link */}
        {text}
        {children}
      </Link>
    </div>
  );
};

// Define prop types for the TextLink component
TextLink.propTypes = {
  text: PropTypes.string.isRequired, // Expects a required string for the link text
  isUnderlined: PropTypes.bool, // Expects an optional boolean to control text underline
  to: PropTypes.string.isRequired, // Expects a required string for the link destination
  children: PropTypes.node, // Expects optional child elements as the children prop
};

// Export the TextLink component as the default export
export default TextLink;
