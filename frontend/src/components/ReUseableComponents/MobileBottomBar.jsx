import { Link } from "react-router-dom";
import { navigation } from "../../constants/Constants";
import { classNames } from "../../utils/Helpers";
import ProfileDropDown from "./ProfileDropDown";

const MobileBottomBar = () => {
  return (
    <div className="block md:hidden border border-t-gray-300">
      <div className="flex">
        <nav className=" flex-1 " aria-label="Sidebar">
          <div className="flex flex-row items-center justify-around   bg-white rounded-none md:rounded-xl pt-2  ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  "text-gray-600 hover:bg-gray-50 border-b-2 border-white hover:border-b-2 hover:border-primary-shade hover:text-primary-shade group flex justify-center  items-center px-2 py-2 text-sm font-medium transition duration-500 ease-in-out"
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-gray-500"
                      : "text-gray-400 group-hover:text-primary-shade transition duration-500 ease-in-out",
                    "h-6 w-6"
                  )}
                  aria-hidden="true"
                />
              </Link>
            ))}
            <ProfileDropDown />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileBottomBar;
