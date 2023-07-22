import { Outlet, useNavigate } from "react-router-dom";
import {
  Sidebar,
  Topbar,
  MobileBottomBar,
  DesktopSecondaryColumn,
} from "../components";
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
    <>
      <div className="flex h-full">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Topbar />
          <div className="flex flex-1 items-stretch overflow-hidden">
            <Outlet />
            <DesktopSecondaryColumn />
          </div>
          <MobileBottomBar />
        </div>
      </div>
    </>
  );
};

export default Layout;
