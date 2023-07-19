import PropTypes from "prop-types";
import { TextLink } from "../index";

const FormHeader = ({ headline, text, isUnderlined, to }) => {
  return (
    <>
      <div className="mt-2 text-3xl font-bold tracking-tight text-white">
        {headline}
      </div>
      <div className={`mt-2 text-sm text-white flex flex-row gap-1`}>
        <span>Or</span>
        <TextLink text={text} isUnderlined={isUnderlined} to={to} />
      </div>
    </>
  );
};

FormHeader.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default FormHeader;
