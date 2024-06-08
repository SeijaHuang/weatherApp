import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import WeatherCard from "./components/WeatherCard/";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const key = "f45f20e1d4e1403492362048240206";
      axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?q=${"sydney"}&days=5&key=${key}&aqi=yes`,
        )
        .then(function (response) {
          setWeatherData(response.data);
          setLoading(false);
        })
        .catch(function (e) {
          console.log(e);
        });
    };

    fetchWeatherData();
  }, []);

  const onSetCity = (city) => {
    setCity(city);
  };

  if (loading) {
    return <div>loading...</div>;
  }

  console.log(weatherData);

  return (
    <main className="flex h-screen w-svw items-center justify-center">
      <BackgroundImage></BackgroundImage>
      <WeatherCard
        weatherData={weatherData}
        onSetCity={onSetCity}
      ></WeatherCard>
    </main>
  );
}

export default App;
