import PropTypes from "prop-types";
import { classNames } from "../../utils/Helpers";

// Button component with clickHandler, children, type, and className props
const Button = ({ type, className, clickHandler, children }) => {
  return (
    // Render a button element with the specified props
    <button
      onClick={clickHandler} // Handle click event with clickHandler function
      type={type} // Set the button type (e.g., "button" or "submit")
      className={classNames(
        // Use the classNames utility function to combine multiple class names
        // with common button styles and the provided className from props
        "inline-flex items-center rounded-full border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 duration-200 " +
          className
      )}
    >
      {children} {/* Render the content inside the button */}
    </button>
  );
};

// PropTypes for Button component to specify the expected props types
Button.propTypes = {
  type: PropTypes.string, // Type of the button (e.g., "button" or "submit")
  className: PropTypes.string.isRequired, // Class name to apply custom styles
  clickHandler: PropTypes.func, // Click event handler function
  children: PropTypes.node.isRequired, // Content inside the button (can be any valid React node)
};

export default Button;
