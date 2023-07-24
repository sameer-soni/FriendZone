// Import necessary components and modules
import { Link } from "react-router-dom";
import { navigation } from "../../constants/Constants";
import { classNames } from "../../utils/Helpers";
import ProfileDropDown from "./ProfileDropDown";

// Define the MobileBottomBar component
const MobileBottomBar = () => {
  return (
    // Container for the mobile bottom bar, visible only on small screens (md:hidden)
    <div className="block md:hidden bg-main-shade">
      <div className="flex">
        <nav className="flex-1" aria-label="Sidebar">
          {/* Container for the navigation links */}
          <div className="flex flex-row items-center justify-around rounded-none md:rounded-xl pt-2">
            {/* Map through the navigation items and render the links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                // Use the classNames helper function to apply conditional classes
                className={classNames(
                  "text-gray-600  border-b-2 border-main-shade hover:border-b-2 hover:border-primary-shade hover:text-primary-shade group flex justify-center items-center px-2 py-2 text-sm font-medium transition duration-500 ease-in-out"
                )}
              >
                {/* Render the icon for the navigation link */}
                <item.icon
                  // Use classNames to apply conditional classes to the icon
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
            {/* Render the profile dropdown component */}
            <ProfileDropDown />
          </div>
        </nav>
      </div>
    </div>
  );
};

// Export the MobileBottomBar component as the default export
export default MobileBottomBar;
