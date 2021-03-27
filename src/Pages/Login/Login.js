import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="background">
      <div className="loginBox">
        <div className="circleBackground" />
        <div className="nameTitle">
          <h3>
            <span className="bold">chess</span>tracker
          </h3>
        </div>
        <div className="signUpText">
          <h3>Sign up/Sign in</h3>
        </div>
        <div className="signInGoogle" onClick={handleLogin}>
          <FcGoogle className="react-icons" />
          <h3>Google</h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
