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
  return <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-[0067FF]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <AnimatedElement className="space-y-4" direction="up">
              <div className="inline-block rounded-full px-3 py-1 text-sm bg-gray-100 text-gray-800 font-labrador">
                Digital Agency
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-kaleko leading-tight tracking-tighter text-balance">
                We craft digital experiences that{" "}
                <span className="text-brand-pink">matter</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg text-balance font-mairy">
                We transform your ideas into exceptional digital products through strategic thinking and creative design.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={200} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => handleButtonClick("#contact")} className="rounded-full px-6 group font-labrador bg-brand-orange">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6 font-labrador border-brand-orange text-brand-orange hover:bg-brand-orange/10" onClick={() => handleButtonClick("#cases")}>
                  Our Work
                </Button>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={400} direction="up">
              <div className="flex items-center gap-6 pt-4 md:pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => <div key={i} className={cn("w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white", `bg-gray-${i * 100}`)}></div>)}
                </div>
                <div>
                  <div className="font-kaleko">150+</div>
                  <div className="text-sm text-gray-500 font-mairy">Satisfied clients</div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement className="relative order-first lg:order-last" direction="left" delay={300}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-brand-orange/20 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Digital Agency Team" className="w-full h-auto rounded-xl object-cover" loading="eager" />
              </div>

              <div className="absolute -bottom-6 -left-6 glass-card rounded-lg p-4 shadow-lg max-w-[200px] animate-float hidden sm:block">
                <div className="font-kaleko text-brand-pink">Creative Design</div>
                <div className="text-sm text-gray-600 font-mairy">
                  Award-winning designs that inspire
                </div>
              </div>

              <div className="absolute -top-6 -right-6 glass-card rounded-lg p-4 shadow-lg max-w-[200px] animate-float animation-delay-1000 hidden sm:block">
                <div className="font-kaleko text-brand-green">Digital Strategy</div>
                <div className="text-sm text-gray-600 font-mairy">
                  Strategic solutions for growth
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <button onClick={scrollToNext} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-10 h-10 flex items-center justify-center" aria-label="Scroll Down">
        <ChevronDown size={24} className="text-brand-orange" />
      </button>
    </section>;
};
export default Hero;