import PropTypes from "prop-types";

export default function AuthContainer({ children }) {
  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-xl bg-gray-900/70 shadow-2xl shadow-violet-950 transition-all">
      <div className="absolute inset-0 bg-purple-900/50 backdrop-blur-sm"></div>
      <div className="flex min-h-full w-full relative">
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
