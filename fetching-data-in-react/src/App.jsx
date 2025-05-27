// src/App.jsx
import { useState } from 'react';
import * as weatherService from './services/weatherService'

const App = () => {
  // const [temp,setTemp] = useState('???')
  // const [feelsLike,setFeelsLike] = useState('???')
  const [data,setData] = useState({})

  const handleClick = async () => {
    const dataset = await weatherService.show('Singapore');
    console.log('Data:', dataset);
    setData(dataset)
  //   setTemp(data.current.temp_c)
  //   setFeelsLike(data.current.feelslike_c)
  };

  return (
    <>
    <h1>Weather Temperature in Singapore is {data?.current?.temp_c} degrees Celcius, but feels like {data?.current?.feelslike_c} degrees Celcius.</h1>
    <button onClick={handleClick}>Check</button>
    </>
  );
};

export default App;
