// src/App.jsx
import { useState } from 'react';
import * as weatherService from './services/weatherService'

const App = () => {
  const [temp,setTemp] = useState('???')
  const [feelsLike,setFeelsLike] = useState('???')

  const handleClick = async () => {
    const data = await weatherService.show('Singapore');
    console.log('Data:', data);
    setTemp(data.current.temp_c)
    setFeelsLike(data.current.feelslike_c)
  };

  return (
    <>
    <h1>Weather Temperature in Singapore is {temp} degrees Celcius, but feels like {feelsLike} degrees Celcius.</h1>
    <button onClick={handleClick}>Check</button>
    </>
  );
};

export default App;
