import CustomHeading from "@/components/ui/custom/CustomHeading";
import React from "react";
import projectData from "../../../data/projectData";
import ProjectCard, { TProjectCardProps } from "./ProjectCard";

function Projects() {
  return (
    <section>
      <CustomHeading>Projects</CustomHeading>
      <div className="flex flex-row flex-wrap gap-2">
        {projectData.map((item) => {
          const data: TProjectCardProps = {
            title: item.project_title,
            subtitle: item.project_subtitle,
            badges: item.project_badges,
            description: item.project_description,
            github: item.project_github,
            link: item.project_link,
            images: item.project_images,
          };
          return item.toShow && <ProjectCard key={item.id} data={data} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
