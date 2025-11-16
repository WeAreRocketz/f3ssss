import { MapPin, Building2, Users, Lightbulb } from "lucide-react";

const LocationSection = () => {
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
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Um ambiente feito para{" "}
              <span className="text-gradient-gold">transformar mentes em resultados</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa sede em <strong>Itapema/SC</strong> é um espaço físico de aprendizado, 
              estratégia e performance.
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Location info */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-semibold text-accent">Itapema, Santa Catarina</span>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover-lift"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-6">
                <p className="text-lg leading-relaxed">
                  Aqui, <strong className="text-accent">teoria e prática se encontram</strong> — 
                  e cada aula é uma imersão na rotina real do marketing digital.
                </p>
              </div>
            </div>

            {/* Map placeholder / Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/30 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-center p-8 space-y-4">
                  <MapPin className="w-16 h-16 text-accent mx-auto" />
                  <div>
                    <p className="font-heading font-bold text-2xl mb-2">F3S Itapema</p>
                    <p className="text-muted-foreground">
                      Estrutura premium para formação de times de alta performance
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
