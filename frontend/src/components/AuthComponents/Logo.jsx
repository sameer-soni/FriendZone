// Import the logo image from the assets folder
import logo from "../../assets/logo.svg";

// Define the Logo component
const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      {/* Display the logo image with appropriate styling */}
      <img className="h-8 my-5 w-auto" src={logo} alt="Your Company" />
    </div>
  );
};

// Export the Logo component as the default export
export default Logo;
