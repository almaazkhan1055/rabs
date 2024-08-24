import React from "react";

const ServiceCards = ({
  text1,
  text2,
  img1,
  img2,
  rotate,
  bgcolor1,
  bgcolor2,
}) => {
  return (
    <div className="flex items-center justify-center gap-4 my-10 lg:px-0 px-2">
      <div
        className={`textCard flex justify-center items-start lg:w-[49%] w-full gap-5 border-2 border-[#575757] rounded-[20px] py-[40px] px-[48px] bg-custom-gradient`}
      >
        <img src={img1} width={80} alt="img" className={rotate} />
        <div className={`text-[14px] text-gray-800`}>{text1}</div>
      </div>
      <div
        className="bg-serviceCard hidden lg:block w-[49%] bg-cover bg-center font-bold"
        style={{
          backgroundImage: `url(${img2})`,
        }}
      >
        <span className="text-center text-lg">{text2}</span>
      </div>
    </div>
  );
};

export default ServiceCards;
