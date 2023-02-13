import React, { Component } from 'react';
import data from './data';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.prevPerson = this.prevPerson.bind(this);
    this.nextPerson = this.nextPerson.bind(this);
    this.randomPerson = this.randomPerson.bind(this);
    this.checkNumber = this.checkNumber.bind(this);
  }

  checkNumber(number) {
    if (number > data.length - 1) {
      return 0;
    }

    if (number < 0) {
      return data.length - 1;
    }
    return number;
  }

  nextPerson() {
    this.setState((state) => {
      return { index: this.checkNumber(state.index + 1) };
    });
  }

  prevPerson() {
    this.setState((state) => {
      return { index: this.checkNumber(state.index - 1) };
    });
  }

  randomPerson() {
    let randNum = Math.floor(Math.random() * data.length);
    if (randNum === this.state.index) {
      randNum = this.state.index + 1;
    }
    this.setState({
      index: this.checkNumber(randNum),
    });
  }

  render() {
    console.log(this.state.index);
    const { name, job, image, text } = data[this.state.index];
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
        <div className='button-container'>
          <button className='prev-btn' onClick={this.prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={this.nextPerson}>
            <FaChevronRight />
          </button>
          <button className='random-btn' onClick={this.randomPerson}>
            surprise me
          </button>
        </div>
      </article>
    );
  }
}

export default Review;
