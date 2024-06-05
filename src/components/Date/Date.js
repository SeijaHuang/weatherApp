import React from "react";

const Date = (props) => {
  const { className, date } = props;
  return <div className={className}>{date}</div>;
};

export default Date;
