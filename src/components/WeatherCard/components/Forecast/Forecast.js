import React, { useState } from "react";
import DayOfWeek from "./DayOfWeek";
import cloudyDay from "./DayOfWeek/weather_icon/Cloudy_day.png";
import cloudy from "./DayOfWeek/weather_icon/Cloudy.png";
import rain from "./DayOfWeek/weather_icon/Rain.png";
import sunny from "./DayOfWeek/weather_icon/Sunny.png";
const Forecast = () => {
  const [forecastData] = useState([
    {
      name: "Monday",
      date: "24 July",
      iconURL: rain,
      temperatureRange: "20~25°",
    },
    {
      name: "Tuesday",
      date: "25 July",
      iconURL: cloudyDay,
      temperatureRange: "18~20°",
    },
    {
      name: "Wednesday",
      date: "26 July",
      iconURL: cloudy,
      temperatureRange: "20~23°",
    },
    {
      name: "Thursday",
      date: "27 July",
      iconURL: sunny,
      temperatureRange: "28~32°",
    },
  ]);
  return (
    <div className="container col-span-6 row-span-3 flex items-center justify-evenly text-[#241e4f]">
      {forecastData.map((data, index) => {
        return <DayOfWeek key={index} data={data}></DayOfWeek>;
      })}
    </div>
  );
};

export default Forecast;
