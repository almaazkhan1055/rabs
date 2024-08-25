import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceCards = ({
  text1,
  text2,
  img1,
  img2,
  rotate,
  bgcolor1,
  bgcolor2,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex items-center justify-center gap-4 my-10 lg:px-0 px-2 box">
      <div
        data-aos="fade-left"
        className={`textCard flex justify-center items-center lg:w-[49%] w-full gap-5 border-2 border-[#575757] rounded-[20px] py-[40px] px-[48px] bg-custom-gradient`}
      >
        <img src={img1} width={80} alt="img" className={rotate} />
        <div className="flex flex-col items-start">
          <span className="text-[16px] font-bold  md:hidden block">
            {text2}
          </span>
          <div className={`sm:text-[18px] text-[12px] text-gray-800 `}>
            {text1}
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="bg-serviceCard hidden lg:block w-[49%] bg-cover bg-center font-bold -translate-x-1/2"
        style={{
          backgroundImage: `url(${img2})`,
        }}
      >
        <span className=" text-[24px] font-bold">{text2}</span>
      </div>
    </div>
  );
};

export default ServiceCards;
