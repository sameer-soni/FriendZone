import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar, Topbar, MobileBottomBar } from "../components";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("userInfo"))) {
      navigate("/signin");
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar className="flex-shrink-0" />
      <div className="flex flex-col flex-1">
        <Topbar />
        <Outlet />
        <MobileBottomBar />
      </div>
    </div>
  );
};

export default Layout;
