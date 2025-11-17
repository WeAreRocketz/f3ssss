import aristonPhoto from "@/assets/ariston.webp";
import ExpertiseBar from "@/components/ExpertiseBar";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";
import ShinyBanner from "@/components/ShinyBanner";
import { useContent } from "@/hooks/useContent";

interface Founder {
  name: string;
  role: string;
  photo?: string;
  description: string;
  expertise: Array<{ skill: string; level: number }>;
  quote: string;
}

const FoundersSection = () => {
  const { content } = useContent();
  
  const founders: Founder[] = [
    {
      name: content['founders.ariston.name'] || "Ariston Ferraz",
      role: content['founders.ariston.role'] || "Estratégia e Vendas Online",
      photo: aristonPhoto,
      description: content['founders.ariston.description'] || "Empresário e especialista em vendas digitais com mais de R$10 milhões faturados online, criador de ecossistemas de e-commerce. Domina as estratégias que comandam o mundo online e também técnicas de vendas presenciais usando a tecnologia ao favor do time comercial.",
      expertise: [
        { skill: "Estratégia Digital", level: 100 },
        { skill: "Vendas Online", level: 100 },
        { skill: "E-commerce", level: 100 },
      ],
      quote: content['founders.ariston.quote'] || "Construí um ecossistema completo de vendas online do zero. Agora ensino times inteiros a fazer o mesmo."
    },
    {
      name: content['founders.gilvane.name'] || "Gilvane Soares",
      role: content['founders.gilvane.role'] || "Branding e Posicionamento",
      description: content['founders.gilvane.description'] || "Especialista em identidade de marca, posicionamento estratégico e narrativa de negócio. Responsável por marcas com alto valor de mercado e percepção premium.",
      expertise: [
        { skill: "Branding", level: 100 },
        { skill: "Identidade Visual", level: 100 },
        { skill: "Posicionamento", level: 100 },
      ],
      quote: content['founders.gilvane.quote'] || "Uma marca forte não é sorte. É estratégia, posicionamento e execução consistente."
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
            <ScrollReveal>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider px-4">Palavra dos Fundadores</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight px-4">
              {content['founders.headline']?.split('o campo de batalha')[0]}{" "}
              <span className="text-gradient-gold">o campo de batalha</span>{" "}
              do digital
            </h2>
            </ScrollReveal>
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
          <ScrollReveal delay={400}>
          <div className="text-center pt-12">
            <ShinyBanner className="max-w-5xl mx-auto shadow-xl">
              <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold leading-relaxed">
                {content['founders.banner']}
              </p>
            </ShinyBanner>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
