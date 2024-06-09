import axios from "axios";

const fetchWeatherData = async (props) => {
  const {
    city = "sydney",
    loading,
    onSetLoading,
    onSetWeatherData,
    onSetHistoryData,
    historyData,
  } = props;
  const key = "f45f20e1d4e1403492362048240206";

  const historyDataHandler = (history) => {
    if (historyData.length >= 4) {
      historyData.shift();
      onSetHistoryData([
        ...historyData,
        {
          location: history.location,
          current: history.forecast.forecastday[0],
        },
      ]);
    }
    onSetHistoryData([
      ...historyData,
      {
        location: history.location,
        current: history.forecast.forecastday[0],
      },
    ]);
  };

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

export default fetchWeatherData;
