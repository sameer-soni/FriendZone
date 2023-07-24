// Import PropTypes for prop type validation
import PropTypes from "prop-types";

// Define the InputText component
const InputText = ({ id, name, type, value, onChange }) => {
  return (
    // Render an input element with appropriate props and styling
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required
      className="block w-full appearance-none rounded-md border bg-gray-800 text-white px-3 py-2 placeholder-white shadow-sm focus:border-primary-shade focus:outline-none focus:ring-primary-shade sm:text-sm"
    />
  );
};

// Define prop types for the InputText component
InputText.propTypes = {
  id: PropTypes.string.isRequired, // Expects a required string for the input ID
  name: PropTypes.string.isRequired, // Expects a required string for the input name
  type: PropTypes.string.isRequired, // Expects a required string for the input type
  value: PropTypes.string.isRequired, // Expects a required string for the input value
  onChange: PropTypes.func.isRequired, // Expects a required function for handling input changes
};

// Export the InputText component as the default export
export default InputText;
