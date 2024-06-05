import React from "react";
import CloudyDay from "./assets/weather_icon/Cloudy_day.png";
import Cloudy from "./assets/weather_icon/Cloudy.png";
import Hail from "./assets/weather_icon/Hail.png";
import Rain from "./assets/weather_icon/Rain.png";
import Snow from "./assets/weather_icon/Snow.png";
import Sunny from "./assets/weather_icon/Sunny.png";
const weatherIcon = {
  CloudyDay: CloudyDay,
  Cloudy: Cloudy,
  Hail: Hail,
  Rain: Rain,
  Snow: Snow,
  Sunny: Sunny,
};
const WeatherIcon = (props) => {
  const { weatherCondition, className } = props;
  return (
    <img className={className} src={weatherIcon[weatherCondition]} alt="" />
  );
};

export default WeatherIcon;
