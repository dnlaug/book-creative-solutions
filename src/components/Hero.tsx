
import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatedElement className="space-y-4" direction="up">
              <div className="inline-block rounded-full px-3 py-1 text-sm bg-gray-100 text-gray-800 font-medium">
                Digital Agency
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-balance">
                We craft digital experiences that{" "}
                <span className="text-blue-600">matter</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg text-balance">
                We transform your ideas into exceptional digital products through strategic thinking and creative design.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={200} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-6 group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6"
                >
                  Our Work
                </Button>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={400} direction="up">
              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 border-white",
                        `bg-gray-${i * 100}`
                      )}
                    ></div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold">150+</div>
                  <div className="text-sm text-gray-500">Satisfied clients</div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement
            className="relative order-first lg:order-last"
            direction="left"
            delay={300}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital Agency Team"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 glass-card rounded-lg p-4 shadow-lg max-w-[200px] animate-float">
                <div className="font-semibold">Creative Design</div>
                <div className="text-sm text-gray-600">
                  Award-winning designs that inspire
                </div>
              </div>

              <div className="absolute -top-6 -right-6 glass-card rounded-lg p-4 shadow-lg max-w-[200px] animate-float animation-delay-1000">
                <div className="font-semibold">Digital Strategy</div>
                <div className="text-sm text-gray-600">
                  Strategic solutions for growth
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-10 h-10 flex items-center justify-center"
        aria-label="Scroll Down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
