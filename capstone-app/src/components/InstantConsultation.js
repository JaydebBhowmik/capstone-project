import React, { useState } from "react";

const InstantConsultation = () => {

  const [status, setStatus] = useState("");

  const startConsultation = () => {
    setStatus("Connecting to Doctor...");

    setTimeout(() => {
      setStatus("Doctor Connected Successfully ✅");
    }, 2000);
  };

  return (
    <div>
      <h3>Instant Consultation</h3>

      <button onClick={startConsultation}>
        Consult Now
      </button>

      <p>{status}</p>
    </div>
  );
};

export default InstantConsultation;