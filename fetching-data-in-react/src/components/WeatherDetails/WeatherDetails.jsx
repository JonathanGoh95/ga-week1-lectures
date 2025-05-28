// src/components/WeatherDetails/WeatherDetails.jsx

const WeatherDetails = ({weather,searched}) => {
  console.log('WeatherDetails props:', weather);
  return (
    searched && (
    <section>
      <h2>Weather Details</h2>
      <p>Location: {weather.location}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
    </section>)
  );
};

export default WeatherDetails;
