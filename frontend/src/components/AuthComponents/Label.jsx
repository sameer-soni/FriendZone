// Import PropTypes for prop type validation
import PropTypes from "prop-types";

// Define the Label component
const Label = ({ text }) => {
  return (
    // Render a label element with appropriate styling and text
    <label htmlFor="remember-me" className="block text-sm text-white">
      {/* Render the label text */}
      {text}
    </label>
  );
};

// Define prop types for the Label component
Label.propTypes = {
  text: PropTypes.string.isRequired, // Expects a required string for the label text
};

// Export the Label component as the default export
export default Label;
