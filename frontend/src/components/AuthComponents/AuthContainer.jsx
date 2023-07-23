import PropTypes from "prop-types";

// Define the AuthContainer component
export default function AuthContainer({ children }) {
  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-xl bg-main-shade shadow-2xl  transition-all drop-shadow-lg">
      <div className="flex min-h-full w-full relative">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">{children}</div>
        </div>
      </div>
    </div>
  );
}

// Define prop types for the AuthContainer component
AuthContainer.propTypes = {
  children: PropTypes.node, // Expects a single child element or multiple child elements as the children prop
};
