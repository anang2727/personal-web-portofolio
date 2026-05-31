import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import BackgroundEffects from "./components/BackgroundEffects";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FloatingActionButton from "./components/FloatingActionButton";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#1F2937] overflow-x-hidden">
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Background Effects */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}