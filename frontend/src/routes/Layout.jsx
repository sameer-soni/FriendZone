// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// };

// export default Layout;
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { Outlet } from "react-router-dom";
import { Topbar } from "../components";

const Layout = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-full w-1/2 bg-white"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 h-full w-1/2 bg-gray-50"
        aria-hidden="true"
      />
      <div className="relative flex min-h-screen flex-col">
        <Topbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
