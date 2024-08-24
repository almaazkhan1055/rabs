import React from "react";
import ServiceCards from "./serviceCards";
import { serviceCardsData } from "./data/data";

const AllServiceCards = () => {
  return (
    <>
      <h2 className="text-center font-bold text-3xl">Services We Offer</h2>
      {serviceCardsData.map((cardData, index) => (
        <ServiceCards
          key={index}
          text1={cardData.text1}
          img1={cardData.img1}
          text2={cardData.text2}
          img2={cardData.img2}
          rotate={cardData.rotate}
          bgcolor1={cardData.bgcolor1}
          bgcolor2={cardData.bgcolor2}
        />
      ))}
    </>
  );
};

export default AllServiceCards;
