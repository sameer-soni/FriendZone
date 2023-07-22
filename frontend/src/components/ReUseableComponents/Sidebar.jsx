import { classNames } from "../../utils/Helpers";
import { navigation } from "../../constants/Constants";
import UserProfileCard from "./UserProfileCard";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden w-64 overflow-y-auto bg-light-shade md:block border-r border-borders-color overflow-x-hidden">
      <div className="flex w-64 flex-col">
        <div className="flex min-h-0 flex-1 flex-col  bg-gray-100 mx-2 ">
          <UserProfileCard />
          <div className="flex flex-1 flex-col overflow-y-auto pb-4 ">
            <nav className="mt-5 flex-1" aria-label="Sidebar">
              <div className="space-y-1 px-2 bg-white rounded-none md:rounded-xl py-2 ">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      "text-gray-600 hover:bg-gray-50 border-l-2 border-white hover:border-l-2 hover:border-primary-shade hover:text-primary-shade group flex items-center px-2 py-2 text-sm font-medium transition duration-500 ease-in-out"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-primary-shade transition duration-500 ease-in-out",
                        "mr-3 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
