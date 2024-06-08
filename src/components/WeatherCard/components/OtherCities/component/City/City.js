import React from "react";
import WeatherIcon from "../../../../../WeatherIcon";
import CityName from "../../../../../CityName";
import TemperatureRange from "../../../../../TemperatureRange";

const City = ({ cityInfo }) => {
  return (
    <div
      className={`container relative flex min-h-[9.5rem] max-w-[13rem] flex-col items-center justify-between rounded-[1.5rem] py-[1rem] shadow-xl ${cityInfo.backgroundColor}`}
    >
      <img
        className="absolute left-0 top-0  h-full w-full rounded-[1.5rem] object-cover opacity-[.2]"
        src={cityInfo.img}
        alt="city"
      />
      <WeatherIcon
        className="max-h-[3.5rem] max-w-[3.5rem]"
        weatherCondition={cityInfo.icon}
      />
      <CityName cityName={cityInfo.name} className="text-[1.5rem] text-white" />
      <TemperatureRange className="text-white" tempRange={cityInfo.tempRange} />
    </div>
  );
};

export default City;
