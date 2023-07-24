// Import PropTypes for prop type validation
import PropTypes from "prop-types";

// Define the PrimaryButton component
const PrimaryButton = ({ type, children }) => {
  return (
    // Render a button element with appropriate styling and type
    <button
      type={type}
      className="flex w-full justify-center rounded-md border border-transparent duration-200 py-2 px-4 text-sm  text-white shadow-sm bg-primary-shade hover:bg-transparent hover:border-primary-shade font-bold"
    >
      {/* Render the child elements inside the button */}
      {children}
    </button>
  );
};

// Define prop types for the PrimaryButton component
PrimaryButton.propTypes = {
  type: PropTypes.string, // Expects an optional string for the button type
  children: PropTypes.node.isRequired, // Expects required child elements as the children prop
};

// Export the PrimaryButton component as the default export
export default PrimaryButton;
