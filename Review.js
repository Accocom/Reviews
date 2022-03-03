import React, { useState } from "react";
import reviews from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaInfo,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];
  console.log(index, reviews[index]);

  const handleClick = () => {
    let num = Math.floor(Math.random() * reviews.length);
    console.log(num);
    setIndex(num);
  };

  const prevIndex = () => {
    if (index <= 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextIndex = () => {
    if (index < reviews.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevIndex}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleClick}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
