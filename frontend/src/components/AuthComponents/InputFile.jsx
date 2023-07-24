// Import PropTypes for prop type validation
import PropTypes from "prop-types";

// Define the InputFile component
const InputFile = ({ id, name, onChange }) => {
  return (
    // Render an input element with type "file" for selecting files
    <input
      id={id}
      name={name}
      type="file"
      onChange={onChange}
      className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
    />
  );
};

// Define prop types for the InputFile component
InputFile.propTypes = {
  id: PropTypes.string.isRequired, // Expects a required string for the input ID
  name: PropTypes.string.isRequired, // Expects a required string for the input name
  onChange: PropTypes.func.isRequired, // Expects a required function to handle file selection changes
};

// Export the InputFile component as the default export
export default InputFile;
