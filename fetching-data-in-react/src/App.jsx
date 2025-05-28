// src/App.jsx
import { useState } from 'react';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import * as weatherService from './services/weatherService'
import './App.css'

const App = () => {
  // const [temp,setTemp] = useState('???')
  // const [feelsLike,setFeelsLike] = useState('???')
  // const [data,setData] = useState({})
  const [weather, setWeather] = useState({});
  const [searched, setSearched] = useState(false)

  // const handleClick = async () => {
  //   const dataset = await weatherService.show('Singapore');
  //   console.log('Data:', dataset);
  //   setData(dataset)
  //   setTemp(data.current.temp_c)
  //   setFeelsLike(data.current.feelslike_c)
  // };

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

  return (
    <>
    <h1>Weather API</h1>
    <WeatherSearch fetchData={fetchData} setSearched={setSearched}/>
    <WeatherDetails weather={weather} searched={searched}/>
    </>
  );
};

export default App;
