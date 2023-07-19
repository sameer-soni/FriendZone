import PropTypes from "prop-types";

const ImageSelector = ({ children }) => {
  return (
    <div className="ml-4 flex">
      <div className="relative flex cursor-pointer items-center rounded-md border border-blue-gray-300  py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-primary">
        {children}
      </div>
    </div>
  );
};

ImageSelector.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageSelector;
