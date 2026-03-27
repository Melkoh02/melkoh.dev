import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import BentoGrid from "../components/organisms/BentoGrid";
import ExperienceSection from "../components/organisms/ExperienceSection";
import AboutSection from "../components/organisms/AboutSection";
import ContactSection from "../components/organisms/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <HeroSection />
        <BentoGrid />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
