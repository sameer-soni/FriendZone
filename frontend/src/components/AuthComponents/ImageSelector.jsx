// Import PropTypes for prop type validation
import PropTypes from "prop-types";

// Define the ImageSelector component
const ImageSelector = ({ children }) => {
  return (
    // Render a container for selecting an image
    <div className="ml-4 flex">
      {/* Render a div element with appropriate styling for the image selector */}
      <div className="relative flex cursor-pointer items-center rounded-md border border-blue-gray-300 py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-primary">
        {/* Render the child elements passed to the ImageSelector */}
        {children}
      </div>
    </div>
  );
};

// Define prop types for the ImageSelector component
ImageSelector.propTypes = {
  children: PropTypes.node.isRequired, // Expects child elements (nodes) to be passed inside the ImageSelector
};

// Export the ImageSelector component as the default export
export default ImageSelector;
