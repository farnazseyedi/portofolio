import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { SoftSkillsSection } from "@/components/sections/soft-skills";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <SoftSkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
