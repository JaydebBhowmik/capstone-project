import React, { useState } from "react";

const doctorsList = [
  "Sharma - Cardiologist",
  "Roy - Dentist",
  "Mehta - Neurologist",
  "Sen - Pediatrician",
  "Das - Orthopedic"
];

const DocSearch = () => {

  const [doctor, setDoctor] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setDoctor(value);

    const filteredDoctors = doctorsList.filter((doc) =>
      doc.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filteredDoctors);
  };

  return (
    <div>
      <h2>Find Doctor</h2>

      <input
        placeholder="Search doctor by name or specialization"
        value={doctor}
        onChange={(e)=>handleSearch(e.target.value)}
      />

      <br/><br/>

      {results.length > 0 && (
        <div>
          <h3>Search Results</h3>

          <ul>
            {results.map((doc,index)=>(
              <li key={index}>
                Dr. {doc}
              </li>
            ))}
          </ul>
        </div>
      )}

      {doctor && results.length === 0 && (
        <p>No Doctor Found</p>
      )}
    </div>
  );
};

export default DocSearch;