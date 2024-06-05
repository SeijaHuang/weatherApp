import React from "react";
import City from "./component/City";
import Sydney from "./component/City/assets/CityImage/Sydney.png";
import Shanghai from "./component/City/assets/CityImage/Shanghai.png";
import NewYork from "./component/City/assets/CityImage/Newyork.png";
import London from "./component/City/assets/CityImage/London.png";
const OtherCities = () => {
  const cities = [
    {
      name: "Sydney",
      tempRange: "28~32°",
      icon: "Sunny",
      img: Sydney,
      backgroundColor: "bg-gradient-to-l from-[#88adf5] to-[#6495f3]",
    },
    {
      name: "Shanghai",
      tempRange: "20~23°",
      icon: "Cloudy",
      img: Shanghai,
      backgroundColor: "bg-gradient-to-l from-[#89adf5] to-[#5e91f3]",
    },
    {
      name: "New York",
      tempRange: "18~20°",
      icon: "CloudyDay",
      img: NewYork,
      backgroundColor: "bg-gradient-to-l from-[#7e93f4] to-[#5e72e6]",
    },
    {
      name: "London",
      tempRange: "20~23°",
      icon: "Snow",
      img: London,
      backgroundColor: "bg-gradient-to-l from-[#8786e9] to-[#7369df]",
    },
  ];
  return (
    <div className="contain col-span-6 row-span-2 row-end-7 flex items-end justify-between gap-[2.5rem] pl-[2rem]">
      {cities.map((city) => {
        return <City key={city.name} cityInfo={city} />;
      })}
    </div>
  );
};

export default OtherCities;
