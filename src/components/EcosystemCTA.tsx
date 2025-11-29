import { Rocket } from "lucide-react";
import ShinyButton from "@/components/ShinyButton";
import ScrollReveal from "@/components/ScrollReveal";
import { useContent } from "@/hooks/useContent";

const EcosystemCTA = () => {
  const { content } = useContent();

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight px-4">
              {content['ecosystem.cta.headline']}
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              {content['ecosystem.cta.subheadline']}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <ShinyButton 
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                // Use the whatsapp link from settings
                const rawNumber = content['settings.whatsapp'] || '5547999999999';
                const cleanNumber = rawNumber.replace(/\D/g, '');
                const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent("Olá! Gostaria de agendar um diagnóstico gratuito da F3S.")}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <Rocket className="w-5 h-5" />
              {content['ecosystem.cta.button']}
            </ShinyButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EcosystemCTA;