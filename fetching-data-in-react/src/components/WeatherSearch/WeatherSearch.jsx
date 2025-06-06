// src/components/WeatherSearch/WeatherSearch.jsx

import { useState } from 'react';

const WeatherSearch = ({fetchData,setSearched}) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(true)
    fetchData(city); // Don't forget to pass city state!
    setCity('');
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city: </label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
