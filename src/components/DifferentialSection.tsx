import { Target, Users, TrendingUp, Award } from "lucide-react";

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
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Nós não só ensinamos marketing.
            </h2>
            <h3 className="text-2xl md:text-4xl font-heading text-accent">
              Nós formamos o time da sua empresa.
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-4">
              A F3S é uma escola presencial de estratégia digital que transforma colaboradores 
              em profissionais completos de marketing e vendas.
            </p>
          </div>

          {/* Method description */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border">
            <p className="text-lg md:text-xl text-center leading-relaxed mb-8">
              Nosso método combina <strong className="text-accent">estratégia, execução e acompanhamento</strong>, 
              mostrando passo a passo como estruturar o seu próprio departamento de marketing interno.
            </p>

            {/* Differentials grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {differentials.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl bg-secondary/50 hover:bg-accent/10 border border-transparent hover:border-accent/30 transition-all duration-300 hover-lift"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact phrase */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8 md:p-12 border border-accent/20">
              <p className="text-2xl md:text-4xl font-heading font-bold text-accent leading-tight">
                "Em vez de terceirizar, construa sua própria máquina de vendas."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
