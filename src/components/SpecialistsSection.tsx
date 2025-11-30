import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useContent } from "@/hooks/useContent";
import daviPhoto from "@/assets/35b81241-0ea9-47e8-bb5a-cdcaa7aff4c7.jpeg";

const SpecialistsSection = () => {
  const { content } = useContent();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Conheça Nossos Especialistas
            </h2>
            <p className="text-xl md:text-2xl text-[#C9A961] font-semibold">
              Profissionais que vivem o campo de batalha todos os dias.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[500px] bg-gray-100">
                <img
                  src={daviPhoto}
                  alt="Davi Azevedo"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => {
                    console.error("Image failed to load:", daviPhoto);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                    Davi Azevedo
                  </h3>
                  <p className="text-[#C9A961] font-semibold text-lg">
                    Especialista em Vendas Outbound / Head Comercial do Grupo F3S
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 relative">
                  <Quote className="w-8 h-8 text-[#C9A961]/30 absolute top-4 left-4" />
                  <p className="text-lg italic pl-10 text-gray-700 dark:text-gray-300">
                    "Eu não nasci sabendo vender. Eu fui formado."
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Formado por processos, por método, por disciplina e por gente que entendia que vendas não é talento — é educação comercial. E é exatamente isso que faço hoje como Head Comercial da F3S: pego equipes comuns e transformo vendedores em profissionais de alta performance, usando a mesma estrutura que me moldou. Sou fruto de um bom processo. E agora, formo pessoas que querem viver o mesmo padrão.
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
