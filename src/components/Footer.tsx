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
    <footer className="bg-gray-900 text-white pt-20 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-semibold mb-6">
              agency<span className="text-[#0168ff]">.</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              We create digital experiences that inspire and drive meaningful connections.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", link: "#about" },
                { name: "Our Work", link: "#cases" },
                { name: "Services", link: "#services" },
                { name: "Contact Us", link: "#contact" }
              ].map((item, index) => (
                <FooterLink key={index} href={item.link}>{item.name}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#0168ff]" />
                <span>123 Creative St, Design City, DC 10101</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="flex-shrink-0 text-[#0168ff]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="flex-shrink-0 text-[#0168ff]" />
                <span>hello@agencywebsite.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Agency. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#0168ff] hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
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
    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#0168ff] flex items-center justify-center transition-colors"
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
        "text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group",
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
