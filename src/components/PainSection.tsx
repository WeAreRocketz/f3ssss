import { XCircle, TrendingDown, Clock } from "lucide-react";

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
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Você não precisa de mais uma agência.
            </h2>
            <h3 className="text-2xl md:text-4xl font-heading text-accent">
              Precisa de um time que saiba o que faz.
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-90 animate-fade-in-up">
            <p>
              Você já percebeu que o problema não é o marketing — é a <strong>falta de pessoas preparadas</strong>.
            </p>
            
            {/* Pain points grid */}
            <div className="grid md:grid-cols-3 gap-6 py-8">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <point.icon className="w-10 h-10 mb-4 text-accent" />
                  <h4 className="font-heading font-semibold text-xl mb-2">{point.title}</h4>
                  <p className="text-sm opacity-80">{point.description}</p>
                </div>
              ))}
            </div>

            <p>
              O resultado? <strong className="text-accent">Você paga caro e continua sem previsibilidade.</strong>
            </p>
            
            <p className="text-2xl md:text-3xl font-heading font-bold text-accent pt-6 text-center">
              A F3S nasceu pra mudar isso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
