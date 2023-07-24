import { Logo } from "../index.js";

const LogoWithName = () => {
  return (
    <div className="flex-shrink-0 flex flex-row items-center justify-center">
      <Logo />
      <span className="font-bold text-text-color">FriendZone</span>
    </div>
  );
};

export default LogoWithName;
