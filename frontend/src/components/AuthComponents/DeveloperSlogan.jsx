// Import the HeartIcon from Heroicons library
import { HeartIcon } from "@heroicons/react/24/solid";

// Define the DeveloperSlogan component
const DeveloperSlogan = () => {
  return (
    <div className="flex flex-row items-center justify-start my-4 text-sm text-white">
      {/* Display the text "Developed by" */}
      Developed by
      {/* Render a link to the developer's GitHub profile */}
      <a
        href="https://github.com/sameer-soni"
        target="_blank"
        className="font-bold cursor-pointer flex flex-row-reverse  items-center justify-center mx-1 "
        rel="noreferrer"
      >
        {/* Display the developer's name with an underline */}
        <span className="underline underline-offset-4">Sameer</span>
      </a>
      {/* Display the text "With" */}
      With
      {/* Render the HeartIcon component */}
      <span className="flex flex-row items-center justify-center ml-1">
        <HeartIcon className="h-4 w-4 text-primary-shade" />
      </span>
    </div>
  );
};

// Export the DeveloperSlogan component as the default export
export default DeveloperSlogan;
