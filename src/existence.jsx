import React from "react";
import { existenceData } from "./data/data";
import Arrow from "./arrow";

const Existence = () => {
  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Existence</h2>
      <div className="grid grid-cols-[0.4fr,1fr] items-center justify-around space-y-8 md:space-y-0 md:space-x-8 content-start">
        <div className="flex-1">
          <div className="space-y-4 flex flex-col gap-10">
            {existenceData.rating.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="border-l-4 border-[#0F5AA9] pl-4">
                  <h4 className="text-4xl font-semibold">{item.title}</h4>
                  {item.subtitle && (
                    <div
                      className={`${
                        index === 0 ? "text-yellow-500" : "text-gray-600"
                      } flex items-center`}
                    >
                      {item.subtitle}
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
