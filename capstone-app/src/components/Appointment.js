import React, { useState } from "react";
import Notification from "./Notification";
import DocSearch from "./DocSearch";
import InstantConsultation from "./InstantConsultation";

const Appointment = () => {

  const [booked, setBooked] = useState(false);
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    setBooked(true);
    setMessage("Appointment Booked Successfully!");
  };

  return (
    <div>

      <h2>Book Appointment</h2>

      {/* Doctor Search */}
      <DocSearch />

      <hr />

      <input type="text" placeholder="Your Name" />
      <br /><br />

      <input type="date" />
      <br /><br />

      <select>
        <option>Select Time</option>
        <option>10 AM</option>
        <option>12 PM</option>
      </select>

      <br /><br />

      <button onClick={handleBooking}>
        Book Appointment
      </button>

<InstantConsultation />

      {/* ✅ Notification Integration */}
      {booked && <Notification message={message} />}

    </div>
  );
};

export default Appointment;