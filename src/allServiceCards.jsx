import React, { useState, useEffect } from "react";
import ServiceCards from "./serviceCards";

const AllServiceCards = () => {
  const [serviceCardsData, setServiceCardsData] = useState([]);

  useEffect(() => {
    const fetchServiceCardsData = async () => {
      try {
        const response = await fetch(
          "https://almaazkhan1055.github.io/rabsdata/rabs_data.json"
        );
        const data = await response.json();
        setServiceCardsData(data.serviceCardsData || []);
      } catch (error) {
        console.error("Error fetching service cards data:", error);
      }
    };

    fetchServiceCardsData();
  }, []);

  return (
    <>
      <h2 className="text-center font-bold text-3xl">Services We Offer</h2>
      {serviceCardsData.length > 0 ? (
        serviceCardsData.map((cardData, index) => (
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
        ))
      ) : (
        <p className="text-center">No services available</p>
      )}
    </>
  );
};

export default AllServiceCards;
