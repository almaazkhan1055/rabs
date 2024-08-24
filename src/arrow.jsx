import React from "react";
import arrow from "./assets/arrow.png";

const Arrow = ({ mt }) => {
  return (
    <div
      className="flex items-center justify-center pb-16"
      style={{
        marginTop: mt ? mt : "",
      }}
    >
      <img src={arrow} alt="" className="animate-bounce-up-down" />
    </div>
  );
};

export default Arrow;
