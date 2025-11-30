import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContent } from "@/hooks/useContent";
import daviPhoto from "@/assets/image.png";

const SpecialistsSection = () => {
  const { content } = useContent();

  const specialists = [
    {
      name: content['specialists.davi.name'],
      role: content['specialists.davi.role'],
      description: content['specialists.davi.description'],
      quote: content['specialists.davi.quote'],
      photo: daviPhoto,
    }
  ].filter(s => s.name);

  if (specialists.length === 0) return null;

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center space-y-4 px-4 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              {content['specialists.headline']}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-accent font-semibold gold-shine-light">
              {content['specialists.subheadline']}
            </p>
          </div>
        </ScrollReveal>

        {specialists.map((specialist, index) => (
          <ScrollReveal key={index} delay={200}>
            <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border hover:border-accent/40 transition-all duration-300 hover-lift">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] md:h-[500px]">
                  <img
                    src={specialist.photo}
                    alt={specialist.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold">{specialist.name}</h3>
                    <p className="text-accent font-semibold text-lg">{specialist.role}</p>
                  </div>

                  <div className="relative p-6 bg-secondary/50 rounded-xl border border-border/50">
                    <Quote className="w-8 h-8 text-accent absolute top-4 left-4 opacity-30" />
                    <p className="text-lg italic leading-relaxed pl-10 text-foreground/90">
                      "{specialist.quote}"
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-base">
                    {specialist.description}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default SpecialistsSection;