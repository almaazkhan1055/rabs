import React, { useState, useEffect } from "react";

const Marquee = () => {
  const [marqueeData, setMarqueeData] = useState(null);

  useEffect(() => {
    const fetchMarqueeData = async () => {
      try {
        const response = await fetch(
          "https://almaazkhan1055.github.io/rabsdata/rabs_data.json"
        );
        const data = await response.json();

        const marqueeDataItem = data.marqueeData;
        if (marqueeDataItem) {
          setMarqueeData(marqueeDataItem);
        }
      } catch (error) {
        console.error("Error fetching marquee data:", error);
      }
    };

    fetchMarqueeData();
  }, []);

  if (!marqueeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="marquee-container flex items-center justify-center font-bold overflow-hidden">
      <div className="marquee-text flex items-center justify-center gap-10 animate-marquee">
        <img src={marqueeData.img} alt="Marquee Image" className="h-24 w-24" />
        <span>{marqueeData.text[0]}</span>
        <img src={marqueeData.img} alt="Marquee Image" className="h-24 w-24" />
        <span>{marqueeData.text[1]}</span>
      </div>
    </div>
  );
};

export default Marquee;
