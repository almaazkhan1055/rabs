import React from "react";
import Wrapper from "./wrapper";

const VisionCard = ({ img, width, heading, span1, span2, span3 }) => {
  return (
    <div className="py-16 px-6 sm:px-0">
      <Wrapper>
        <h2 className="text-3xl font-bold">{heading}</h2>
        <div className="sm:flex sm:items-start sm:justify-center py-10 gap-5">
          <img
            src={img}
            alt="img"
            style={{
              width: width || "35%",
            }}
          />
          <div className="flex flex-col text-[14px]">
            <span>{span1}</span>
            <br />
            <span>{span2}</span>
            <br />
            <span>{span3}</span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default VisionCard;
