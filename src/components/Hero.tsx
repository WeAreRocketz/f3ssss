import ShinyButton from "@/components/ShinyButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Rocket, Calendar } from "lucide-react";
import f3sLogo from "@/assets/f3s-logo.png";
import { useContent } from "@/hooks/useContent";

const Hero = () => {
  const { content } = useContent();
  
  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background decorative elements */}
      <AnimatedBackground />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        {/* Animated golden circle */}
        <div className="hero-animated-circle" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={f3sLogo} alt="F3S Logo" className="h-16 md:h-20 w-auto" />
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight px-4">
            {content['hero.headline']?.split(' não ver resultado?')[0]}{" "}
            <span className="text-gradient-gold">não ver resultado?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {content['hero.subheadline']}
          </p>

          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto px-4">
            {content['hero.description']}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center pt-4 px-4">
            <ShinyButton
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="w-5 h-5" />
              Quero Treinar Minha Equipe
            </ShinyButton>
            
            <ShinyButton
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5" />
              Agendar Diagnóstico Gratuito
            </ShinyButton>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Presencial em Itapema/SC</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Formação Completa em 4 Semanas</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Time Estratégico e Operacional</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
