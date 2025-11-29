import Header from "@/components/Header";
import EcosystemHero from "@/components/EcosystemHero";
import InstitutionalSection from "@/components/InstitutionalSection";
import SolutionsSection from "@/components/SolutionsSection";
import MethodSection from "@/components/MethodSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import EcosystemLocationSection from "@/components/EcosystemLocationSection";
import EcosystemFoundersSection from "@/components/EcosystemFoundersSection";
import EcosystemCTA from "@/components/EcosystemCTA";
import Footer from "@/components/Footer";
import TrackingScripts from "@/components/TrackingScripts";
import GoldLight from "@/components/GoldLight";

const Index = () => {
  return (
    <main className="min-h-screen">
      <TrackingScripts />
      <Header />
      
      <EcosystemHero />
      
      <InstitutionalSection />
      
      <div className="relative">
        <GoldLight />
        <SolutionsSection />
      </div>
      
      <MethodSection />
      
      <WhyChooseSection />
      
      <EcosystemLocationSection />
      
      <EcosystemFoundersSection />
      
      <EcosystemCTA />
      
      <Footer />
    </main>
  );
};

export default Index;