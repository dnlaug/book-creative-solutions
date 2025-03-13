import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown } from "lucide-react";
const Hero = () => {
  const scrollToNext = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const handleButtonClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }, 100);
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b bg-primary" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <AnimatedElement className="space-y-4" direction="up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-kaleko leading-tight text-balance lg:text-7xl text-slate-50">
              Redefinimos o {" "}
                <span className="text-highlight">extraordinário.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-lg text-balance font-mairy text-slate-50">
              Estamos aqui para trazer soluções inteligentes e inovadoras em um mundo cada vez mais digital.
              </p>
            </AnimatedElement>
            <AnimatedElement delay={200} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-6 font-labrador text-lg group bg-highlight hover:bg-highlight/90 text-white" onClick={() => handleButtonClick("#contact")}>
                  Fale conosco
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement className="relative order-first lg:order-last" direction="left" delay={300}>
            <div className="relative mx-auto w-full max-w-3xl lg:max-w-5xl">
              <div className="relative p-1">
                <img 
                  alt="Book Creative Solutions" 
                  loading="eager" 
                  className="w-full h-auto rounded-xl" 
                  src="/lovable-uploads/logo.jpeg" 
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      
      {/* Onda no final da seção ou translate-y-1/4*/}
        <div className="absolute bottom-0 -z-10 left-0 w-full overflow-hidden leading-none ">
          <svg
            className="relative block w-full translate-y-1/4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,138.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <button onClick={scrollToNext} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-10 h-10 flex items-center justify-center" aria-label="Scroll Down">
        <ChevronDown size={24} className="text-highlight" />
      </button>
    </section>;
};
export default Hero;