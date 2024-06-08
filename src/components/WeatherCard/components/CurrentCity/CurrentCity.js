import React from "react";
import Date from "../../../Date";
import CityName from "../../../CityName";
import Temperature from "./component/Temperature";
import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../../../WeatherIcon";
import Meta from "./component/Meta";
import CloudyDay from "./assets/background/Cloudy_day_background.png";
import Hail from "./assets/background/Hail_background.png";
import Rain from "./assets/background/Rain_background.png";
import Snow from "./assets/background/Snow_background.png";
import Sunny from "./assets/background/Sunny day_background.png";
import dayjs from "dayjs";

const CurrentCity = (props) => {
  const { currentDetailedData, cityName, currentData } = props;
  //get data from current of API Data
  const {
    air_quality: { pm2_5: pmData },
    humidity,
    temp_c: temp,
    wind_kph: wind,
    feelslike_c: feelsLike,
  } = currentData;

  const {
    day: {
      condition: { text },
      maxtemp_c: maxTemp,
      mintemp_c: minTemp,
    },
  } = currentDetailedData;

  // set a default background image array
  const weatherBackgroundImg = {
    cloudyday: CloudyDay,
    hail: Hail,
    rain: Rain,
    snow: Snow,
    sunny: Sunny,
  };

  //set a function to match condition from API with default background image array
  const weatherBackgroundImgHandler = (condition) => {
    for (let inherentIcon of Object.keys(weatherBackgroundImg)) {
      if (condition.includes(inherentIcon)) return inherentIcon;
    }
  };
  const transformedCondition = text.toLowerCase();
  const imgSrc = weatherBackgroundImgHandler(transformedCondition);
  return (
    <div className=" container flex h-[100%] w-[100%] flex-col items-center justify-between rounded-[2rem] bg-gradient-to-b from-[#81abfc] to-[#3d7ff9]  p-[1.5rem]">
      <img
        src={weatherBackgroundImg[imgSrc]}
        className="absolute right-0 top-0 object-cover"
        alt=""
      />
      <Date
        className="container flex justify-start text-white"
        date={dayjs().format("DD MMMM, dddd HH:mm")}
      />
      <CityName cityName={cityName} className="text-[2rem] text-white" />
      <div className="text-center">
        <Temperature temp={temp} />
        <TemperatureRange
          className="translate-y-[-1.5rem] text-white"
          tempRange={`${minTemp}~${maxTemp}°`}
        />
      </div>
      <WeatherIcon className="" weatherCondition={transformedCondition} />
      <Meta
        humidityData={humidity}
        wind={wind}
        feelsLikeData={feelsLike}
        pmData={pmData}
      />
    </div>
  );
};

export default CurrentCity;
