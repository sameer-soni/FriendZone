import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { MyContextProvier } from "./context/MyContext";
import "./pages/custom-scrollbar.css";
import socketIOClient from "socket.io-client";

const socket = socketIOClient(`${import.meta.env.VITE_SERVER_URL}`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvier socket={socket}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </MyContextProvier>
  </React.StrictMode>
);
