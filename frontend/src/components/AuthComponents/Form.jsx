// Import PropTypes for prop type validation
import PropTypes from "prop-types";

// Define the Form component
const Form = ({ submitHandler, children }) => {
  return (
    // Create a form element with appropriate attributes and classes
    <form
      action="#"
      method="POST"
      className="space-y-4 mt-10 mb-1"
      // Handle form submission using the provided submitHandler function
      onSubmit={(event) => submitHandler(event)}
    >
      {/* Render the children components inside the form */}
      {children}
    </form>
  );
};

// Define prop types for the Form component
Form.propTypes = {
  submitHandler: PropTypes.func.isRequired, // Expects a required function for form submission handling
  children: PropTypes.node.isRequired, // Expects required child elements as the children prop
};

// Export the Form component as the default export
export default Form;
