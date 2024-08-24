import React from "react";
import { heroData } from "./data/data";
import Arrow from "./arrow";

const Hero = () => {
  const { heading, subheading, btntext } = heroData[0];

  return (
    <div className="hero bg-hero bg-cover bg-center bg-no-repeat w-full flex pt-10 justify-center text-center text-white px-4">
      <div>
        <span className="text-xl md:text-xl lg:text-2xl font-bold mb-4 p-2 px-6 bg-gradient-to-r from-[rgb(2,50,134)] via-[rgb(18,99,177)] text-center to-[rgb(0,147,221)]">
          {heading}
        </span>
        <div className="text-[2rem] tracking-wider md:text-5xl mb-16 md:px-20 mt-10 font-semibold">
          {subheading}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {btntext.map((text, index) => (
            <button
              key={index}
              className="relative bg-[--bggray] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 gradient-border hover:bg-gradient-to-r hover:from-[#af40ff] hover:via-[#5b42f3] hover:to-[#00ddeb]"
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
