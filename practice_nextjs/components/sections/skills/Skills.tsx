import React from "react";
import TechnicalSkills from "./TechnicalSkills";
import IndustrySkills from "./IndustrySkills";
import CustomHeading from "@/components/ui/custom/CustomHeading";

function Skills() {
  return (
    <section className="w-full">
      <CustomHeading>Skills</CustomHeading>
      <TechnicalSkills />
      <IndustrySkills />
    </section>
  );
}

export default Skills;
