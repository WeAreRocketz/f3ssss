import { useState, useEffect } from "react";
import { Menu, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ShinyButton";
import f3sLogo from "@/assets/f3s-logo.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "Início", id: "hero" },
    { label: "Diferenciais", id: "diferenciais" },
    { label: "Fundadores", id: "fundadores" },
    { label: "Programa", id: "programa" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100 backdrop-blur-lg bg-background/90 shadow-lg border-b border-border/50"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={f3sLogo} alt="F3S Logo" className="h-10 md:h-12 w-auto" />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-accent font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <ShinyButton
              onClick={() => scrollToSection("contact")}
              size="default"
            >
              <Calendar className="w-4 h-4" />
              Agendar Diagnóstico
            </ShinyButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <ShinyButton
                onClick={() => scrollToSection("contact")}
                size="default"
                className="w-full"
              >
                <Calendar className="w-4 h-4" />
                Agendar Diagnóstico
              </ShinyButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
