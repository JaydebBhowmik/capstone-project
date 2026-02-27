import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import Reviews from "./components/Reviews";
import Profile from "./components/Profile";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;