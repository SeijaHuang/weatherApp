import React, { useEffect, useState } from "react";
import DayOfWeek from "./component/DayOfWeek";

const Forecast = (props) => {
  const { forecast } = props;

  const [forecastData, setForecastDate] = useState([]);
  useEffect(() => {
    forecast.map((forecast) => {
      const {
        date,
        day: { maxtemp_c: maxTemp, mintemp_c: minTemp },
      } = forecast;
      setForecastDate((prevData) => [
        ...prevData,
        {
          name: "xDay",
          date: date,
          icon: "Rain",
          tempRange: `${minTemp}~${maxTemp}`,
        },
      ]);
    });
  }, [forecast]);
  console.log(forecastData);
  return (
    <div className="container col-span-6 row-span-3 flex items-center justify-between text-[#241e4f]">
      {forecastData.map((data, index) => {
        return <DayOfWeek key={index} data={data}></DayOfWeek>;
      })}
    </div>
  );
};

export default Forecast;
