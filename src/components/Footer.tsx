import { MapPin, Mail, Phone } from "lucide-react";
import f3sLogo from "@/assets/f3s-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={f3sLogo} alt="F3S Logo" className="h-16 w-auto" />
            <p className="text-sm opacity-80 leading-relaxed">
              Escola presencial de estratégia digital que forma equipes de alta performance 
              em marketing e vendas.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Contato</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Itapema, Santa Catarina</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>(47) 99999-9999</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>contato@f3s.com.br</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Horário de Atendimento</h4>
            <div className="text-sm opacity-80 space-y-2">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} F3S. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
