import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";

const MobileProfileModal = ({ open, setOpen, user, children }) => {
  return (
    // Transition component for showing/hiding the dialog
    <Transition.Root show={open} as={Fragment}>
      {/* Main dialog container */}
      <Dialog as="div" className="relative z-20" onClose={setOpen}>
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm bg-opacity-75 transition-opacity" />
        </Transition.Child>

        {/* Mobile profile modal content */}
        <div className="fixed h-full bottom-1/2 inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            {/* Profile panel */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm border border-white">
                <div className="flex flex-col relative">
                  <div className="flex h-7 items-center absolute right-5 top-2 z-10">
                    {/* Close button */}
                    <button
                      type="button"
                      className="rounded-md bg-main-shade text-primary-shade"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon
                        className="h-6 w-6 font-bold"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {/* User profile picture */}
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      className="grayscale"
                    />
                  </div>
                  <div>
                    <div className="relative flex flex-col items-center justify-center bg-main-shade text-text-color pb-4">
                      {/* User profile picture */}
                      <div className="flex items-center justify-center absolute -top-20 w-36 h-36 border-8 border-white drop-shadow-2xl rounded-full overflow-hidden">
                        <img
                          src={user?.pic}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* User display name */}
                      <div className="mt-20 text-1xl font-bold">
                        {user?.username}
                      </div>
                      {/* User email and birthday */}
                      <div className="flex flex-row items-center justify-between w-full mt-8 h-full px-8">
                        <div className="flex flex-col items-start justify-center">
                          <div className="font-bold text-base">Email</div>
                          <div className="font-semibold text-sm">
                            {user?.email
                              ? user?.email
                              : (user?.username + "@gmail.com")
                                  .split(" ")
                                  .join("")
                                  .toLocaleLowerCase()}
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <div className="font-bold text-base">Birthday</div>
                          <div className="font-semibold text-sm">
                            June 23, 1988
                          </div>
                        </div>
                      </div>
                      {/* User bio */}
                      <div className="flex flex-col items-start mt-4 px-8">
                        <div className="font-bold text-base">Bio</div>
                        <div className="font-semibold text-sm">
                          Hi, I'm Whitney Francis and I'm a programmer. I
                          specialize in developing mobile applications and web
                          development. I have an eye for detail and I'm
                          passionate about creating beautiful, well-crafted
                          software products.
                        </div>
                      </div>
                      {/* Children components (e.g., buttons) */}
                      <div className="flex flex-row items-center justify-around w-full px-8 mt-8">
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

// PropTypes for MobileProfileModal component to specify the expected props types
MobileProfileModal.propTypes = {
  open: PropTypes.bool.isRequired, // Whether the modal is open or not
  setOpen: PropTypes.func.isRequired, // Function to set the open state of the modal
  user: PropTypes.object, // User object with profile data
  children: PropTypes.node, // Children components (e.g., buttons)
};

export default MobileProfileModal;
