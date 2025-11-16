import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import DifferentialSection from "@/components/DifferentialSection";
import FoundersSection from "@/components/FoundersSection";
import LocationSection from "@/components/LocationSection";
import ProgramSection from "@/components/ProgramSection";
import ComparisonSection from "@/components/ComparisonSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainSection />
      <DifferentialSection />
      <FoundersSection />
      <LocationSection />
      <ProgramSection />
      <ComparisonSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
