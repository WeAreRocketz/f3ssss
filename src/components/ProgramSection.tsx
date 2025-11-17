import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const ProgramSection = () => {
  const weeks = [
    {
      number: "1",
      title: "Direção e Posicionamento Estratégico",
      items: [
        "Clareza sobre público, oferta e proposta de valor",
        "O time entende o negócio e a jornada do cliente"
      ]
    },
    {
      number: "2",
      title: "Tráfego Pago e Criativos de Conversão",
      items: [
        "Meta Ads, Google e TikTok",
        "O time gera atenção e resultados"
      ]
    },
    {
      number: "3",
      title: "Tráfego Orgânico e Conteúdo",
      items: [
        "Estratégias de autoridade e distribuição",
        "O time gera audiência sem depender de mídia"
      ]
    },
    {
      number: "4",
      title: "Funil, CRM e Escala",
      items: [
        "Automação, remarketing e previsibilidade",
        "O time constrói o sistema que gera vendas todo mês"
      ]
    }
  ];

  return (
    <section id="programa" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              F3S TEAM — Formação Presencial de{" "}
              <span className="text-gradient-gold">Times de Performance</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              O programa que ensina a sua equipe tudo o que uma agência não mostra
            </p>
          </div>
          </ScrollReveal>

          {/* Weeks - Novo layout */}
          <div className="space-y-6">
            {weeks.map((week, index) => (
              <ScrollReveal key={index} delay={index * 150}>
              <div 
                className="bg-gradient-to-r from-card to-card/80 rounded-3xl p-6 md:p-8 shadow-xl border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(197,162,83,0.25)] group"
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(197,162,83,0.3)] group-hover:shadow-[0_0_30px_rgba(197,162,83,0.5)] transition-all">
                    <span className="text-2xl md:text-3xl font-heading font-bold text-accent">{week.number}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight flex-1">{week.title}</h3>
                </div>
                
                <ul className="grid md:grid-cols-2 gap-4">
                  {week.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-accent/5 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
          <div className="text-center bg-accent/10 border-2 border-accent/30 rounded-3xl p-8 shadow-lg">
            <p className="text-lg md:text-xl font-semibold">
              Nosso treinamento não será apenas teórico mas focado no que dará resultado para sua empresa 
              que é o <span className="text-accent">acompanhamento prático</span>.
            </p>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8 md:p-12 border border-accent/20 shadow-[0_0_40px_rgba(197,162,83,0.2)]">
              <p className="text-2xl md:text-4xl font-heading font-bold text-accent leading-tight">
                "Em 4 semanas, a sua equipe deixa de ser operacional e se torna estratégica."
              </p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-base md:text-lg px-8 md:px-12 py-6 md:py-7 h-auto shadow-[0_0_30px_rgba(197,162,83,0.4)] hover:shadow-[0_0_45px_rgba(197,162,83,0.6)] transition-all">
              💡 Quero Treinar Minha Equipe
            </Button>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
