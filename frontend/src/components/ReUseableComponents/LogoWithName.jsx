// Import the Logo component from the "../index.js" file
import { Logo } from "../index.js";

// Define the LogoWithName component
const LogoWithName = () => {
  return (
    // Container for the logo and the brand name
    <div className="flex-shrink-0 flex flex-row items-center justify-center">
      {/* Render the Logo component */}
      <Logo />
      {/* Render the brand name */}
      <span className="font-bold text-text-color">FriendZone</span>
    </div>
  );
};

// Export the LogoWithName component as the default export
export default LogoWithName;
