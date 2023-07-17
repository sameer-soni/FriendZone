import "./App.css";
import Login from "./MyComponents/Authentication page/Login";
import Main from "./MyComponents/MainPageComponents/Main";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        {/* <Main /> */}
        <Login />
      </ChakraProvider>
    </>
  );
}

export default App;
