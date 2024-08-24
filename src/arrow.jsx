import React from "react";

const Arrow = ({ mt }) => {
  return (
    <div
      className="flex items-center justify-center pb-16"
      style={{
        marginTop: mt ? mt : "",
      }}
    >
      <img
        src="https://rabsnetsolutions.com/experience-center/assets/img/membership/slider/arrow.png"
        alt=""
        className="animate-bounce-up-down"
      />
    </div>
  );
};

export default Arrow;
