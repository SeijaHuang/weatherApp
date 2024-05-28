import React from "react";
import Date from "./Date";
import Name from "./Name";
import Temperature from "./Temperature";
import TemperatureRange from "./TemperatureRange";
import WeatherIcon from "./WeatherIcon";
import Meta from "./Meta";
import CloudImage from "./background/Cloudy_day_background.png";
const CurrentCity = () => {
  return (
    <div className=" container flex h-[100%] w-[100%] flex-col items-center justify-between rounded-[2rem] bg-gradient-to-b from-[#81abfc] to-[#3d7ff9]  p-[1.5rem]">
      <img src={CloudImage} className="absolute right-0 top-0 object-cover" />
      <Date></Date>
      <Name></Name>
      <div className="text-center">
        <Temperature></Temperature>
        <TemperatureRange></TemperatureRange>
      </div>
      <WeatherIcon></WeatherIcon>
      <Meta></Meta>
    </div>
  );
};

export default CurrentCity;
