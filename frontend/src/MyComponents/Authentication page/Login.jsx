import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Login.css";

function Login() {
  return (
    <div id="mainContainer">
      <div id="leftContainer">
        <p id="heading">Welcome to Social Media Website</p>
        <div></div> {/* for underline border */}
        <p id="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          necessitatibus repudiandae eius voluptatem repellendus alias corrupti
          animi, aliquid ipsum iste perferendis ut! Sapiente, velit molestias
          numquam laborum enim possimus ea.
        </p>
        <button
          style={{
            // border: "2px solid red",
            margin: "auto",
            width: "92%",
            height: "20%",
            borderRadius: "80px",
            margin: "10vw 0px",
            backgroundColor: "#ff6300",
            fontSize: "30px",
            border: "none",
            // color: "white",
            fontFamily: "Open Sans, cursive",
          }}
        >
          SIGN UP
        </button>
      </div>

      <div id="rightContainer">
        <form
          style={{
            // border: "2px solid green",
            height: "100%",
            display: "flex",
          }}
        >
          <div id="inputContainer">
            <input type="text" placeholder="Email" />
            <br />
            <input type="text" placeholder="Password" />
            <button id="loginButton">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
