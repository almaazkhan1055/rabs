import React from "react";
import { teamMemberData } from "./data/data";
import Arrow from "./arrow";
import TeamMember from "./teamMember";

const TeamSection = () => {
  return (
    <>
      <div className="md:p-12 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            {teamMemberData.map((member, index) => (
              <TeamMember key={index} data={member} />
            ))}
          </div>
        </div>
      </div>
      <Arrow />
    </>
  );
};

export default TeamSection;
