import { HeartIcon } from "@heroicons/react/24/solid";
const DeveloperSlogan = () => {
  return (
    <div className="flex flex-row items-center justify-start my-4 text-sm text-white">
      Developed by
      <a
        href="https://github.com/Mohsin-mw"
        target="_blank"
        className="font-bold cursor-pointer flex flex-row-reverse  items-center justify-center mx-1 "
        rel="noreferrer"
      >
        <span className="underline underline-offset-4">Sameer</span>
      </a>
      With
      <span className="flex flex-row items-center justify-center ml-1">
        <HeartIcon className="h-4 w-4 text-indigo-500" />
      </span>
    </div>
  );
};

export default DeveloperSlogan;
