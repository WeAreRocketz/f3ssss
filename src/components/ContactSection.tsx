import ShinyButton from "@/components/ShinyButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Rocket, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    whatsapp: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `Olá! Vim pelo site da F3S.

*Nome:* ${formData.name}
*Empresa:* ${formData.company}
*Cargo:* ${formData.role}
*WhatsApp:* ${formData.whatsapp}

Quero saber mais sobre o programa F3S TEAM!`;

    const whatsappUrl = `https://wa.me/5547999999999?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será atendido em instantes.",
    });

    // Reset form
    setFormData({ name: "", company: "", role: "", whatsapp: "" });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Golden top lighting */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-accent/20 via-accent/10 to-transparent pointer-events-none z-10" />
      
      {/* Animated golden circle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-animated-circle" style={{ top: '20em' }} />
      </div>
      
      {/* Background decoration */}
      <AnimatedBackground />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <ScrollReveal>
          <div className="text-center space-y-6 px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-sm font-semibold text-accent">
              <Rocket className="w-4 h-4" />
              Dê o Primeiro Passo
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Quer ter um time que entende, executa e escala o seu negócio?
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Agende um diagnóstico gratuito e descubra como aplicar o método F3S na sua empresa.
            </p>
          </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={200}>
          <div className="relative bg-card/40 backdrop-blur-xl border border-accent/20 text-card-foreground rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl" />
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">Nome Completo *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 text-base border-2 focus:border-accent bg-background/50 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-base font-semibold">Empresa *</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Nome da sua empresa"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 text-base border-2 focus:border-accent bg-background/50 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-base font-semibold">Cargo *</Label>
                <Input
                  id="role"
                  type="text"
                  placeholder="Seu cargo na empresa"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="h-12 text-base border-2 focus:border-accent bg-background/50 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-base font-semibold">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(47) 99999-9999"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="h-12 text-base border-2 focus:border-accent bg-background/50 backdrop-blur-sm"
                />
              </div>

              <ShinyButton 
                type="submit"
                size="lg"
                className="w-full"
              >
                <Rocket className="w-5 h-5" />
                Quero Treinar Minha Equipe com a F3S
                <Send className="w-5 h-5" />
              </ShinyButton>

              <p className="text-center text-sm text-muted-foreground">
                * Todos os campos são obrigatórios
              </p>
            </form>
          </div>
          </ScrollReveal>

          {/* Trust elements */}
          <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Resposta rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Diagnóstico gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Sem compromisso</span>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
