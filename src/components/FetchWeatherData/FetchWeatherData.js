import axios from "axios";

const FetchWeatherData = async (props) => {
  const {
    city = "sydney",
    loading,
    onSetLoading,
    historyDataHandler,
    onSetWeatherData,
  } = props;

  const key = "f45f20e1d4e1403492362048240206";
  axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=5&key=${key}&aqi=yes`,
    )
    .then(function (response) {
      onSetWeatherData(response.data);
      if (!loading) historyDataHandler(response.data);
      onSetLoading(false);
    })
    .catch(function (e) {
      console.log(e);
    });
};

export default FetchWeatherData;
