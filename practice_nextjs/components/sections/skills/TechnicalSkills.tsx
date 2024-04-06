import React, { ElementType, useMemo } from "react";
import technicalSkillsData from "../../../data/technicalSkillsData";
import SkillCard from "./components/SkillCard";
import CustomSubHeading from "@/components/ui/custom/CustomSubHeading";

function TechnicalSkills() {
  const technicalSkillTypes = useMemo(() => {
    return Object.keys(technicalSkillsData) as Array<
      keyof typeof technicalSkillsData
    >;
  }, []);

  return (
    <>
      {technicalSkillTypes.map((item, index) => {
        const {
          label,
          skillList,
        }: {
          label: undefined | string;
          skillList: {
            name: string;
            icon: ElementType;
            toShow: boolean;
          }[];
        } = { ...technicalSkillsData[item] };
        return (
          <div key={index} className="mb-3">
            <CustomSubHeading>{label}</CustomSubHeading>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-6 pb-3">
              {skillList.map((item, index) => {
                return (
                  item.toShow && (
                    <SkillCard key={index} name={item.name} Icon={item.icon} />
                  )
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default TechnicalSkills;
