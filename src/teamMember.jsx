import React from "react";

const TeamMember = ({ data }) => {
  return (
    <>
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img
            src={data.img}
            alt={data.name}
            className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-md text-[#101F41] font-bold mb-1 flex items-center justify-center">
            {data.name}
            <a href="#" className="ml-2">
              <img src={data.logo} alt="Business Profile" className="w-5 h-5" />
            </a>
          </h3>
          <h4 className="text-[14px] font-semibold text-[#101F41] mb-4">
            {data.designation}
          </h4>
          <p className="text-[#727683] text-[14px] leading-relaxed">
            {data.about}
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
