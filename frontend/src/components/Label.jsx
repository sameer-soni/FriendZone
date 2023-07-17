import PropTypes from "prop-types";

const Label = ({ text }) => {
  return (
    <label htmlFor="remember-me" className="block text-sm text-white">
      {text}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;
