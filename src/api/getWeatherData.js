import axios from "axios";

const getWeatherData = async (city) => {
  const key = process.env.REACT_APP_KEY;
  const response = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=5&key=${key}&aqi=yes`,
  );
  return response;
};

export default getWeatherData;
