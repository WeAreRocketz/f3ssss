import { Calendar, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramSection = () => {
  const weeks = [
    {
      number: "1",
      title: "Direção e Posicionamento Estratégico",
      description: "Clareza sobre público, oferta e proposta de valor.",
      outcome: "O time entende o negócio e a jornada do cliente.",
      icon: Target
    },
    {
      number: "2",
      title: "Tráfego Pago e Criativos de Conversão",
      description: "Meta Ads, Google e TikTok.",
      outcome: "O time gera atenção e resultados.",
      icon: Zap
    },
    {
      number: "3",
      title: "Tráfego Orgânico e Conteúdo",
      description: "Estratégias de autoridade e distribuição.",
      outcome: "O time gera audiência sem depender de mídia.",
      icon: TrendingUp
    },
    {
      number: "4",
      title: "Funil, CRM e Escala",
      description: "Automação, remarketing e previsibilidade.",
      outcome: "O time constrói o sistema que gera vendas todo mês.",
      icon: Users
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-semibold text-accent">
              <Calendar className="w-4 h-4" />
              Programa de Formação
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              F3S TEAM
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-heading text-accent">
              Formação Presencial de Times de Performance
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              O programa que ensina a sua equipe <strong>tudo o que uma agência não mostra</strong>.
            </p>
          </div>

          {/* Weeks timeline */}
          <div className="space-y-6">
            {weeks.map((week, index) => (
              <div 
                key={index}
                className="group bg-card rounded-3xl p-6 md:p-8 shadow-lg border border-border hover:border-accent/50 transition-all duration-300 hover-lift"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Week number */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white font-heading font-bold text-3xl shadow-lg">
                      {week.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <week.icon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl md:text-2xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                          {week.title}
                        </h4>
                        <p className="text-muted-foreground mb-3">
                          {week.description}
                        </p>
                        <div className="flex items-start gap-2 bg-accent/10 rounded-xl p-3 border border-accent/20">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <p className="text-sm font-semibold text-accent">
                            {week.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Training approach */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              Nosso treinamento não será apenas teórico mas <strong className="text-accent">focado no que dará resultado</strong> para sua empresa que é o <strong className="text-accent">acompanhamento prático</strong>.
            </p>
          </div>

          {/* Impact phrase */}
          <div className="text-center space-y-8">
            <p className="text-2xl md:text-4xl font-heading font-bold text-accent">
              "Em 4 semanas, a sua equipe deixa de ser operacional e se torna estratégica."
            </p>
            
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-10 py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              💡 Quero Treinar Minha Equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
