import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Friends, Home, Notifications, SignIn, SignUp } from "../pages";
import Photos from "../pages/Photos";
import Chatbot from "../../../chatbot/chatbot.jsx";

  


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
        path: "/photos",
        element: <Photos />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/chatbot",
        element: <Chatbot />,
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
