// Import PropTypes for prop type validation
import PropTypes from "prop-types";
import { InputText, Label } from "../index";

// Define the FormInput component
const FormInput = ({ labelName, id, name, type, value, onChange }) => {
  return (
    <div>
      {/* Render the Label component if labelName prop is provided */}
      {labelName && <Label text={labelName} />}

      <div className="mt-1">
        {/* Render the InputText component with appropriate props */}
        <InputText
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

// Define prop types for the FormInput component
FormInput.propTypes = {
  labelName: PropTypes.string, // Expects an optional string for the label name
  id: PropTypes.string.isRequired, // Expects a required string for the input ID
  name: PropTypes.string.isRequired, // Expects a required string for the input name
  type: PropTypes.string.isRequired, // Expects a required string for the input type
  value: PropTypes.string.isRequired, // Expects a required string for the input value
  onChange: PropTypes.func.isRequired, // Expects a required function for handling input changes
};

// Export the FormInput component as the default export
export default FormInput;
