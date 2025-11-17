import { Target, Users, TrendingUp, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";

const DifferentialSection = () => {
  const differentials = [
    {
      icon: Target,
      title: "Estratégia Aplicada",
      description: "Não ensinamos teoria genérica. Tudo é aplicado ao seu negócio real."
    },
    {
      icon: Users,
      title: "Time Completo",
      description: "Formamos profissionais estratégicos e operacionais, não apenas executores."
    },
    {
      icon: TrendingUp,
      title: "Resultados Previsíveis",
      description: "Construímos sistemas que geram vendas consistentes, mês após mês."
    },
    {
      icon: Award,
      title: "Acompanhamento Prático",
      description: "Não apenas teoria, mas implementação real com mentoria ativa."
    }
  ];

  return (
    <section id="diferenciais" className="section-padding bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <AnimatedBackground />
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center space-y-6 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight max-w-4xl mx-auto">
              Nós não só ensinamos marketing.
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-gradient-gold max-w-4xl mx-auto">
              Nós formamos o time da sua empresa.
            </h3>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-4 px-4">
              A F3S é uma escola presencial de estratégia digital que transforma colaboradores 
              em profissionais completos de marketing e vendas.
            </p>
          </div>
          </ScrollReveal>

          {/* Method description */}
          <ScrollReveal delay={200}>
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border">
            <p className="text-base sm:text-lg md:text-xl text-center leading-relaxed mb-8 px-4">
              Nosso método combina <strong className="text-accent">estratégia, execução e acompanhamento</strong>, 
              mostrando passo a passo como estruturar o seu próprio departamento de marketing interno.
            </p>

            {/* Differentials grid */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {differentials.map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                <div 
                  className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-gradient-to-b from-secondary/80 to-secondary/40 hover:from-accent/10 hover:to-accent/5 border border-border hover:border-accent/30 transition-all duration-300 hover-lift shadow-lg hover:shadow-[0_0_30px_rgba(197,162,83,0.2)]"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shadow-[0_0_20px_rgba(197,162,83,0.2)]">
                      <item.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <div>
                  <h4 className="font-heading font-semibold text-xl mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
              </ScrollReveal>
              ))}
            </div>
          </div>
          </ScrollReveal>

          {/* Impact phrase */}
          <ScrollReveal delay={400}>
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8 md:p-12 border border-accent/20">
              <p className="text-2xl md:text-4xl font-heading font-bold text-accent leading-tight">
                "Em vez de terceirizar, construa sua própria máquina de vendas."
              </p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
