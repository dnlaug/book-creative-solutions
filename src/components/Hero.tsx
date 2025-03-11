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
  return <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-base-light bg-blue-700">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-highlight/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <AnimatedElement className="space-y-4" direction="up">
              <div className="inline-block rounded-full px-3 py-1 text-sm bg-gray-200 text-gray-800 font-labrador">
                Digital Agency
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-kaleko leading-tight tracking-tighter text-balance lg:text-6xl text-slate-50">
                We craft digital experiences that{" "}
                <span className="text-highlight">matter</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-lg text-balance font-mairy text-slate-50">
                We transform your ideas into exceptional digital products through strategic thinking and creative design.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={200} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-6 group bg-highlight hover:bg-highlight/90 font-labrador text-white" onClick={() => handleButtonClick("#contact")}>
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => handleButtonClick("#cases")} className="rounded-full px-6 font-labrador border-primary text-primary hover:bg-primary/10">
                  Our Work
                </Button>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement className="relative order-first lg:order-last" direction="left" delay={300}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative p-1">
                <img alt="Digital Agency Team" loading="eager" className="w-full h-auto rounded-xl object-cover" src="/lovable-uploads/6c4d0c89-a364-4ff6-9cbc-48bf2f9ac45d.png" />
              </div>

              

              
            </div>
          </AnimatedElement>
        </div>
      </div>

      <button onClick={scrollToNext} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-10 h-10 flex items-center justify-center" aria-label="Scroll Down">
        <ChevronDown size={24} className="text-highlight" />
      </button>
    </section>;
};
export default Hero;