import { AboutSection } from "@/components/home/AboutSection";
import { CtaSection } from "@/components/home/CtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TemporaryLandingSection } from "@/components/home/TemporaryLandingSection";

export default function Home() {
  const isTemporaryLanding = false;

  return (
    <div>
      {isTemporaryLanding ? (
        <TemporaryLandingSection />
      ) : (
        <>
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <AboutSection />
          <CtaSection />
        </>
      )}
    </div>
  );
}
