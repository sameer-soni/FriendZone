import PropTypes from "prop-types";

export default function AuthContainer({ children }) {
  return (
    <div className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all">
      <div className="flex min-h-full w-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">{children}</div>
        </div>
      </div>
    </div>
  );
}

AuthContainer.propTypes = {
  children: PropTypes.node,
};
