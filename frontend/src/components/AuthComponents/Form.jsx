import PropTypes from "prop-types";

const Form = ({ submitHandler, children }) => {
  return (
    <form
      action="#"
      method="POST"
      className="space-y-4 mt-10 mb-1"
      onSubmit={(event) => submitHandler(event)}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
