import React from "react";
import Date from "./component/Date";
import CityName from "../../../CityName";
import Temperature from "./component/Temperature";
import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../../../WeatherIcon";
import Meta from "./component/Meta";
import CloudImage from "./assets/background/Cloudy_day_background.png";
const CurrentCity = () => {
  return (
    <div className=" container flex h-[100%] w-[100%] flex-col items-center justify-between rounded-[2rem] bg-gradient-to-b from-[#81abfc] to-[#3d7ff9]  p-[1.5rem]">
      <img
        src={CloudImage}
        className="absolute right-0 top-0 object-cover"
        alt=""
      />
      <Date />
      <CityName cityName="Shanghai" className="text-[2rem] text-white" />
      <div className="text-center">
        <Temperature />
        <TemperatureRange
          className="translate-y-[-1.5rem] text-white"
          tempRange="20~23°"
        />
      </div>
      <WeatherIcon className="" weatherCondition="Cloudy" />
      <Meta />
    </div>
  );
};

export default CurrentCity;
