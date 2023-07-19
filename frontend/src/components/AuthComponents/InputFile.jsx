import PropTypes from "prop-types";

const InputFile = ({ id, name, onChange }) => {
  return (
    <input
      id={id}
      name={name}
      type="file"
      onChange={onChange}
      className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
    />
  );
};

InputFile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputFile;
