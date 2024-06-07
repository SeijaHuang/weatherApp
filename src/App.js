import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import WeatherCard from "./components/WeatherCard/";
import { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchWeatherData = async () => {
      const key = "f45f20e1d4e1403492362048240206";
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?q=${"sydney"}&days=5&key=${key}`,
        );
        if (!response.ok) {
          throw new Error("Data get failed");
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div></div>;
  }

  console.log(weatherData);

  return (
    <main className="flex h-screen w-svw items-center justify-center">
      <BackgroundImage></BackgroundImage>
      <WeatherCard weatherData={weatherData}></WeatherCard>
    </main>
  );
}

export default App;
