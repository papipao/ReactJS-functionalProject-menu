import React, { Component } from 'react';
import './Index.css';
import Review from './Review';

class Index extends Component {
  render() {
    return (
      <main>
        <section className='container'>
          <div className='title'>
            <h2>our reviews</h2>
            <div className='underline'></div>
          </div>
          <Review />
        </section>
      </main>
    );
  }
}

export default Index;
