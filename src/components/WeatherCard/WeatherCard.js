import React from "react";
import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import OtherCities from "./components/OtherCities/OtherCities";

const WeatherCard = (props) => {
  const {
    weatherData: {
      current,
      location: { name },
      forecast: { forecastday },
      onSetCity,
    },
  } = props;
  const [currentCity, ...forecastdays] = forecastday;

  return (
    <div className="container box-border grid h-4/5 w-4/5 grid-cols-8 grid-rows-6 rounded-[4rem] bg-[#f2f4fd] py-8 pl-8">
      <div className="container relative col-span-2 row-span-6 flex h-[100%] w-[100%] flex-col items-center justify-between">
        <CurrentCity
          currentDetailed={currentCity}
          cityName={name}
          currentData={current}
        />
      </div>
      <div className="container col-span-6 col-start-3 row-span-6 grid grid-cols-5 grid-rows-6 px-[2rem]">
        <Forecast forecast={forecastdays} />
        <SearchBar onSetCity={onSetCity} />
        <OtherCities />
      </div>
    </div>
  );
};

export default WeatherCard;
