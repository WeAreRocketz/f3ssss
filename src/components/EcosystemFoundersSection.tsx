import aristonPhoto from "@/assets/ariston.webp";
import gilvanePhoto from "@/assets/gilvane.webp";
import ScrollReveal from "@/components/ScrollReveal";
import ShinyBanner from "@/components/ShinyBanner";
import { useContent } from "@/hooks/useContent";
import { DollarSign, Zap } from "lucide-react";

const EcosystemFoundersSection = () => {
  const { content } = useContent();
  
  const founders = [
    {
      name: content['founders.ariston.name'] || "Ariston Ferraz",
      role: "Especialista em vendas online.",
      summary: content['founders.ariston.summary'] || "R$ 10 milhões faturados. Criador de métodos de escala e performance.",
      photo: content['image.ariston'] || aristonPhoto,
      icon: DollarSign,
    },
    {
      name: content['founders.gilvane.name'] || "Gilvane Soares",
      role: "Especialista em branding e posicionamento.",
      summary: content['founders.gilvane.summary'] || "Mais de 6 milhoes em vendas no ecommerce.",
      photo: content['image.gilvane'] || gilvanePhoto,
      icon: Zap,
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 via-background to-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center space-y-4 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                Quem somos nós
              </h2>
            </div>
          </ScrollReveal>

          {/* Founders Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <ScrollReveal key={index} delay={200 + index * 150}>
                <div className="bg-card rounded-3xl p-8 space-y-4 shadow-xl border border-border hover:border-accent/40 transition-all duration-300 hover-lift flex flex-col items-center text-center h-full">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent/30 mb-4">
                    {founder.photo ? (
                      <img 
                        src={founder.photo} 
                        alt={founder.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <founder.icon className="w-10 h-10 text-accent" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold">{founder.name}</h3>
                  <p className="text-accent font-semibold text-lg">{founder.role}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{founder.summary}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Quote Banner */}
          <ScrollReveal delay={600}>
            <ShinyBanner className="max-w-full mx-auto shadow-xl">
              <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold leading-relaxed text-center">
                "{content['founders.quote.ecosystem']}"
              </p>
            </ShinyBanner>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EcosystemFoundersSection;