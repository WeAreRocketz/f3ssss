import { GraduationCap, Code, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ShinyButton from "@/components/ShinyButton";
import { useContent } from "@/hooks/useContent";
import { Link } from "react-router-dom";

const SolutionsSection = () => {
  const { content } = useContent();

  const solutions = [
    {
      id: 1,
      icon: GraduationCap,
      title: content['ecosystem.solution1.title'],
      description: content['ecosystem.solution1.description'],
      subdescription: content['ecosystem.solution1.subdescription'],
      items: [
        content['ecosystem.solution1.item1'],
        content['ecosystem.solution1.item2'],
        content['ecosystem.solution1.item3'],
        content['ecosystem.solution1.item4'],
        content['ecosystem.solution1.item5'],
      ],
      cta: content['ecosystem.solution1.cta'],
      url: content['ecosystem.solution1.url'],
    },
    {
      id: 2,
      icon: Code,
      title: content['ecosystem.solution2.title'],
      description: content['ecosystem.solution2.description'],
      subdescription: content['ecosystem.solution2.subdescription'],
      items: [
        content['ecosystem.solution2.item1'],
        content['ecosystem.solution2.item2'],
        content['ecosystem.solution2.item3'],
        content['ecosystem.solution2.item4'],
        content['ecosystem.solution2.item5'],
        content['ecosystem.solution2.item6'],
      ],
      cta: content['ecosystem.solution2.cta'],
      url: content['ecosystem.solution2.url'],
    },
    {
      id: 3,
      icon: TrendingUp,
      title: content['ecosystem.solution3.title'],
      description: content['ecosystem.solution3.description'],
      subdescription: content['ecosystem.solution3.subdescription'],
      items: [
        content['ecosystem.solution3.item1'],
        content['ecosystem.solution3.item2'],
        content['ecosystem.solution3.item3'],
        content['ecosystem.solution3.item4'],
        content['ecosystem.solution3.item5'],
        content['ecosystem.solution3.item6'],
      ],
      cta: content['ecosystem.solution3.cta'],
      url: content['ecosystem.solution3.url'],
    },
  ];

  const renderCta = (url: string, ctaText: string) => {
    const isInternal = url.startsWith('/');
    
    if (isInternal) {
      return (
        <Link to={url} className="w-full">
          <ShinyButton variant="outline" className="w-full mt-6">
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </ShinyButton>
        </Link>
      );
    }

    return (
      <a href={url} className="w-full" onClick={(e) => {
        if (url.startsWith('#')) {
          e.preventDefault();
          document.getElementById(url.substring(1))?.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
        <ShinyButton variant="outline" className="w-full mt-6">
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </ShinyButton>
      </a>
    );
  };

  return (
    <section id="solutions" className="section-padding bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                {content['ecosystem.solutions.headline']}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <ScrollReveal key={index} delay={200 + index * 150}>
                <div className="relative bg-card rounded-3xl p-8 space-y-6 shadow-xl border border-border hover:border-accent/40 transition-all duration-300 hover-lift flex flex-col h-full">
                  <div className="flex items-center gap-4 pb-4 border-b border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shadow-[0_0_20px_rgba(197,162,83,0.3)]">
                      <solution.icon className="w-6 h-6 text-accent gold-shine-light" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gradient-gold">{solution.id}</h3>
                  </div>
                  
                  <h4 className="text-2xl font-heading font-bold leading-snug">{solution.title}</h4>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">{solution.description}</p>
                  <p className="text-foreground font-medium leading-relaxed text-base">{solution.subdescription}</p>

                  <ul className="space-y-3 pt-4 flex-grow">
                    {solution.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-accent/5 transition-all">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1 gold-shine-light" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {renderCta(solution.url, solution.cta)}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;