import React, { useState, useEffect } from 'react';
import Loading from './Loading';

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
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setTours(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h1>no tours</h1>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return <ToursContext.Provider value={{ tours, removeTours }}>{children}</ToursContext.Provider>;
}

export default ToursProvider;
