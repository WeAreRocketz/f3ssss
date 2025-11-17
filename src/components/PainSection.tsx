import { XCircle, TrendingDown, Clock, Rocket, Calendar } from "lucide-react";
import ShinyButton from "@/components/ShinyButton";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";

const PainSection = () => {
  const painPoints = [
    {
      icon: XCircle,
      title: "Profissionais Despreparados",
      description: "Sua equipe não sabe anunciar, não entende de funil e não entrega resultado."
    },
    {
      icon: TrendingDown,
      title: "Agências Genéricas",
      description: "Cuidam de dezenas de contas e não entendem o seu negócio de verdade."
    },
    {
      icon: Clock,
      title: "Sem Previsibilidade",
      description: "Você paga caro e continua sem resultados consistentes e escaláveis."
    }
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <AnimatedBackground />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight px-4">
                Você não precisa de mais uma agência.
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-accent px-4">
                Precisa de um time que saiba o que faz.
              </h3>
            </div>
          </ScrollReveal>

          {/* Content - Centered paragraphs */}
          <ScrollReveal delay={200}>
            <div className="space-y-6 text-base sm:text-lg md:text-xl leading-relaxed opacity-90 px-4 text-center max-w-3xl mx-auto">
              <p>
                Você já percebeu que o problema não é o marketing — é a <strong>falta de pessoas preparadas</strong>.
              </p>
              
              <p>
                O resultado? <strong className="text-accent">Você paga caro e continua sem previsibilidade.</strong>
              </p>
            </div>
          </ScrollReveal>

          {/* Pain points grid - Moved before F3S headline */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {painPoints.map((point, index) => (
              <ScrollReveal key={index} delay={300 + index * 100}>
                <div 
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_30px_rgba(197,162,83,0.2)] flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <point.icon className="w-8 h-8 text-accent flex-shrink-0" />
                    <h4 className="font-heading font-semibold text-lg">{point.title}</h4>
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* F3S Mission Statement */}
          <ScrollReveal delay={600}>
            <div className="text-center pt-8">
              <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-accent">
                A F3S nasceu pra mudar isso.
              </p>
            </div>
          </ScrollReveal>

          {/* CTAs with spacing */}
          <ScrollReveal delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 px-4">
            <ShinyButton size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Rocket className="w-5 h-5" />
              Quero Treinar Minha Equipe
            </ShinyButton>
              <ShinyButton size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Calendar className="w-5 h-5" />
                Agendar Diagnóstico Gratuito
              </ShinyButton>
            </div>
          </ScrollReveal>

          {/* Statistics with better spacing and organization */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 mt-8 border-t border-primary-foreground/20">
            <ScrollReveal delay={100}>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 hover:border-accent/40 transition-all hover:shadow-[0_0_20px_rgba(197,162,83,0.2)]">
              <div className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-3">10M+</div>
              <p className="text-sm md:text-base font-medium">Faturado Online</p>
            </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 hover:border-accent/40 transition-all hover:shadow-[0_0_20px_rgba(197,162,83,0.2)]">
              <div className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-3">100+</div>
              <p className="text-sm md:text-base font-medium">Times Formados</p>
            </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-accent/10 to-transparent border border-accent/20 hover:border-accent/40 transition-all hover:shadow-[0_0_20px_rgba(197,162,83,0.2)]">
              <div className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-3">4</div>
              <p className="text-sm md:text-base font-medium">Semanas de Imersão</p>
            </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainSection;
