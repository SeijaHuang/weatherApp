import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import DayOfWeek from "./component/DayOfWeek";

const Forecast = (props) => {
  const { forecast } = props;

  const [forecastData, setForecastDate] = useState([]);

  //convert forecast data from API into web required format
  useEffect(() => {
    setForecastDate([]);
    forecast.map((forecast) => {
      const { date, day } = forecast;
      const {
        maxtemp_c: maxTemp,
        mintemp_c: minTemp,
        condition: { text },
      } = day;

      setForecastDate((prevData) => [
        ...prevData,
        {
          name: dayjs(date).format("dddd"),
          date: dayjs(date).format("DD MMMM"),
          icon: text.toLowerCase(),
          tempRange: `${Math.round(minTemp)}~${Math.round(maxTemp)}°`,
        },
      ]);
    });
  }, [forecast]);

  return (
    <div className="container col-span-6 row-span-3 flex items-center justify-between text-[#241e4f]">
      {forecastData.map((data, index) => {
        return <DayOfWeek key={index} data={data}></DayOfWeek>;
      })}
    </div>
  );
};

export default Forecast;
