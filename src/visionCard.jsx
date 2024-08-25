import React from "react";
import Wrapper from "./wrapper";

const VisionCard = ({ img, heading, span1, span2, span3, id }) => {
  return (
    <div className="pt-10 px-6 sm:px-0" id={id}>
      <Wrapper>
        <h2 className="md:text-4xl text-2xl font-bold">{heading}</h2>
        <div className="sm:flex sm:items-start sm:justify-center py-10 gap-5">
          <img
            src={img}
            alt="img"
            style={{
              minWidth: "350px",
            }}
          />
          <div className="flex my-8 flex-col text-[18px]">
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
