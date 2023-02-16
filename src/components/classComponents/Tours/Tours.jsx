import React, { Component } from 'react';
import Tour from './Tour';

class Tours extends Component {
  render() {
    const { tours } = this.props;
    return (
      <section>
        <div className='title'>
          <h3>our tours</h3>
          <div className='underline'></div>
        </div>
        <div>
          {tours.map((tour) => (
            <Tour key={tour.id} {...tour} />
          ))}
        </div>
      </section>
    );
  }
}

export default Tours;
