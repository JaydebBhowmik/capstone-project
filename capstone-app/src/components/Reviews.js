import React, { useState } from "react";

const Reviews = () => {

  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const addReview = () => {
    setReviews([...reviews, review]);
    setReview("");
  };

  return (
    <div>
      <h2>User Reviews</h2>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <br />

      <button onClick={addReview}>
        Submit Review
      </button>

      <ul>
        {reviews.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;