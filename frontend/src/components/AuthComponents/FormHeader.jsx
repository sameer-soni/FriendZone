// Import necessary dependencies and components
import PropTypes from "prop-types";
import { TextLink } from "../index";

// Define the FormHeader component
const FormHeader = ({ headline, text, isUnderlined, to }) => {
  return (
    <>
      {/* Display the headline with appropriate styling */}
      <div className="mt-2 text-3xl font-bold tracking-tight text-text-color">
        {headline}
      </div>

      {/* Display a link with optional underline */}
      <div className={`mt-2 text-sm text-text-color flex flex-row gap-1`}>
        <span>Or</span>
        <TextLink text={text} isUnderlined={isUnderlined} to={to} />
      </div>
    </>
  );
};

// Define prop types for the FormHeader component
FormHeader.propTypes = {
  headline: PropTypes.string.isRequired, // Expects a required string for the headline
  text: PropTypes.string.isRequired, // Expects a required string for the link text
  isUnderlined: PropTypes.bool, // Expects an optional boolean to control text underline
  to: PropTypes.string.isRequired, // Expects a required string for the link destination
};

// Export the FormHeader component as the default export
export default FormHeader;
