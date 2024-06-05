const getWeatherData = (cityName) => {
  const key = "f45f20e1d4e1403492362048240206";
  fetch(
    `http:///api.weatherapi.com/v1/current.json?q=${cityName}&key=${key}`,
  ).then((res) => res.json());
};

getWeatherData("sydney");

export default getWeatherData;
