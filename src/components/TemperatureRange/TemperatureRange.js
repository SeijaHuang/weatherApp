import React from "react";

const TemperatureRange = (props) => {
  const { className, tempRange } = props;
  return <div className={className}>{tempRange}</div>;
};

export default TemperatureRange;
