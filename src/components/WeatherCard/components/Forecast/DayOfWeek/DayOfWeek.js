import React from "react";
import Name from "./Name";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import TemperatureRange from "./TemperatureRange";
const DayOfWeek = ({ data }) => {
  return (
    <div className="container flex flex-col items-center">
      <Name name={data.name} />
      <Date date={data.date} />
      <WeatherIcon icon={data.iconURL} />
      <TemperatureRange range={data.temperatureRange} />
    </div>
  );
};

export default DayOfWeek;
