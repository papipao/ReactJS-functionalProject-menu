import React, { useState, useEffect } from 'react';
const url = 'https://course-api.com/react-tours-project';

const ToursContext = React.createContext();

export const useContextTours = () => {
  return React.useContext(ToursContext);
};

function ToursProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <ToursContext.Provider value={{ tours, removeTours, fetchTours, loading }}>
      {children}
    </ToursContext.Provider>
  );
}

export default ToursProvider;
