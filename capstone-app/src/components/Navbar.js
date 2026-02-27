import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { user } = useContext(AuthContext);


  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged Out Successfully");
  };

  return (
    <nav style={styles.navbar}>


      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/appointment" style={styles.link}>Appointment</Link>
        <Link to="/reviews" style={styles.link}>Reviews</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </div>

      <div style={styles.welcomebox}>

        <h4>Welcome {user.name} </h4>
        {isLoggedIn && (
          <button onClick={handleLogout} style={styles.logout}>
            Logout
          </button>
        )}
      </div>



    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1976d2",
    padding: "12px",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    color: "white",
    margin: "0 10px",
    textDecoration: "none",
    fontWeight: "bold"
  },
  logout: {
    background: "red",
    color: "white",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer"
  },
  welcomebox:{
   display: "flex",
    justifyContent: "space-between",
    alignItems: "center",  
    gap:"30px",
  }
};

export default Navbar;