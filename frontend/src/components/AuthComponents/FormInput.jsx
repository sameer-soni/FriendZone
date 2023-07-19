import PropTypes from "prop-types";
import { InputText, Label } from "../index";

const FormInput = ({ labelName, id, name, type, value, onChange }) => {
  return (
    <div>
      {labelName && <Label text={labelName} />}
      <div className="mt-1">
        <InputText
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

FormInput.propTypes = {
  labelName: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
