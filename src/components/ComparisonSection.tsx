import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const oldModel = [
    "Dependência de terceiros",
    "Resultados incertos",
    "Alto custo recorrente",
    "Falta de controle",
    "Conhecimento externo"
  ];

  const f3sModel = [
    "Autonomia completa",
    "Previsibilidade de resultados",
    "Investimento em time próprio",
    "Controle total do processo",
    "Conhecimento interno"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Você não precisa terceirizar{" "}
              <span className="text-gradient-gold">o coração do seu negócio</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Com o método F3S, sua empresa aprende a criar, gerenciar e escalar campanhas internamente.
            </p>
          </div>

          {/* Comparison cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Old model */}
            <div className="bg-card rounded-3xl p-8 border-2 border-destructive/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full blur-3xl" />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Modelo Antigo</h3>
                </div>
                
                <div className="space-y-3">
                  {oldModel.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-destructive/5">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 text-center">
                  <p className="text-sm font-semibold text-destructive uppercase tracking-wider">
                    Agências Tradicionais
                  </p>
                </div>
              </div>
            </div>

            {/* F3S model */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 border-2 border-accent relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Modelo F3S</h3>
                </div>
                
                <div className="space-y-3">
                  {f3sModel.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-card">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 text-center">
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                    Time Interno Treinado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              <strong className="text-accent">Economize com agências</strong>, tenha domínio sobre seus resultados 
              e forme um time que fala a mesma língua do crescimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
