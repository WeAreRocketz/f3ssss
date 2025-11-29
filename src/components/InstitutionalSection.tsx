import { Zap, Users, Settings, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContent } from "@/hooks/useContent";

const InstitutionalSection = () => {
  const { content } = useContent();
  
  const pillars = [
    { icon: Users, title: content['ecosystem.institutional.pillar1'] },
    { icon: Settings, title: content['ecosystem.institutional.pillar2'] },
    { icon: Zap, title: content['ecosystem.institutional.pillar3'] },
    { icon: TrendingUp, title: content['ecosystem.institutional.pillar4'] },
  ];

  return (
    <section id="institutional" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight px-4">
              {content['ecosystem.institutional.headline']}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6 text-base sm:text-lg md:text-xl leading-relaxed opacity-90 px-4 max-w-3xl mx-auto">
              <p>{content['ecosystem.institutional.text1']}</p>
              <p>{content['ecosystem.institutional.text2']}</p>
            </div>
          </ScrollReveal>

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={index} delay={400 + index * 100}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col items-center h-full text-center">
                  <pillar.icon className="w-8 h-8 text-accent mb-3 gold-shine-dark" />
                  <h4 
                    className="font-heading font-semibold text-lg"
                    dangerouslySetInnerHTML={{ __html: pillar.title }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={800}>
            <div className="pt-8">
              <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-accent gold-shine-dark">
                {content['ecosystem.institutional.motto']}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;