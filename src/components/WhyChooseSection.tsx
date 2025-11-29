import { CheckCircle2, Star, MapPin, Users, TrendingUp, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContent } from "@/hooks/useContent";

const WhyChooseSection = () => {
  const { content } = useContent();
  
  const reasons = [
    { icon: MapPin, text: content['ecosystem.why.item1'] },
    { icon: Award, text: content['ecosystem.why.item2'] },
    { icon: Star, text: content['ecosystem.why.item3'] },
    { icon: Users, text: content['ecosystem.why.item4'] },
    { icon: CheckCircle2, text: content['ecosystem.why.item5'] },
    { icon: TrendingUp, text: content['ecosystem.why.item6'] },
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                {content['ecosystem.why.headline']}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <ScrollReveal key={index} delay={100 + index * 100}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex items-start gap-4 h-full">
                  <reason.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1 gold-shine-dark" />
                  <p className="text-base font-medium leading-relaxed">{reason.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;