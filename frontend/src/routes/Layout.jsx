import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar, Topbar, MobileBottomBar } from "../components";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";

const Layout = () => {
  const navigate = useNavigate();
  const { loggedUser, setLoggedUser } = useContext(MyContext);
  useEffect(() => {
    console.log(loggedUser);
    if (!loggedUser) {
      // setLoggedUser("");
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
