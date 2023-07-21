import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import Button from "../ReUseableComponents/Button";
import { MyContext } from "../../context/MyContext";

const DesktopProfileModal = ({ open, setOpen }) => {
  const { loggedUser } = useContext(MyContext);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0 " />

        <div
          className={`fixed inset-0 overflow-hidden bg-gray-200   bg-opacity-0 ${
            open ? "bg-opacity-60" : ""
          } duration-500`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md ">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          id="slide-over-heading"
                          className="text-lg font-medium text-dark-shade"
                        >
                          Profile
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-primary-shade text-white hover:bg-primary-shade-v2 focus:bg-primary-shade focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Main */}
                    <div>
                      <div className="pb-1 sm:pb-6">
                        <div>
                          <div className="relative h-40 sm:h-56">
                            <img
                              className="absolute h-full w-full object-cover"
                              src={loggedUser?.pic}
                              alt=""
                            />
                          </div>
                          <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                            <div className="sm:flex-1">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="text-xl font-bold text-dark-shade sm:text-2xl">
                                    {loggedUser?.username}
                                  </h3>
                                  <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                    <span className="sr-only">Online</span>
                                  </span>
                                </div>
                                <p className="text-sm text-gray-500">
                                  @{loggedUser?.username}
                                </p>
                              </div>
                              <div className="mt-5 flex  space-x-5">
                                <Button className="bg-primary-shade hover:bg-primary-shade-v2 text-white w-2/4">
                                  Message
                                </Button>
                                <Button className="bg-white hover:bg-gray-200 text-quaternary-shade border border-tertiary-shade  w-2/4 ">
                                  Call
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                              Bio
                            </dt>
                            <dd className="mt-1 text-sm text-dark-shade sm:col-span-2">
                              <p>
                                Hi, I'm Whitney Francis and I'm a programmer. I
                                specialize in developing mobile applications and
                                web development. I have an eye for detail and
                                I'm passionate about creating beautiful,
                                well-crafted software products.
                              </p>
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                              Location
                            </dt>
                            <dd className="mt-1 text-sm text-dark-shade sm:col-span-2">
                              New York, NY, USA
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                              Email
                            </dt>
                            <dd className="mt-1 text-sm text-dark-shade sm:col-span-2">
                              {loggedUser?.email}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                              Birthday
                            </dt>
                            <dd className="mt-1 text-sm text-dark-shade sm:col-span-2">
                              <time dateTime="1988-06-23">June 23, 1988</time>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

DesktopProfileModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default DesktopProfileModal;
