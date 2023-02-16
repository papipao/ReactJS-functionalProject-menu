import React from 'react';
import ToursProvider from './ToursProvider';
import './Index.css';
import Tours from './Tours';

function Index() {
  return (
    <main>
      <ToursProvider>
        <Tours />
      </ToursProvider>
    </main>
  );
}

export default Index;
