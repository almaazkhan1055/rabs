import React, { useState, useEffect, useCallback } from "react";
import ServiceCards from "./serviceCards";

const AllServiceCards = () => {
  const [serviceCardsData, setServiceCardsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchServiceCardsData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://almaazkhan1055.github.io/rabsdata/rabs_data.json"
      );
      const data = await response.json();
      setServiceCardsData(data.serviceCardsData || []);
    } catch (error) {
      console.error("Error fetching service data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServiceCardsData();
  }, [fetchServiceCardsData]);

  if (isLoading) {
    return <p className="text-center">Loading services...</p>;
  }

  return (
    <>
      <h2 className="text-center font-bold text-3xl" id="services">
        Services We Offer
      </h2>
      {serviceCardsData.length > 0 ? (
        serviceCardsData.map((cardData, index) => {
          return (
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
          );
        })
      ) : (
        <p className="text-center">No services available</p>
      )}
    </>
  );
};

export default AllServiceCards;
