import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
            <Rocket className="w-4 h-4" />
            Forme o time da sua própria agência interna
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            Cansado de pagar agências e{" "}
            <span className="text-gradient-gold">não ver resultado?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Treine o seu próprio time e assuma o controle do seu marketing.
          </p>

          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
            A F3S é a escola presencial que forma equipes de alta performance em marketing e vendas — 
            ensinando estratégia, tráfego, funil e posicionamento aplicados à sua empresa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 Quero Treinar Minha Equipe
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              📅 Agendar Diagnóstico Gratuito
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Presencial em Itapema/SC</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Formação Completa em 4 Semanas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Time Estratégico e Operacional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
