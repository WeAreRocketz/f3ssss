import { Palette } from "lucide-react";
import aristonPhoto from "@/assets/ariston.webp";

interface Founder {
  name: string;
  role: string;
  photo?: string;
  icon?: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
}

const FoundersSection = () => {
  const founders: Founder[] = [
    {
      name: "Ariston Ferraz",
      role: "Estratégia e Vendas Online",
      photo: aristonPhoto,
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
    <section id="fundadores" className="section-padding bg-secondary/50">
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
                className="bg-card rounded-3xl p-8 shadow-xl border border-border hover:border-accent/30 transition-all duration-300 hover-lift space-y-6 hover:shadow-[0_0_40px_rgba(197,162,83,0.15)]"
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-4 border-accent/20 flex items-center justify-center overflow-hidden shadow-[0_0_25px_rgba(197,162,83,0.3)]">
                  {founder.photo ? (
                    <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover" />
                  ) : founder.icon ? (
                    <founder.icon className="w-16 h-16 text-accent" />
                  ) : null}
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold mb-2">{founder.name}</h3>
                  <p className="text-accent font-semibold text-lg mb-4">{founder.role}</p>
                  <p className="text-muted-foreground leading-relaxed text-left">
                    {founder.description}
                  </p>
                </div>
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
