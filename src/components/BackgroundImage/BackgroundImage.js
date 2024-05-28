import React from "react";
import backgroundImage from "../../assets/background.png";
const BackgroundImage = () => {
  return (
    <div className="bg-could absolute z-[-1] h-full w-full bg-gradient-to-r from-[#8caaf2] to-[#6354de]">
      <img
        className="absolute bottom-0 right-0"
        src={backgroundImage}
        alt="background"
      />
    </div>
  );
};

export default BackgroundImage;
