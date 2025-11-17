import ShinyButton from "@/components/ShinyButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Rocket, Calendar } from "lucide-react";
import f3sLogo from "@/assets/f3s-logo.png";
import bgDeskVideo from "@/assets/bg-desk.mp4";
import bgMobVideo from "@/assets/bg-mob.mp4";
import { useContent } from "@/hooks/useContent";

const Hero = () => {
  const { content } = useContent();
  
  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 hidden md:block"
        >
          <source src={bgDeskVideo} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 md:hidden"
        >
          <source src={bgMobVideo} type="video/mp4" />
        </video>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
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
          <div className="flex flex-col items-center gap-2 pt-4 px-4">
            <ShinyButton
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="w-5 h-5" />
              Quero Treinar Minha Equipe
            </ShinyButton>
            <p className="text-sm text-muted-foreground">
              Agende o diagnóstico gratuito
            </p>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center text-xs sm:text-sm text-muted-foreground px-4">
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20 w-full sm:w-auto whitespace-nowrap">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 gold-shine-light" />
              <span className="text-center">Presencial em Itapema/SC</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20 w-full sm:w-auto whitespace-nowrap">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 gold-shine-light" />
              <span className="text-center">Formação em 4 Semanas</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20 w-full sm:w-auto whitespace-nowrap">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 gold-shine-light" />
              <span className="text-center">Time Estratégico</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
