import React, { useState } from "react";

const Profile = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>User Profile</h2>

      <input
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br /><br />

      <button>
        Update Profile
      </button>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;