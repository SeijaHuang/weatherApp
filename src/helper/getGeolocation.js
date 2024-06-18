const getGeolocation = () => {
  const success = (pos) => {
    const { latitude, longitude } = pos.coords;
    console.log(latitude, longitude);
  };

  navigator.geolocation.getCurrentPosition(success);
};

export default getGeolocation;
