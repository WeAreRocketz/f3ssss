import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContent } from "@/hooks/useContent";
import daviPhoto from "@/assets/image.png";

const SpecialistsSection = () => {
  const { content } = useContent();

  const specialist = {
    name: content['specialists.davi.name'] || "Davi Azevedo",
    role: content['specialists.davi.role'] || "Especialista em Vendas Outbound / Head Comercial do Grupo F3S",
    description: content['specialists.davi.description'] || "Formado por processos, por método, por disciplina e por gente que entendia que vendas não é talento — é educação comercial. E é exatamente isso que faço hoje como Head Comercial da F3S: pego equipes comuns e transformo vendedores em profissionais de alta performance, usando a mesma estrutura que me moldou. Sou fruto de um bom processo. E agora, formo pessoas que querem viver o mesmo padrão.",
    quote: content['specialists.davi.quote'] || "Eu não nasci sabendo vender. Eu fui formado.",
    photo: daviPhoto,
  };

  if (!content['specialists.headline']) return null;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {content['specialists.headline']}
            </h2>
            <p className="text-xl md:text-2xl text-accent font-semibold">
              {content['specialists.subheadline']}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-card rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div className="grid md:grid-cols-2">
              <div className="h-[400px] md:h-auto">
                <img
                  src={specialist.photo}
                  alt={specialist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {specialist.name}
                  </h3>
                  <p className="text-accent font-semibold text-lg">
                    {specialist.role}
                  </p>
                </div>

                <div className="bg-secondary/50 rounded-xl p-6 border border-border/50 relative">
                  <Quote className="w-8 h-8 text-accent/30 absolute top-4 left-4" />
                  <p className="text-lg italic pl-10">
                    "{specialist.quote}"
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {specialist.description}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SpecialistsSection;
