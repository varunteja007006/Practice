import FooterMain from "@/components/footer/FooterMain";
import Image from "next/image";
import dynamic from "next/dynamic";
import Experience from "@/components/sections/Experience/Experience";
const Skills = dynamic(() => import("@/components/sections/skills/Skills"));
const Academics = dynamic(
  () => import("@/components/sections/Academics/Academics")
);
const Certification = dynamic(
  () => import("@/components/sections/certifications/Certification")
);

export default function Home() {
  return (
    <>
      <div className="w-full min-h-[70vh] flex flex-col gap-5 md:px-4 lg:px-16 mb-10">
        My Intro Projects
        <Experience />
        <Academics />
        <Certification />
        <Skills />
      </div>
      <FooterMain />
    </>
  );
}
