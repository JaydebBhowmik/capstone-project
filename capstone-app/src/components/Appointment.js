import React, { useState } from "react";
import Notification from "./Notification";

const Appointment = () => {

  const [booked, setBooked] = useState(false);

  const handleBooking = () => {
    setBooked(true);
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <input type="text" placeholder="Your Name" />
      <br /><br />

      <input type="date" />
      <br /><br />

      <select>
        <option>10 AM</option>
        <option>12 PM</option>
      </select>

      <br /><br />

      <button onClick={handleBooking}>
        Book Appointment
      </button>

      {booked && <Notification />}
    </div>
  );
};

export default Appointment;