import PropTypes from "prop-types";
import { Disclosure } from "@headlessui/react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const MobileMenuButton = ({ open }) => {
  return (
    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-primary-shade p-2 text-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3CenterLeftIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
};

MobileMenuButton.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default MobileMenuButton;
