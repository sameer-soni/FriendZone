import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TextLink = ({ text, isUnderlined, to, children }) => {
  return (
    <div className="text-sm">
      <Link
        to={to}
        className={`flex flex-row justify-center items-center font-medium text-indigo-500 hover:text-indigo-600 ${
          isUnderlined ? "underline underline-offset-4" : ""
        }`}
      >
        {text}
        {children}
      </Link>
    </div>
  );
};

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default TextLink;
