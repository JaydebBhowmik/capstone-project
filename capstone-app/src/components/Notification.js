import React from "react";

const Notification = ({ message }) => {

  if (!message) return null;

  return (
    <div style={{
      background: "#d4edda",
      color: "#155724",
      padding: "10px",
      marginTop: "15px",
      borderRadius: "5px"
    }}>
      🔔 {message}
    </div>
  );
};

export default Notification;