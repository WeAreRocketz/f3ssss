import { MapPin, Building2, Video, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import officePhoto from "@/assets/f3s-office.webp";
import { useContent } from "@/hooks/useContent";

const EcosystemLocationSection = () => {
  const { content } = useContent();
  
  const features = [
    { icon: Building2, text: content['ecosystem.location.item1'] },
    { icon: Lightbulb, text: content['ecosystem.location.item2'] },
    { icon: MapPin, text: content['ecosystem.location.item3'] },
    { icon: Video, text: content['ecosystem.location.item5'] },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center space-y-4 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                {content['ecosystem.location.headline']}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <ScrollReveal direction="left" delay={200}>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-accent/20">
                <img 
                  src={content['image.office'] || officePhoto} 
                  alt="F3S Office - Escritório em Itapema/SC" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <ScrollReveal key={index} direction="right" delay={300 + index * 100}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/60 backdrop-blur border border-border/50 hover:border-accent/30 transition-all">
                    <feature.icon className="w-6 h-6 text-accent mt-1 flex-shrink-0 gold-shine-light" />
                    <p className="font-semibold text-lg leading-relaxed">{feature.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemLocationSection;