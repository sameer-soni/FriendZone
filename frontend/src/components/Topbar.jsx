import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  ButtonLink,
  DisclosureButton,
  LogoWithName,
  MobileMenuButton,
  SearchBar,
} from "./index";
import ProfileDropDown from "./ProfileDropDown";

const Topbar = () => {
  return (
    <Disclosure as="nav" className="flex-shrink-0 bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0 xl:w-64">
                <LogoWithName />
              </div>
              <div className="flex lg:hidden">
                <MobileMenuButton open={open} />
              </div>
              <div className="hidden lg:block lg:w-90">
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

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3">
              <DisclosureButton text="Dashboard" />
            </div>
            <div className="border-t border-quaternary-shade pt-4 pb-3">
              <div className="px-2">
                <DisclosureButton text="Your Profile" />
                <DisclosureButton text="Settings" />
                <DisclosureButton text="Sign Out" />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Topbar;
