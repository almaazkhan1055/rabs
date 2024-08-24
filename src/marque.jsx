import React from "react";
import { marqueeData } from "./data/data";

const Marquee = () => {
  return (
    <div className="marquee-container flex items-center justify-center font-bold">
      <div className="marquee-text flex items-center justify-center gap-10">
        <img src={marqueeData.img} alt="Marquee Image" className="h-24 w-24" />
        <span>{marqueeData.text}</span>
        <img src={marqueeData.img} alt="Marquee Image" className="h-24 w-24" />
        <span>{marqueeData.text}</span>
      </div>
    </div>
  );
};

export default Marquee;
