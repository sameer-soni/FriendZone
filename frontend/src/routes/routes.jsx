import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Friends, Home, SignIn, SignUp } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
    ],
  },
  {
    path: "/signUp/",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
]);

export default router;
