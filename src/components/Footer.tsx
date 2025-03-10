
import { cn } from "@/lib/utils";
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  ArrowUp, ChevronRight
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-black mb-6 flex items-center gap-2">
              <span className="text-brand-pink">Book</span>
              <span className="text-brand-green text-3xl">&#x2764;</span> {/* Green character placeholder */}
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              We create digital experiences that inspire and drive meaningful connections between brands and their audiences.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-green">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "#home" },
                { name: "About Us", link: "#about" },
                { name: "Our Team", link: "#team" },
                { name: "Our Solutions", link: "#services" },
                { name: "Portfolio", link: "#cases" },
                { name: "Contact Us", link: "#contact" }
              ].map((item, index) => (
                <FooterLink key={index} href={item.link}>{item.name}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-green">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Brand Strategy", link: "#services" },
                { name: "Web Development", link: "#services" },
                { name: "Digital Marketing", link: "#services" },
                { name: "Social Media", link: "#services" },
                { name: "Video Production", link: "#services" }
              ].map((item, index) => (
                <FooterLink key={index} href={item.link}>{item.name}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-green">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-0 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-pink w-full"
              />
              <button className="bg-brand-pink text-white px-4 py-2 rounded-r-lg hover:bg-brand-pink/90 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Book Agency. All rights reserved.
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
        className="fixed bottom-6 right-6 bg-brand-pink hover:bg-brand-pink/90 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
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
    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-pink flex items-center justify-center transition-colors"
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
      <ChevronRight size={16} className="text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity" />
      <span>{children}</span>
    </a>
  </li>
);

export default Footer;
