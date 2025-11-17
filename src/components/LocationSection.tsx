import { MapPin, Building2, Users, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";
import officePhoto from "@/assets/f3s-office.webp";
import { useContent } from "@/hooks/useContent";

const LocationSection = () => {
  const { content } = useContent();
  const features = [
    {
      icon: Building2,
      title: "120m² de Estrutura",
      description: "Espaço premium dedicado ao aprendizado"
    },
    {
      icon: Users,
      title: "Salas de Treinamento",
      description: "Ambiente preparado para imersão completa"
    },
    {
      icon: Lightbulb,
      title: "Teoria + Prática",
      description: "Cada aula é uma imersão na rotina real"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <AnimatedBackground />
      <div className="w-full relative z-10">
        {/* Header */}
        <div className="container-custom">
          <ScrollReveal>
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              {content['location.headline']?.split('mentes em resultados')[0]}{" "}
              <span className="text-gradient-gold">mentes em resultados</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {content['location.subheadline']}
            </p>
          </div>
          </ScrollReveal>
        </div>

        {/* Location full width */}
        <ScrollReveal delay={200}>
        <div className="w-full bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 border-y border-accent/20 shadow-[0_0_40px_rgba(197,162,83,0.2)]">
          <div className="container-custom py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="bg-card/80 backdrop-blur rounded-3xl px-8 py-6 shadow-xl border border-accent/30">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-8 h-8 text-accent flex-shrink-0 gold-shine" />
                    <div>
                      <p className="font-heading font-bold text-2xl md:text-3xl text-gradient-gold">{content['location.city']}</p>
                      <p className="text-base text-muted-foreground mt-1">{content['location.subtitle']}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/60 backdrop-blur border border-border/50 hover:border-accent/30 transition-all">
                    <Building2 className="w-6 h-6 text-accent mt-1 flex-shrink-0 gold-shine" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Estrutura Premium</h4>
                      <p className="text-muted-foreground">Salas equipadas com tecnologia de ponta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/60 backdrop-blur border border-border/50 hover:border-accent/30 transition-all">
                    <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0 gold-shine" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Turmas Pequenas</h4>
                      <p className="text-muted-foreground">Acompanhamento próximo e personalizado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/60 backdrop-blur border border-border/50 hover:border-accent/30 transition-all">
                    <Lightbulb className="w-6 h-6 text-accent mt-1 flex-shrink-0 gold-shine" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Ambiente Imersivo</h4>
                      <p className="text-muted-foreground">Teoria e prática em tempo real</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-accent/20">
                <img 
                  src={content['image.office'] || officePhoto} 
                  alt="F3S Office - Escritório em Itapema/SC" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LocationSection;
