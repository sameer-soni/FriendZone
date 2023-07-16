import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import pink from "../../pinkBg.png";

function Login() {
  const [email, setEmail] = useState("second");
  const [password, setPassword] = useState("second");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="mainContainer">
      <div id="leftContainer">
        <p>Login to Your Account</p>
        <form>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button onClick={submit}>SIGN IN</button>
      </div>

      <div id="rightContainer">
        <img
          src={pink}
          alt=""
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div id="right-container-stuffs">
          <div>
            New Here? <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
