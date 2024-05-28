import React from "react";
import City from "./City";
import sunny from "./weather_icon/Sunny.png";
import cloudy from "./weather_icon/Cloudy.png";
import cloudyDay from "./weather_icon/Cloudy_day.png";
import snow from "./weather_icon/Snow.png";
import Sydney from "./City/CityImage/Sydney.png";
import Shanghai from "./City/CityImage/Shanghai.png";
import NewYork from "./City/CityImage/Newyork.png";
import London from "./City/CityImage/London.png";
const OtherCities = () => {
  const cities = [
    {
      name: "Sydney",
      tempRange: "28~32°",
      icon: sunny,
      img: Sydney,
      backgroundColor: "bg-gradient-to-l from-[#88adf5] to-[#6495f3]",
    },
    {
      name: "Shanghai",
      tempRange: "20~23°",
      icon: cloudy,
      img: Shanghai,
      backgroundColor: "bg-gradient-to-l from-[#89adf5] to-[#5e91f3]",
    },
    {
      name: "New York",
      tempRange: "18~20°",
      icon: cloudyDay,
      img: NewYork,
      backgroundColor: "bg-gradient-to-l from-[#7e93f4] to-[#5e72e6]",
    },
    {
      name: "London",
      tempRange: "20~23°",
      icon: snow,
      img: London,
      backgroundColor: "bg-gradient-to-l from-[#8786e9] to-[#7369df]",
    },
  ];
  return (
    <div className="contain col-span-6 row-span-2 row-end-7 flex items-end justify-between gap-[2.5rem] pl-[2rem]">
      {cities.map((city) => {
        return <City cityInfo={city} />;
      })}
    </div>
  );
};

export default OtherCities;
