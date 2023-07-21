import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ButtonLink, LogoWithName, SearchBar } from "../index";

const Topbar = () => {
  return (
    <Disclosure as="nav" className="flex-shrink-0 bg-white sticky top-0 z-10">
      <>
        <div className="mx-auto  px-2 sm:px-4 border-b border-gray-300 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className=" items-center px-2 hidden md:block ">
              <LogoWithName />
            </div>

            <div className="w-full lg:w-1/3 ">
              <div className="flex items-center justify-end">
                <SearchBar />
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
