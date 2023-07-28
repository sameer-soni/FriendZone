// Import necessary components and libraries
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button, InputFile } from "../index";
import { FiSend } from "react-icons/fi";
import PropTypes from "prop-types";
import { BiImageAdd } from "react-icons/bi";

// AddStoryModal component to display a modal for adding a new story
const AddStoryModal = ({ open, setOpen, handleOnStoryAdd }) => {
  return (
    // Modal Transition using Headless UI's Transition component
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        {/* Background Overlay */}
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

        {/* Modal Content */}
        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full  items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* Modal Panel */}
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg border border-white bg-main-shade text-text-color px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8  sm:max-w-sm sm:p-6">
                <div>
                  {/* Label and input field for the Story Link */}
                  <label htmlFor="email" className="block text-sm font-bold">
                    Add Your Story
                  </label>
                  <div className="mt-1  flex flex-row items-center"></div>
                  {/* Button to add a story with an image */}
                  <Button
                    type="button"
                    className="mt-5 mr-5 text-white items-center rounded-full shadow-sm border-2 border-white duration-300"
                  >
                    <div
                      className="border-white w-8 h-8 bg-primary-shade rounded-full"
                      onClick={handleOnStoryAdd} // Handle adding a new story (currently logs a message)
                    >
                      <BiImageAdd
                        className="w-full h-full p-2 rounded-full duration-500"
                        aria-hidden="true"
                      />
                      {/* InputFile component for uploading an image */}
                      <InputFile
                        id="userPhoto"
                        name="userPhoto"
                        onChange={(e) =>
                          console.log("image uploaded")
                        } /* Log a message when an image is uploaded (you may implement image upload logic here) */
                      />
                    </div>
                  </Button>
                  {/* Button to add a story without an image */}
                  <Button
                    type="button"
                    className="mt-5  text-white items-center rounded-full shadow-sm border-2 border-white duration-300"
                  >
                    <div
                      className="border-white w-8 h-8 bg-primary-shade rounded-full"
                      onClick={handleOnStoryAdd} // Handle adding a new story (currently logs a message)
                    >
                      <FiSend
                        className="w-full h-full p-2 rounded-full duration-500"
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

// Prop types for the AddStoryModal component
AddStoryModal.propTypes = {
  setOpen: PropTypes.func.isRequired, // Function to manage closing the modal
  open: PropTypes.bool.isRequired, // State to manage whether the modal is open or not
  handleOnStoryAdd: PropTypes.func, // Function to handle adding of a new story
};

export default AddStoryModal;
