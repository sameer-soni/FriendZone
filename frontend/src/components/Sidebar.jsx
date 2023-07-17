import { classNames } from "../utils/Helpers";
import { Logo } from "./index";
import { sidebarNavigation } from "../constants/Constants";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="hidden w-28 overflow-y-auto bg-gray-900 md:block border-r-2 border-gray-800 ">
      <div className="flex w-full flex-col items-center py-6">
        <div className="flex flex-shrink-0 items-center">
          <Logo />
        </div>
        <div className="mt-6 w-full flex-1 space-y-1 px-2">
          {sidebarNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "bg-indigo-500 text-white"
                  : "text-indigo-100 hover:bg-gray-800 hover:text-white",
                "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-white"
                    : "text-indigo-300 group-hover:text-white",
                  "h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="mt-2">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
