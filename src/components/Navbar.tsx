
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Our Solutions", href: "#services" },
  { label: "Portfolio", href: "#cases" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href);
      
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
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
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 md:px-10",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-card"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-kaleko z-50 flex items-center gap-2">
          <span className="text-brand-pink">Book</span>
          <span className="text-brand-green text-3xl">&#x2764;</span> {/* Green heart character as placeholder - replace with actual mascot */}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(item.href);
              }}
              className={cn(
                "nav-link text-sm font-medium transition-colors hover:text-brand-pink",
                activeSection === item.href ? "text-brand-pink active" : "text-brand-navy"
              )}
            >
              {item.label}
            </a>
          ))}
          <Button 
            size="sm" 
            className="rounded-lg bg-brand-pink hover:bg-brand-pink/90 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("#contact");
            }}
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} className="text-brand-pink" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-xl font-medium transition-colors hover:text-brand-pink",
                activeSection === item.href ? "text-brand-pink" : "text-brand-navy"
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <Button 
            size="lg" 
            className="rounded-lg mt-4 bg-brand-pink hover:bg-brand-pink/90 text-white shadow-md"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("#contact");
            }}
          >
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
