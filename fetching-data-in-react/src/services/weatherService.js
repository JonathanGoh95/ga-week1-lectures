// src/services/weatherService.js
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}`;

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    if (!res.ok) {
      console.log(`Status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { show };
