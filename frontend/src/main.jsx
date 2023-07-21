import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { MyContextProvier } from "./context/MyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvier>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </MyContextProvier>
  </React.StrictMode>
);
