import { Trophy, Palette } from "lucide-react";

const FoundersSection = () => {
  const founders = [
    {
      name: "Ariston Ferraz",
      role: "Estratégia e Vendas Online",
      icon: Trophy,
      description: "Empresário e especialista em vendas digitais com mais de R$10 milhões faturados online, criador de ecossistemas de e-commerce. Domina as estratégias que comandam o mundo online e também técnicas de vendas presenciais usando a tecnologia ao favor do time comercial, cadência comercial e gestão de vendas através de processos implementados a um CRM de vendas.",
      color: "accent"
    },
    {
      name: "Gilvane Soares",
      role: "Branding e Posicionamento",
      icon: Palette,
      description: "Especialista em identidade de marca, posicionamento estratégico e narrativa de negócio. Responsável por marcas com alto valor de mercado e percepção premium.",
      color: "primary"
    }
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Criada por quem viveu{" "}
              <span className="text-gradient-gold">o campo de batalha</span>{" "}
              do digital
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fundadores com experiência real em construir, testar e escalar negócios
            </p>
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="bg-card rounded-3xl p-8 shadow-xl border border-border hover:border-accent/30 transition-all duration-300 hover-lift space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-${founder.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <founder.icon className={`w-8 h-8 text-${founder.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-1">{founder.name}</h3>
                    <p className="text-accent font-semibold">{founder.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>

          {/* Authority statement */}
          <div className="text-center pt-8">
            <div className="inline-block bg-primary text-primary-foreground rounded-2xl px-8 py-6 max-w-3xl">
              <p className="text-xl md:text-2xl font-heading font-semibold leading-relaxed">
                "A F3S nasceu da prática. De quem construiu, testou e escalou empresas reais — 
                e agora ensina times a fazer o mesmo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
