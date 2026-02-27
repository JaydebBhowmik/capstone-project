import React, { useState } from "react";

const Signup = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");

  const handleSignup=()=>{

    if(!name || !email || !password){
      setMessage("All fields required");
      return;
    }

    const user={
      name,
      email
    };

    // ✅ Save user
    localStorage.setItem("user", JSON.stringify(user));

    setMessage("✅ Signup Successful");
  };

  return(
    <div>
      <h2>Sign Up</h2>

      <input
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      /><br/><br/>

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      /><br/><br/>

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      /><br/><br/>

      <button onClick={handleSignup}>
        Register
      </button>

      <p>{message}</p>
    </div>
  );
};

export default Signup;