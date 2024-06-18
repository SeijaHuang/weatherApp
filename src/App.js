import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import WeatherCard from "./components/WeatherCard/";
import { useState, useEffect } from "react";
import getWeatherData from "./api/getWeatherData";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [historyData, setHistoryData] = useState([]);

  //Functions
  const fetchWeatherData = (city = "sydney") => {
    getWeatherData(city)
      .then((response) => {
        setWeatherData(response.data);
        if (!loading) historyDataHandler(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const historyDataHandler = (history) => {
    if (historyData.length >= 4) {
      historyData.shift();
      setHistoryData([
        ...historyData,
        {
          location: history.location,
          current: history.forecast.forecastday[0],
        },
      ]);
    }
    setHistoryData([
      ...historyData,
      {
        location: history.location,
        current: history.forecast.forecastday[0],
      },
    ]);
  };

  const onSetCity = (city) => setCity(city);

  //First time fetch data
  useEffect(() => {
    fetchWeatherData();
  }, []);

  //After user search a city then to fetch data
  useEffect(() => {
    if (!city) return;
    fetchWeatherData(city);
  }, [city]);

  //When fetching data, show loading page to user
  if (loading) {
    return (
      <div className=" flex h-screen w-svw items-center justify-center text-[5rem] uppercase  text-white">
        <BackgroundImage></BackgroundImage>
        loading...
      </div>
    );
  }

  return (
    <main className="flex h-screen w-svw items-center justify-center">
      <BackgroundImage></BackgroundImage>
      <WeatherCard
        weatherData={weatherData}
        onSetCity={onSetCity}
        historyCity={city}
        historyData={historyData}
      ></WeatherCard>
    </main>
  );
}

export default App;
