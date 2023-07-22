
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../ReUseableComponents/Button";

const MobileProfileModal = ({ open, setOpen, user, children }) => {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed h-full bottom-1/2 inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white   pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm ">

                <div className="flex flex-col relative ">
                  <div className="flex h-7 items-center absolute right-5 top-2">
                    <button
                      type="button"
                      className="rounded-md bg-white text-primary-shade "
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div>
                    <img src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                  </div>
                  <div>
                    <div className="relative flex flex-col items-center justify-center ">
                      <div className="absolute -top-20 w-36 h-36 border-8 border-white drop-shadow-2xl rounded-full overflow-hidden ">

                        <img
                          src={user?.pic}
                          className="w-full h-full object-cover object-left"
                        />
                      </div>
                      <div className="mt-20 text-dark-shade text-1xl font-bold">
                        {user?.username}

                      </div>
                      <div className="flex flex-row items-center justify-between w-full mt-8 px-8">
                        <div className="flex flex-col items-start justify-center">
                          <div className="text-[#B1B1B1] font-bold text-base">
                            Email
                          </div>
                          <div className="text-dark-shade font-semibold text-sm">

                            {user?.email}

                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <div className="text-[#B1B1B1] font-bold text-base">
                            Birthday
                          </div>
                          <div className="text-dark-shade font-semibold text-sm">
                            June 23, 1988
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start mt-4 px-8">
                        <div className="text-[#B1B1B1] font-bold text-base">
                          Bio
                        </div>
                        <div className="text-dark-shade font-semibold text-sm">
                          Hi, I'm Whitney Francis and I'm a programmer. I
                          specialize in developing mobile applications and web
                          development. I have an eye for detail and I'm
                          passionate about creating beautiful, well-crafted
                          software products.
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-center w-full  px-8 mt-8">
                        {children}
                        <Button
                          clickHandler={handleLogout}
                          className="bg-primary-shade hover:bg-primary-shade-v2 text-white focus:outline-none"
                        >
                          Log Out
                        </Button>

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

MobileProfileModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,

  handleLogout: PropTypes.func,
  user: PropTypes.object,
  children: PropTypes.node,

};

export default MobileProfileModal;
