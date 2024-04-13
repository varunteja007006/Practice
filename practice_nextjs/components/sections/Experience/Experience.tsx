import React from "react";
import experienceData from "../../../data/experienceData";
import CustomHeading from "@/components/ui/custom/CustomHeading";
import { formatDistance, format } from "date-fns";

function Experience() {
  return (
    <section>
      <CustomHeading>Experience</CustomHeading>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 pb-3">
        {experienceData.map((item, index) => {
          return (
            item.toShow && (
              <li className="border-[1px] border-white p-5 flex flex-col justify-start gap-3">
                <p className="text-base">
                  {item.jobTitle} -{" "}
                  <span className="text-sm">
                    {item.company} (
                    {formatDistance(
                      new Date(item.dateOfJoining),
                      item.current ? new Date() : new Date(item.dateOfResigning)
                    )}{" "}
                    Experience)
                  </span>
                </p>
                <p className="text-xs">
                  {item.workingFrom} -{" "}
                  {`${
                    item.current
                      ? format(new Date(), "LLL yyyy")
                      : item.workingTill
                  }`}
                </p>
                <p className="text-sm ">
                  {typeof item.jobDescription === "string" &&
                    item.jobDescription}
                </p>
                {Array.isArray(item.jobDescription) && (
                  <ul>
                    {item.jobDescription.map((jobItem, index) => {
                      return (
                        <li
                          key={index}
                          className="text-sm mb-2  flex items-center justify-start gap-2"
                        >
                          {`-> ${jobItem}`}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
}

export default Experience;
