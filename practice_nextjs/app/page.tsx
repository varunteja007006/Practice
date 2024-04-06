import FooterMain from "@/components/footer/FooterMain";
import Image from "next/image";
import dynamic from "next/dynamic";
import Skills from "@/components/sections/skills/Skills";
const CertificationSection = dynamic(
  () => import("@/components/sections/certifications/CertificationSection")
);

export default function Home() {
  return (
    <>
      <div className="w-full min-h-[72vh] flex flex-col gap-5 md:px-4 lg:px-16">
        My Intro Experience Academics Projects
        <Skills />
        <CertificationSection />
      </div>
      <FooterMain />
    </>
  );
}
