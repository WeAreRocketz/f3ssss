import { XCircle, TrendingDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

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
              <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                Você não precisa de mais uma agência.
              </h2>
              <h3 className="text-2xl md:text-4xl font-heading text-accent">
                Precisa de um time que saiba o que faz.
              </h3>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={200}>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-90">
            <p>
              Você já percebeu que o problema não é o marketing — é a <strong>falta de pessoas preparadas</strong>.
            </p>
            
            <p>
              O resultado? <strong className="text-accent">Você paga caro e continua sem previsibilidade.</strong>
            </p>
            
              <p className="text-2xl md:text-3xl font-heading font-bold text-accent pt-6 text-center">
                A F3S nasceu pra mudar isso.
              </p>
            </div>
          </ScrollReveal>

          {/* CTAs with spacing */}
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-[0_0_25px_rgba(197,162,83,0.4)] hover:shadow-[0_0_35px_rgba(197,162,83,0.6)] transition-all">
              🚀 Quero Treinar Minha Equipe
            </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                📅 Agendar Diagnóstico Gratuito
              </Button>
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

          {/* Pain points grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            {painPoints.map((point, index) => (
              <ScrollReveal key={index} delay={index * 100}>
              <div 
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_30px_rgba(197,162,83,0.2)]"
              >
                <point.icon className="w-10 h-10 mb-4 text-accent" />
                <h4 className="font-heading font-semibold text-xl mb-2">{point.title}</h4>
                <p className="text-sm opacity-80">{point.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
