import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ButtonLink, Logo, SearchBar } from "../index";

const Topbar = () => {
  return (
    // Disclosure component as the top-level container for navigation elements
    <Disclosure
      as="nav"
      className="flex-shrink-0 sticky top-0 z-10 bg-main-shade"
    >
      <>
        <div className="mx-auto px-2 sm:px-4 py-1">
          <div className="relative flex h-16 items-center justify-between">
            {/* Logo section (hidden on small screens) */}
            <div className="items-center px-2 hidden md:block">
              <Logo />
            </div>
            {/* SearchBar and ButtonLink section */}
            <div className="w-full lg:w-1/3">
              <div className="flex items-center justify-end">
                {/* SearchBar component */}
                <SearchBar />
                {/* ButtonLink component with a PlusIcon */}
                <ButtonLink
                  text=""
                  to="#"
                  Icon={<PlusIcon width="16px" height="16px" />}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Topbar;
