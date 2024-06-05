import React, { useState } from "react";
import DayOfWeek from "./component/DayOfWeek";

const Forecast = () => {
  const [forecastData] = useState([
    {
      name: "Monday",
      date: "24 July",
      icon: "Rain",
      temperatureRange: "20~25°",
    },
    {
      name: "Tuesday",
      date: "25 July",
      icon: "CloudyDay",
      temperatureRange: "18~20°",
    },
    {
      name: "Wednesday",
      date: "26 July",
      icon: "Cloudy",
      temperatureRange: "20~23°",
    },
    {
      name: "Thursday",
      date: "27 July",
      icon: "Sunny",
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
