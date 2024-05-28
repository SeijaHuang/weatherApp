import React from "react";
const WeatherIcon = ({ icon }) => {
  return (
    <div className="max-h-[3.5rem] max-w-[3.5rem]">
      <img src={icon} alt="icon" />
    </div>
  );
};

export default WeatherIcon;
