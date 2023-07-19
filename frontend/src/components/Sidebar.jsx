import { classNames } from "../utils/Helpers";
import { navigation } from "../constants/Constants";
import UserProfileCard from "./UserProfileCard";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-64 flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100 mx-2 ">
          <UserProfileCard />
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <nav className="mt-5 flex-1" aria-label="Sidebar">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
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
                  </a>
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
