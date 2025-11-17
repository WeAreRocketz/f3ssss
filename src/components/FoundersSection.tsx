import aristonPhoto from "@/assets/ariston.webp";
import ExpertiseBar from "@/components/ExpertiseBar";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";

interface Founder {
  name: string;
  role: string;
  photo?: string;
  description: string;
  expertise: Array<{ skill: string; level: number }>;
  quote: string;
}

const FoundersSection = () => {
  const founders: Founder[] = [
    {
      name: "Ariston Ferraz",
      role: "Estratégia e Vendas Online",
      photo: aristonPhoto,
      description: "Empresário e especialista em vendas digitais com mais de R$10 milhões faturados online, criador de ecossistemas de e-commerce. Domina as estratégias que comandam o mundo online e também técnicas de vendas presenciais usando a tecnologia ao favor do time comercial.",
      expertise: [
        { skill: "Estratégia Digital", level: 100 },
        { skill: "Vendas Online", level: 100 },
        { skill: "E-commerce", level: 100 },
      ],
      quote: "Construí um ecossistema completo de vendas online do zero. Agora ensino times inteiros a fazer o mesmo."
    },
    {
      name: "Gilvane Soares",
      role: "Branding e Posicionamento",
      description: "Especialista em identidade de marca, posicionamento estratégico e narrativa de negócio. Responsável por marcas com alto valor de mercado e percepção premium.",
      expertise: [
        { skill: "Branding", level: 100 },
        { skill: "Identidade Visual", level: 100 },
        { skill: "Posicionamento", level: 100 },
      ],
      quote: "Uma marca forte não é sorte. É estratégia, posicionamento e execução consistente."
    }
  ];

  return (
    <section id="fundadores" className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decorative */}
      <AnimatedBackground />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">Palavra dos Fundadores</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Criada por quem viveu{" "}
              <span className="text-gradient-gold">o campo de batalha</span>{" "}
              do digital
            </h2>
          </div>

          {/* Founders - Large Layout */}
          <div className="space-y-24">
            {founders.map((founder, index) => (
              <ScrollReveal 
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={200}
              >
              <div 
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Photo */}
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/20 hover:border-accent/40 transition-all duration-500 group">
                    {founder.photo ? (
                      <>
                        <img 
                          src={founder.photo} 
                          alt={founder.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="text-6xl text-accent font-heading font-bold">
                            {founder.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -z-10 inset-0 bg-accent/10 rounded-3xl translate-x-4 translate-y-4 blur-xl" />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-accent font-semibold text-xl mb-4">{founder.role}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {founder.description}
                  </p>

                  {/* Expertise bars */}
                  <div className="space-y-4 pt-4">
                    {founder.expertise.map((item, i) => (
                      <ExpertiseBar 
                        key={i}
                        skill={item.skill}
                        level={item.level}
                        delay={i * 100}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="pt-6 border-l-4 border-accent pl-6">
                    <p className="text-foreground/90 italic text-lg leading-relaxed">
                      "{founder.quote}"
                    </p>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Authority statement */}
          <div className="text-center pt-12">
            <div className="inline-block bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground rounded-2xl px-8 py-6 md:px-12 md:py-8 max-w-3xl shadow-xl">
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
