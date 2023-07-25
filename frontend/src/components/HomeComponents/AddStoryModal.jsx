import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "../index";
import { FiSend } from "react-icons/fi";
import PropTypes from "prop-types";

const AddStoryModal = ({ open, setOpen, handleOnStoryAdd }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg border border-white bg-main-shade text-text-color px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold">
                    Story Link
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md bg-seconday-shade py-2 px-2 shadow-sm  sm:text-sm"
                      placeholder="https://mypictures.com/213"
                    />
                  </div>
                  <Button
                    type="button"
                    className="mt-5 text-white items-center rounded-full shadow-sm    border-2 border-white  duration-300 "
                  >
                    <div
                      className=" border-white w-8 h-8 bg-primary-shade rounded-full "
                      onClick={handleOnStoryAdd}
                    >
                      <FiSend
                        className="w-full h-full p-2 rounded-full   duration-500 "
                        aria-hidden="true"
                      />
                    </div>
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

AddStoryModal.propTypes = {
  setOpen: PropTypes.func.isRequired, // Function to manage close card
  open: PropTypes.bool.isRequired, // State to manage open  card
  handleOnStoryAdd: PropTypes.func, // Function to handle adding of new story
};

export default AddStoryModal;
