import Image from "next/image";
import dynamic from "next/dynamic";
import { TfiDownload } from "react-icons/tfi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Projects from "@/components/sections/projects/Projects";

const Experience = dynamic(
  () => import("@/components/sections/Experience/Experience")
);
const Skills = dynamic(() => import("@/components/sections/skills/Skills"));
const Academics = dynamic(
  () => import("@/components/sections/Academics/Academics")
);
const Certification = dynamic(
  () => import("@/components/sections/certifications/Certification")
);
const FooterMain = dynamic(() => import("@/components/footer/FooterMain"));

export default function Home() {
  
  return (
    <>
      <div className="w-full min-h-[70vh] flex flex-col gap-5 md:px-4 lg:px-16 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <div></div>
          <div className="flex flex-col items-center justify-center">
            <p className="mb-2">
              I am a passionate developer who loves to work with different tech
              stacks, on both front-end and back-end. I have hands-on experience
              with various programming languages and frameworks. My core skills
              are JavaScript, React JS, Node JS, MongoDB, HTML, CSS. Also
              familiar with Bootstrap CSS, Tailwind CSS, Django, Python, MySQL,
              PHP. I use variety of other tools that can maximize productivity
              and optimize product delivery, for example GIT, VS Code,Postman,
              Tortoise SVN, SonarQube and Jenkins.
            </p>
            <p className="mb-2">
              I love developing web apps and python scripting for automation of
              day-to-day tasks. I am always eager to explore new technologies
              and I keep myself relevant.
            </p>
            <p className="mb-2">
              Currently, I work as System Engineer for HCM platform development,
              developing react based custom responsive interfaces tailored to
              meet client requirements. I have successfully developed dynamic
              dashboards and data panels. I am keen to expand my domain in other
              fields of technology. Therefore I am open to opportunities.
            </p>
            <div className="w-full inline-flex items-center justify-end">
              <p className="mb-3">- Varun Teja. K</p>
            </div>
            <Button variant="outline" className="text-black hover:bg-slate-100">
              <TfiDownload className="me-2" />
              <Link
                href={"./Resume_VarunK.pdf"}
                target="_blank"
                download="resume_VARUN"
              >
                Download now
              </Link>
            </Button>
          </div>
        </div>
        <Projects />
        <Experience />
        <Academics />
        <Certification />
        <Skills />
      </div>
      <FooterMain />
    </>
  );
}
