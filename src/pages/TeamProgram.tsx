import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import DifferentialSection from "@/components/DifferentialSection";
import FoundersSection from "@/components/FoundersSection";
import LocationSection from "@/components/LocationSection";
import ProgramSection from "@/components/ProgramSection";
import ComparisonSection from "@/components/ComparisonSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GoldLight from "@/components/GoldLight";
import TrackingScripts from "@/components/TrackingScripts";

const TeamProgram = () => {
  return (
    <main className="min-h-screen">
      <TrackingScripts />
      <Header />
      <Hero />
      
      <ScrollReveal>
        <PainSection />
      </ScrollReveal>
      
      <div className="relative">
        <GoldLight />
        <ScrollReveal>
          <DifferentialSection />
        </ScrollReveal>
      </div>
      
      <ScrollReveal>
        <FoundersSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <LocationSection />
      </ScrollReveal>
      
      <div className="relative">
        <GoldLight />
        <ScrollReveal>
          <ProgramSection />
        </ScrollReveal>
      </div>
      
      <ScrollReveal>
        <ComparisonSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
      
      <Footer />
    </main>
  );
};

export default TeamProgram;