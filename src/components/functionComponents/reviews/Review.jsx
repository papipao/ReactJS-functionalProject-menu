import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';

import data from './data';

function Review() {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = data[index];

  const checkNum = (num) => {
    if (num > data.length - 1) {
      return 0;
    }

    if (num < 0) {
      return data.length - 1;
    }

    return num;
  };

  const prevButton = () => {
    setIndex((state) => checkNum(state - 1));
  };

  const nextButton = () => {
    setIndex((state) => checkNum(state + 1));
  };

  const randomButton = () => {
    let ranNum = Math.floor(Math.random() * data.length);
    if (ranNum === index) {
      ranNum = index + 1;
    }
    setIndex(checkNum(ranNum));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div>
        <button className='prev-btn' onClick={prevButton}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextButton}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomButton}>
        Surprise Me
      </button>
    </article>
  );
}

export default Review;
