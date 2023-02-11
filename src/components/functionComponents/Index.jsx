import React from 'react';
import { TourProvider } from '../classComponents/Tours/Context';
import './Index.css';
import Loading from './Loading';
import Tours from './Tours';
import { useContextTours } from './ToursProvider';

function Index() {
  const tours = useContextTours();

  if (tours.loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h1>no tours</h1>
          <button className='btn' onClick={() => tours.fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <TourProvider>
        <Tours />
      </TourProvider>
    </main>
  );
}

export default Index;
