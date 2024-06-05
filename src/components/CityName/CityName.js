import React from "react";

const CityName = (props) => {
  const { className, cityName } = props;
  return <div className={className}>{cityName}</div>;
};

export default CityName;
