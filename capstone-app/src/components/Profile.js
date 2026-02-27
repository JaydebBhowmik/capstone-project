import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {

  const { user } = useContext(AuthContext);

  const [newName, setNewName] = useState("");

  if (!user) {
    return <h3>Please Login First</h3>;
  }

  return (
    <div>

      {/* ✅ Welcome Message */}
      <h2>Welcome {user.name} 👋</h2>

      <h3>Profile Details</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>


      <input
        placeholder="Change Name"
        onChange={(e)=>setNewName(e.target.value)}
      />

      <br/><br/>

      <button>
        Update Profile
      </button>

    </div>
  );
};

export default Profile;