import React from "react";
import TeamMember from "./teammember";
import { teamMemberData } from "./data/data";
import Arrow from "./arrow";

const TeamSection = () => {
  return (
    <>
      <div className="p-12">
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
