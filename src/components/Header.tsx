import { useState, useEffect } from "react";
import { Menu, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ShinyButton";
import f3sLogo from "@/assets/f3s-logo.png";
import { useContent } from "@/hooks/useContent";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content } = useContent();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fullMenuItems = [
    { label: "Início", id: "hero", isScroll: true, targetPath: '/' },
    { label: "O Ecossistema", id: "institutional", isScroll: true, targetPath: '/' },
    { label: "Soluções", id: "solutions", isScroll: true, targetPath: '/' },
    { label: "Método", id: "method", isScroll: true, targetPath: '/' },
    { label: "F3S Team", id: "team", isScroll: false, targetPath: '/team' },
  ];


  const handleScrollOrNavigate = (item: typeof fullMenuItems[0] | { id: string, isScroll: boolean, targetPath: string }) => {
    setIsMobileMenuOpen(false);
    
    if (item.targetPath === location.pathname && item.isScroll) {
      // Scroll on the current page
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    } else if (item.targetPath !== location.pathname) {
      // Navigate to a different page or section on the home page
      if (item.isScroll) {
        // Navigate to home page and include hash for scrolling
        navigate(`/${item.targetPath === '/' ? '' : item.targetPath}#${item.id}`);
      } else {
        // Navigate to a different page (like /team)
        navigate(item.targetPath);
      }
    } else if (item.id === 'hero') {
      // Handle 'Início' click when already on the home page
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // Handle initial hash scrolling if navigating from another page
  useEffect(() => {
    if (location.hash && isHomePage) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Wait for the page to render and scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location, isHomePage]);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible || !isHomePage // Always show header on subpages or if scrolled on home
          ? "translate-y-0 opacity-100 backdrop-blur-lg bg-background/90 shadow-lg border-b border-border/50"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={content['image.logo'] || f3sLogo} 
              alt="F3S Logo" 
              className="h-10 md:h-12 w-auto" 
            />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {fullMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollOrNavigate(item)}
                className="text-foreground/80 hover:text-accent font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            
            <div className="flex flex-col items-center gap-1">
              <ShinyButton
                onClick={() => handleScrollOrNavigate({ id: 'contact', isScroll: true, targetPath: '/' })}
                size="default"
              >
                <Rocket className="w-4 h-4" />
                Diagnóstico
              </ShinyButton>
              <span className="text-[10px] text-muted-foreground">Agende o diagnóstico gratuito</span>
            </div>
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
            {fullMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollOrNavigate(item)}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2 flex flex-col items-center gap-2">
              <ShinyButton
                onClick={() => handleScrollOrNavigate({ id: 'contact', isScroll: true, targetPath: '/' })}
                size="default"
                className="w-full"
              >
                <Rocket className="w-4 h-4" />
                Agendar Diagnóstico
              </ShinyButton>
              <span className="text-xs text-muted-foreground">Agende o diagnóstico gratuito</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;