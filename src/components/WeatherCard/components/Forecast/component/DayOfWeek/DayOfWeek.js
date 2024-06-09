import React from "react";
import CityName from "../../../../../CityName";
import Date from "../../../../../Date";
import WeatherIcon from "../../../../../WeatherIcon";
import TemperatureRange from "../../../../../TemperatureRange";
const DayOfWeek = ({ data }) => {
  return (
    <div className="container flex max-w-[15rem] flex-col items-center">
      <CityName cityName={data.name} className="text-[1.7rem] font-[500]" />
      <Date date={data.date} />
      <WeatherIcon className="" weatherCondition={data.icon} />
      <TemperatureRange tempRange={data.tempRange} />
    </div>
  );
};

export default DayOfWeek;
