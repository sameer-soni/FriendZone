// Import the logo image from the assets folder
import logo from "../../assets/logo.svg";
// import logo from "../../assets/logo.png";
import applogo from "../../assets/Applogo.png";

// Define the Logo component
const Logo = () => {
  return (
    <div className="flex flex-row items-center brightness-110">
      {/* Display the logo image with appropriate styling */}
      <img className="h-9 my-5 w-auto" src={logo} alt="Your Company" />
      <img className="h-8 my-5 w-auto" src={applogo} alt="Your Company" />
    </div>
  );
};

// Export the Logo component as the default export
export default Logo;
