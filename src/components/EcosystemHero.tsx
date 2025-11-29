import ShinyButton from "@/components/ShinyButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Rocket, CheckCircle2 } from "lucide-react";
import f3sLogo from "@/assets/f3s-logo.png";
import { useContent } from "@/hooks/useContent";
import ScrollReveal from "@/components/ScrollReveal";

const EcosystemHero = () => {
  const { content } = useContent();
  
  const bullets = [
    content['ecosystem.hero.bullet1'],
    content['ecosystem.hero.bullet2'],
    content['ecosystem.hero.bullet3'],
  ];

  return (
    <section id="hero" className="hero-section relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30 pt-24 pb-16">
      {/* Background decorative elements */}
      <AnimatedBackground />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated golden circle */}
        <div className="hero-animated-circle" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <ScrollReveal>
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src={content['image.logo'] || f3sLogo} 
                alt="F3S Logo" 
                className="h-16 md:h-20 w-auto" 
              />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight px-4">
              {content['ecosystem.hero.headline']}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              {content['ecosystem.hero.subheadline']}
            </p>
          </ScrollReveal>

          {/* Bullets */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4 pt-4 px-4">
              {bullets.map((bullet, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-foreground/90 whitespace-nowrap gold-shine-light"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  {bullet}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={400}>
            <div className="flex flex-col items-center gap-2 pt-8 px-4">
              <ShinyButton
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {content['ecosystem.hero.cta']}
                <Rocket className="w-5 h-5" />
              </ShinyButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EcosystemHero;