import React from "react";
import industrySkillsData from "../../../data/industrySkillsData";
import SkillCard from "./components/SkillCard";
import CustomSubHeading from "@/components/ui/custom/CustomSubHeading";

function IndustrySkills() {
  return (
    <>
      <CustomSubHeading>Industry Skills</CustomSubHeading>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6 pb-3">
        {industrySkillsData.map((item, index) => {
          return (
            item.toShow && (
              <SkillCard key={index} name={item.name} Icon={item.icon} />
            )
          );
        })}
      </ul>
    </>
  );
}

export default IndustrySkills;
