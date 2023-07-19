import PropTypes from "prop-types";

const InputText = ({ id, name, type, value, onChange }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required
      className="block w-full appearance-none rounded-md border bg-gray-800 text-white px-3 py-2 placeholder-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    />
  );
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
