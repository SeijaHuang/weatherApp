import axios from "axios";

const getWeatherData = async (city, latitude, longitude) => {
  console.log(latitude, longitude);
  const key = process.env.REACT_APP_KEY;
  if (city) {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=5&key=${key}&aqi=yes`,
    );
    return response;
  }

  if (!city) {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?q=${latitude},${longitude}&days=5&key=${key}&aqi=yes`,
    );
    return response;
  }
};
export default getWeatherData;
