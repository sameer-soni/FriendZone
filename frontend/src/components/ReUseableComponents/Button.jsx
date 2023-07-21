import PropTypes from "prop-types";
import { classNames } from "../../utils/Helpers";

const Button = ({ type, className, clickHandler, children }) => {
  return (
    <button
      onClick={clickHandler}
      type={type}
      className={classNames(
        "flex justify-center rounded-md border border-transparent duration-200 py-2 px-4 text-sm font-medium  shadow-sm  " +
          className
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
