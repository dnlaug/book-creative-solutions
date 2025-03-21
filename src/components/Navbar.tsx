import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
type NavItem = {
  label: string;
  href: string;
};
const navItems: NavItem[] = [{
  label: "Início",
  href: "#home"
}, {
  label: "Serviços",
  href: "#services"
}, {
  label: "Sobre nós",
  href: "#about"
}, {
  label: "Portifólio",
  href: "#cases"
},];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const handleNavLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }, 100);
    }
  };
  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 md:px-10", scrolled ? "bg-primary shadow-sm backdrop-blur-card" : "bg-primary")}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="z-50">
          <img src="/lovable-uploads/logo-2.png" alt="Book Criativo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation - Increased font size from text-base to text-sm */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map(item => <a key={item.href} href={item.href} onClick={e => {
          e.preventDefault();
          handleNavLinkClick(item.href);
        }} className="text-white transition-colors hover:text-white/80 font-labrador text-md">
              {item.label}
            </a>)}
            <Button size="sm" className="rounded-full px-6 bg-highlight hover:bg-highlight/90 font-labrador text-white" onClick={e => {
           e.preventDefault();
           handleNavLinkClick("#contact");
         }}>
             Fale conosco
           </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden flex items-center z-50" aria-label="Toggle Menu">
          {isOpen ? <X size={24} className="text-accent" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Also increased font size */}
      <div className={cn("fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden", isOpen ? "translate-x-0" : "translate-x-full")}>
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map(item => <a key={item.href} href={item.href} className="text-2xl font-kalelo transition-colors hover:text-primary" onClick={e => {
          e.preventDefault();
          handleNavLinkClick(item.href);
        }}>
              {item.label}
            </a>)}
            <Button size="lg" className="rounded-full mt-4 px-8 bg-highlight hover:bg-highlight/90 font-labrador text-white" onClick={e => {
           e.preventDefault();
           handleNavLinkClick("#contact");
         }}>
             Fale Conosco
           </Button>
        </nav>
      </div>
    </header>
)};
export default Navbar;