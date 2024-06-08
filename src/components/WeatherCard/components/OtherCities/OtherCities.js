import React from "react";
import City from "./component/City";
import Sydney from "./component/City/assets/CityImage/Sydney.png";
import Shanghai from "./component/City/assets/CityImage/Shanghai.png";
import NewYork from "./component/City/assets/CityImage/Newyork.png";
import London from "./component/City/assets/CityImage/London.png";
const OtherCities = (props) => {
  const { historyData } = props;
  const backgroundColor = [
    "bg-gradient-to-l from-[#88adf5] to-[#6495f3]",
    "bg-gradient-to-l from-[#89adf5] to-[#5e91f3]",
    "bg-gradient-to-l from-[#7e93f4] to-[#5e72e6]",
    "bg-gradient-to-l from-[#8786e9] to-[#7369df]",
  ];
  const citiesImg = [Sydney, Shanghai, NewYork, London];
  let cities = [];

  historyData.map((history, index) => {
    const {
      location: { name },
      current: {
        day: {
          maxtemp_c: maxTemp,
          mintemp_c: minTemp,
          condition: { text },
        },
      },
    } = history;

    cities = [
      ...cities,
      {
        name: name,
        tempRange: `${minTemp}~${maxTemp}°`,
        icon: text.toLowerCase(),
        backgroundColor: backgroundColor[index],
        img: citiesImg[index],
      },
    ];

    return cities;
  });
  console.log(cities);

  return (
    <div className="contain col-span-6 row-span-2 row-end-7 flex items-end justify-between gap-[2.5rem] pl-[2rem]">
      {cities.map((city) => {
        return <City key={city.name} cityInfo={city} />;
      })}
    </div>
  );
};

export default OtherCities;
