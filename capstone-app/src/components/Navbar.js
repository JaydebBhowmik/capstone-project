import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/appointment">Appointment</Link> | 
      <Link to="/reviews">Reviews</Link> | 
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;