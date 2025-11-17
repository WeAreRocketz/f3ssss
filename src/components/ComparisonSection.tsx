import { X, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";

const ComparisonSection = () => {
  const oldModel = [
    "Dependência de terceiros para estratégias",
    "Resultados incertos e imprevisíveis",
    "Alto custo recorrente sem garantias",
    "Falta de controle sobre campanhas",
    "Conhecimento externo que não fica"
  ];

  const f3sModel = [
    "Autonomia completa do seu time",
    "Previsibilidade de resultados mensal",
    "Investimento único em time próprio",
    "Controle total do processo de marketing",
    "Conhecimento interno que permanece"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <AnimatedBackground />
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Você não precisa{" "}
              <span className="text-gradient-gold">terceirizar o coração do seu negócio</span>
            </h2>
          </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={200}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-card/90 backdrop-blur border-2 border-destructive/30 rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl h-full">
                <div className="flex items-center gap-4 pb-6 border-b border-destructive/20">
                  <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                    <X className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold">Modelo Antigo</h3>
                </div>
                <ul className="space-y-4">
                  {oldModel.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-destructive/5 transition-all">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-card/90 backdrop-blur border-2 border-accent/40 rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl shadow-accent/20 h-full">
                <div className="flex items-center gap-4 pb-6 border-b border-accent/20">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shadow-[0_0_20px_rgba(197,162,83,0.3)]">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold">Modelo F3S</h3>
                </div>
                <ul className="space-y-4">
                  {f3sModel.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/5 transition-all border border-transparent hover:border-accent/20">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
