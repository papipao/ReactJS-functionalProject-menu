import React from 'react';
import Tour from './Tour';
import { useContextTours } from './ToursProvider';

function Tours() {
  const tours = useContextTours();
  return (
    <section>
      <div className='title'>
        <h1>our tours</h1>
        <div className='underline'></div>
      </div>
      <div>
        {tours.tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
