import React from "react";
import Wrapper from "./wrapper";

const Achievements = () => {
  return (
    <div className="achievements py-[90px] z-20 px-5 sm:px-0">
      <h2 className="text-3xl text-center mb-10">
        Our
        <span className="font-bold"> Achievements</span>
      </h2>
      <Wrapper>
        <div>
          <img
            src="https://www.rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/hero2.jpg"
            alt=""
          />
        </div>
        <h4 className="achievements-text text-[25px] text-center mt-5 font-semibold">
          ("Receive awards from the Honorable Chief Minister of Goa and the
          Governor of Sikkim")
        </h4>
      </Wrapper>
    </div>
  );
};

export default Achievements;
