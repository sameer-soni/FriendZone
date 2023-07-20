import PropTypes from "prop-types";

const PrimaryButton = ({ type, children }) => {
  return (
    <button
      type={type}
      className="flex w-full justify-center rounded-md border border-transparent duration-200 py-2 px-4 text-sm font-medium text-white shadow-sm bg-primary-shade hover:bg-fuchsia-900"
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PrimaryButton;
