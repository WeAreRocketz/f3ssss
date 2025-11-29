import { Target, Settings, Zap, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ShinyBanner from "@/components/ShinyBanner";
import { useContent } from "@/hooks/useContent";

const MethodSection = () => {
  const { content } = useContent();
  
  const steps = [
    {
      icon: Target,
      title: content['ecosystem.method.step1.title'],
      description: content['ecosystem.method.step1.description'],
      number: 1,
    },
    {
      icon: Settings,
      title: content['ecosystem.method.step2.title'],
      description: content['ecosystem.method.step2.description'],
      number: 2,
    },
    {
      icon: Zap,
      title: content['ecosystem.method.step3.title'],
      description: content['ecosystem.method.step3.description'],
      number: 3,
    },
  ];

  return (
    <section id="method" className="section-padding bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center space-y-4 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                {content['ecosystem.method.headline']}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-accent font-semibold gold-shine-light">
                {content['ecosystem.method.subheadline']}
              </p>
            </div>
          </ScrollReveal>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={200 + index * 150}>
                <div className="relative bg-card rounded-3xl p-8 space-y-4 shadow-xl border border-border hover:border-accent/40 transition-all duration-300 hover-lift flex flex-col h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shadow-[0_0_20px_rgba(197,162,83,0.3)]">
                      <span className="text-2xl font-heading font-bold text-accent gold-shine-light">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold leading-snug">{step.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-base pt-2">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Motto Banner */}
          <ScrollReveal delay={600}>
            <ShinyBanner className="max-w-4xl mx-auto shadow-xl">
              <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold leading-relaxed text-center">
                {content['ecosystem.method.motto']}
              </p>
            </ShinyBanner>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;