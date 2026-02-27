import React, { useState } from "react";

const Reviews = () => {

  const [review,setReview]=useState("");
  const [rating,setRating]=useState("");
  const [reviews,setReviews]=useState([]);

  const addReview=()=>{

    const newReview={
      text:review,
      rating:rating
    };

    setReviews([...reviews,newReview]);
    setReview("");
    setRating("");
  };

  return(
    <div>
      <h2>User Reviews</h2>

      <textarea
        placeholder="Write Review"
        value={review}
        onChange={(e)=>setReview(e.target.value)}
      />

      <br/><br/>

      <select
        value={rating}
        onChange={(e)=>setRating(e.target.value)}
      >
        <option value="">Select Rating</option>
        <option>5 ⭐</option>
        <option>4 ⭐</option>
        <option>3 ⭐</option>
      </select>

      <br/><br/>

      <button
        onClick={addReview}
        disabled={!review || !rating}
      >
        Submit Review
      </button>

      <ul>
        {reviews.map((r,index)=>(
          <li key={index}>
            {r.text} - {r.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;