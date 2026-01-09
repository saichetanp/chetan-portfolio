import { ThemeProvider } from "@/components/portfolio/ThemeContext";
import ThemeSettings from "@/components/portfolio/ThemeSettings";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="bg-[#0a0a0f] text-white overflow-x-hidden">
        {/* Floating theme switcher */}
        <ThemeSettings />

        {/* Sections */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </ThemeProvider>
  );
}