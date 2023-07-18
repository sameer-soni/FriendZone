import PropTypes from "prop-types";
import { Disclosure } from "@headlessui/react";

const DisclosureButton = ({ text }) => {
  return (
    <Disclosure.Button
      as="a"
      href="#"
      className="block rounded-md px-3 py-2 text-base font-medium text-seconday-shade hover:bg-primary-shade hover:text-white"
    >
      {text}
    </Disclosure.Button>
  );
};

DisclosureButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DisclosureButton;
