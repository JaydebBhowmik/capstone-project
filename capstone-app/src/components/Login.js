import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {

    if (!email.includes("@") || name === "") {
      alert("Invalid Details");
      return;
    }

    login({ name, email });

    alert("Login Successful");

    navigate("/profile");
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e)=>setName(e.target.value)}
      /><br/><br/>

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      /><br/><br/>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;