import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar, Topbar } from "../components";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("userInfo"))) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-gray-100/100">
        <Topbar />
        <div className="flex mt-2">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
