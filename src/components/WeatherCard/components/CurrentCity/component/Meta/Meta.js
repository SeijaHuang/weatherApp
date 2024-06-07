import React from "react";
import humidity from "./assets/meta_icon/humidity.svg";
import windSpeed from "./assets/meta_icon/wind_speed.svg";
import pm from "./assets/meta_icon/PM2.5.svg";
import feelsLike from "./assets/meta_icon/Somatosensory_temperature.svg";
const Meta = ({ humidityData, wind, feelsLikeData }) => {
  const metaInfo = [
    {
      weatherData: `${humidityData}%`,
      url: humidity,
    },
    {
      weatherData: `${wind}km/h`,
      url: windSpeed,
    },
    {
      weatherData: "75µg",
      url: pm,
    },
    {
      weatherData: `${feelsLikeData}°`,
      url: feelsLike,
    },
  ];

  return (
    <div className="container flex  h-[7rem] w-[100%] items-center justify-between rounded-[1rem] bg-[#ebf2fe] p-[2rem]">
      {metaInfo.map((info) => {
        return (
          <div key={info.weatherData} className="flex flex-col items-center">
            <img
              className="mb-[0.5rem] h-[2rem] w-[2rem] "
              src={info.url}
              alt=""
            />
            <p>{info.weatherData}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Meta;
