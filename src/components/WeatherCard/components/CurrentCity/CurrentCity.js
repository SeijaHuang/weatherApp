import React from "react";
import Date from "../../../Date";
import CityName from "../../../CityName";
import Temperature from "./component/Temperature";
import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../../../WeatherIcon";
import Meta from "./component/Meta";
import CloudImage from "./assets/background/Cloudy_day_background.png";
import dayjs from "dayjs";

const CurrentCity = (props) => {
  console.log();
  const { cityName, temp, humidity, wind, feelsLike } = props;
  return (
    <div className=" container flex h-[100%] w-[100%] flex-col items-center justify-between rounded-[2rem] bg-gradient-to-b from-[#81abfc] to-[#3d7ff9]  p-[1.5rem]">
      <img
        src={CloudImage}
        className="absolute right-0 top-0 object-cover"
        alt=""
      />
      <Date
        className="container flex justify-start text-white"
        date={dayjs().format("DD MMMM, dddd hh:mm")}
      />
      <CityName cityName={cityName} className="text-[2rem] text-white" />
      <div className="text-center">
        <Temperature temp={temp} />
        <TemperatureRange
          className="translate-y-[-1.5rem] text-white"
          tempRange="20~23°"
        />
      </div>
      <WeatherIcon className="" weatherCondition="Cloudy" />
      <Meta humidityData={humidity} wind={wind} feelsLikeData={feelsLike} />
    </div>
  );
};

export default CurrentCity;
