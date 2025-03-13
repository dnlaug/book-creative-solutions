
import { cn } from "@/lib/utils";
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  ArrowUp, Mail, MapPin, Phone
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-2">
              <img 
                src="/lovable-uploads/logo-2.png" 
                alt="Book Criativo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-8 max-w-xs font-mairy">
            Nos contratar é investir em criatividade, estratégia e resultados reais.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-kaleko mb-6 text-stage-50">A empresa</h3>
            <ul className="space-y-4">
              {[
                { name: "Serviços", link: "#services" },
                { name: "Sobre nós", link: "#about" },
                { name: "Portifólio", link: "#cases" },
                { name: "Fale conosco", link: "#contact" }
              ].map((item, index) => (
                <FooterLink key={index} href={item.link}>{item.name}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-kaleko mb-6 text-stage-50">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 font-mairy">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>Telêmaco Borba, Paraná</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-mairy">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <span>+55 (42) 99804-1436</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-mairy">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <span>equipe@bookcriativo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 font-labrador">
            © {currentYear} Book Criativo. Todos os direitos reservados.
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-highlight hover:bg-highlight/90 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-accent flex items-center justify-center transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ 
  children, 
  href,
  className
}: { 
  children: React.ReactNode; 
  href: string;
  className?: string;
}) => (
  <li>
    <a 
      href={href} 
      className={cn(
        "text-gray-400 hover:text-highlight transition-colors flex items-center gap-1.5 group font-labrador",
        className
      )}
    >
      <span className="group-hover:translate-x-1 transition-transform">
        {children}
      </span>
    </a>
  </li>
);

export default Footer;
