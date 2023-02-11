import React from 'react';
import './App.css';
import Index from './components/functionComponents/Index';
import ToursProvider from './components/functionComponents/ToursProvider';

function App() {
  return (
    <div className='container'>
      <ToursProvider>
        <Index />
      </ToursProvider>
    </div>
  );
}

export default App;
