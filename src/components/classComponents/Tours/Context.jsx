import React from 'react';

const TourContext = React.createContext();

const TourProvider = TourContext.Provider;
const TourConsumer = TourContext.Consumer;

export { TourProvider, TourConsumer };
