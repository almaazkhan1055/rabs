import React, { useState, useEffect } from "react";
import Arrow from "./arrow";
import "./index.css";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://almaazkhan1055.github.io/rabsdata/rabs_data.json"
        );
        const data = await response.json();
        const heroDataItem = data.heroData[0];
        if (heroDataItem) {
          setHeroData(heroDataItem);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="skeleton-loader">
        <div className="skeleton-heading"></div>
        <div className="skeleton-subheading"></div>
        <div className="skeleton-buttons">
          <div className="skeleton-button"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    );
  }

  if (!heroData) {
    return <div>Error loading data</div>;
  }

  const { heading, subheading, btntext } = heroData;

  return (
    <div
      className="hero bg-hero bg-cover bg-center bg-no-repeat w-full flex pt-10 justify-center text-center text-white px-4 sm:mt-[70px]"
      id="home"
    >
      <div className="pt-10">
        <span className="text-xl md:text-xl lg:text-2xl font-bold mb-4 p-2 px-6 bg-gradient-to-r from-[rgb(2,50,134)] via-[rgb(18,99,177)] text-center to-[rgb(0,147,221)]">
          {heading}
        </span>
        <div className="text-[2rem] tracking-wider md:text-6xl mb-16 md:px-20 mt-10 font-semibold">
          {subheading}
        </div>
        <div className="flex flex-wrap gap-4 justify-center max-sm:flex-col max-sm:px-8 max-sm:py-2">
          {btntext.map((text, index) => (
            <button
              key={index}
              className="relative bg-[--bggray] text-white font-semibold rounded-lg max-sm:p-6 transition duration-300 gradient-border hover:bg-gradient-to-r hover:from-[#af40ff] hover:via-[#5b42f3] hover:to-[#00ddeb] py-4 px-6"
            >
              <span className="relative z-10">{text}</span>
            </button>
          ))}
        </div>
        <Arrow mt="64px" />
      </div>
    </div>
  );
};

export default Hero;
