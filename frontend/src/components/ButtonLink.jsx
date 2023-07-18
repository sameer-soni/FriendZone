import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonLink = ({ text, Icon, to }) => {
  return (
    <Link
      to={to}
      className="flex flex-row items-center justify-center gap-1 rounded-md px-3 py-2 text-sm font-medium bg-primary-shade text-white hover:text-white"
    >
      {text}
      {Icon}
    </Link>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.any,
  to: PropTypes.string.isRequired,
};

export default ButtonLink;
