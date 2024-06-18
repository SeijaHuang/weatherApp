import axios from "axios";

const getWeatherData = async (city) => {
  const key = "1853b896075e42a5a41110829241806";
  const response = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=5&key=${key}&aqi=yes`,
  );
  return response;
};

export default getWeatherData;
