import React from "react";
import CloudyDay from "./assets/weather_icon/Cloudy_day.png";
import Cloudy from "./assets/weather_icon/Cloudy.png";
import Hail from "./assets/weather_icon/Hail.png";
import Rain from "./assets/weather_icon/Rain.png";
import Snow from "./assets/weather_icon/Snow.png";
import Sunny from "./assets/weather_icon/Sunny.png";
const weatherIcon = {
  cloudyday: CloudyDay,
  cloudy: Cloudy,
  hail: Hail,
  rain: Rain,
  snow: Snow,
  sunny: Sunny,
};
console.log(Object.keys(weatherIcon));
const weatherConditionHandler = (condition) => {
  for (let inherentIcon of Object.keys(weatherIcon)) {
    if (condition.includes(inherentIcon)) return inherentIcon;
  }
};

const WeatherIcon = (props) => {
  const { weatherCondition, className } = props;
  const iconName = weatherConditionHandler(weatherCondition);
  return <img className={className} src={weatherIcon[iconName]} alt="" />;
};

export default WeatherIcon;
