import React, { useState, useEffect, useCallback } from "react";
import Arrow from "./arrow";
import Star from "./star";
import Aos from "aos";

const Existence = () => {
  const [existenceData, setExistenceData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  Aos.init();

  const updateIndex = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      existenceData && existenceData.rating
        ? (prevIndex + 1) % existenceData.rating.length
        : prevIndex
    );
  }, [existenceData]);

  useEffect(() => {
    fetch("https://almaazkhan1055.github.io/rabsdata/rabs_data.json")
      .then((response) => response.json())
      .then((data) => {
        const { existenceData } = data;
        setExistenceData(existenceData);
      })
      .catch((error) => {
        console.error("Error fetching existence data:", error);
      });
  }, []);

  useEffect(() => {
    if (existenceData && existenceData.rating) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % existenceData.rating.length
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [existenceData, updateIndex]);

  if (!existenceData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto px-4 py-8" id="overview">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Existence</h2>

      <div className="lg:grid lg:grid-cols-[0.4fr,1fr] grid grid-cols-1 items-center justify-around space-y-8 md:space-y-0 md:space-x-8 content-start">
        <div className="flex-1">
          <div className="space-y-4 md:flex md:flex-col md:items-start gap-10 flex items-center justify-center">
            {existenceData.rating.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index === currentIndex ? "block" : "hidden"
                } md:block ${
                  index === currentIndex ? "animate-slideInFromRight" : ""
                }`}
              >
                <div
                  data-aos="fade-up"
                  className="pl-4 border-l-0 md:border-l-4 border-[#0F5AA9] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center"
                >
                  <h4 className="text-4xl font-semibold">{item.title}</h4>
                  {item.subtitle && (
                    <div
                      className={`${
                        index === 0 ? "text-yellow-500" : "text-gray-600"
                      } flex items-center`}
                    >
                      {index === 0 ? <Star /> : item.subtitle}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/India_United_Arab_Emirates_Locator-new.gif"
            alt="map"
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">{existenceData.heading}</h3>
        <p className="text-gray-500 text-[16px] text-left">
          {existenceData.desc}
        </p>
      </div>
      <Arrow mt="64px" />
    </div>
  );
};

export default Existence;
