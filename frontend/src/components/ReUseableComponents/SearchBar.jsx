// Import necessary components and hooks
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import SearchModal from "../HomeComponents/SearchModal";

// Define the SearchBar component
const SearchBar = () => {
  // State to manage the visibility of the search modal
  const [open, setOpen] = useState(false);

  // Handler function to toggle the visibility of the search modal
  const modalHandler = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    // Container for the search bar and search modal
    <div className="flex flex-1 justify-center lg:justify-end">
      {/* Search Bar */}
      <div className="w-full px-2 lg:px-6">
        {/* Label for screen readers */}
        <label htmlFor="search" className="sr-only">
          Search People
        </label>
        <div
          // Clicking on this div will toggle the search modal
          className="relative text-quaternary-shade focus-within:text-gray-400"
          onClick={modalHandler}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {/* Magnifying glass icon for search */}
            <MagnifyingGlassIcon
              className="h-5 w-5 text-white"
              aria-hidden="true"
            />
          </div>
          {/* Input field for search */}
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border border-transparent bg-seconday-shade bg-opacity-75 py-2 pl-10 pr-3 leading-5 text-indigo-100 placeholder-quaternary-shade focus:text-quaternary-shade focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm caret-transparent"
            placeholder="Search People"
            type="search"
            autoComplete="off"
          />
        </div>
      </div>

      {/* Search Modal */}
      {/* The SearchModal component is conditionally rendered based on the 'open' state */}
      <SearchModal open={open} setOpen={setOpen} />
    </div>
  );
};

// Export the SearchBar component as the default export
export default SearchBar;
