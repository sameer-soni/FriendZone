import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ButtonLink, LogoWithName, SearchBar } from "./index";
import ProfileDropDown from "./ProfileDropDown";

const Topbar = () => {
  return (
    <Disclosure as="nav" className="flex-shrink-0 bg-white">
      <>
        <div className="mx-auto  px-2 sm:px-4 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className=" items-center px-2 hidden md:block ">
              <LogoWithName />
            </div>

            <div className="lg:w-1/3">
              <div className="flex items-center justify-end">
                <SearchBar />
                <ButtonLink
                  text="Create"
                  to="#"
                  Icon={<PlusIcon width="16px" height="16px" />}
                />
                <ProfileDropDown />
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Topbar;
