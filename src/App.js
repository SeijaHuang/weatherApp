import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import WeatherCard from "./components/WeatherCard/";
import { useState, useEffect } from "react";
import FetchWeatherData from "./components/FetchWeatherData";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [historyData, setHistoryData] = useState([]);

  // const fetchWeatherData = async (city = "sydney") => {
  //   const key = "f45f20e1d4e1403492362048240206";
  //   axios
  //     .get(
  //       `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=5&key=${key}&aqi=yes`,
  //     )
  //     .then(function (response) {
  //       setWeatherData(response.data);
  //       if (!loading) historyDataHandler(response.data);
  //       setLoading(false);
  //     })
  //     .catch(function (e) {
  //       console.log(e);
  //     });
  // };

  // const historyDataHandler = (history) => {
  //   if (historyData.length >= 4) {
  //     historyData.shift();
  //     setHistoryData([
  //       ...historyData,
  //       {
  //         location: history.location,
  //         current: history.forecast.forecastday[0],
  //       },
  //     ]);
  //   }
  //   setHistoryData([
  //     ...historyData,
  //     {
  //       location: history.location,
  //       current: history.forecast.forecastday[0],
  //     },
  //   ]);
  // };

  // useEffect(() => {
  //   <FetchWeatherData
  //     city={""}
  //     loading={loading}
  //     onSetLoading={onSetLoading}
  //     historyDataHandler={historyDataHandler}
  //     onSetWeatherData={onSetWeatherData}
  //   />;
  // }, []);

  // useEffect(() => {
  //   <FetchWeatherData
  //     loading={loading}
  //     city={city}
  //     onSetLoading={onSetLoading}
  //     historyDataHandler={historyDataHandler}
  //     onSetWeatherData={onSetWeatherData}
  //   />;
  // }, [city]);

  const onSetCity = (city) => setCity(city);
  const onSetLoading = (loading) => setLoading(loading);
  const onSetWeatherData = (data) => setWeatherData(data);

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
