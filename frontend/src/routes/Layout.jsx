import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../components";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <Topbar />
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
