import { Briefcase, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContent } from "@/hooks/useContent";

const SpecialistsSection = () => {
  const { content } = useContent();
  
  const specialists = [
    {
      name: content['specialists.davi.name'],
      role: content['specialists.davi.role'],
      description: content['specialists.davi.description'],
      quote: content['specialists.davi.quote'],
      photo: content['image.davi'],
    }
    // Add more specialists here if needed
  ].filter(s => s.name); // Filter out empty entries

  if (specialists.length === 0) return null;

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center space-y-4 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                {content['specialists.headline']}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-accent font-semibold gold-shine-light">
                {content['specialists.subheadline']}
              </p>
            </div>
          </ScrollReveal>

          {/* Specialists Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <ScrollReveal key={index} delay={200 + index * 150}>
                <div className="bg-card rounded-3xl p-8 space-y-6 shadow-xl border border-border hover:border-accent/40 transition-all duration-300 hover-lift flex flex-col h-full">
                  
                  {/* Photo and Role */}
                  <div className="flex items-center gap-4 pb-4 border-b border-border/50">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/30 flex-shrink-0">
                      {specialist.photo ? (
                        <img 
                          src={specialist.photo} 
                          alt={specialist.name} 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                          <Briefcase className="w-8 h-8 text-accent" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold">{specialist.name}</h3>
                      <p className="text-accent font-semibold text-sm mt-1">{specialist.role}</p>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative p-4 bg-secondary/50 rounded-xl border border-border/50">
                    <Quote className="w-6 h-6 text-accent absolute top-2 left-2 opacity-30" />
                    <p className="text-base italic leading-relaxed pl-8 text-foreground/90">
                      "{specialist.quote}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                    {specialist.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;