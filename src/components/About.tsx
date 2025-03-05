
import AnimatedElement from "./AnimatedElement";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Award, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement direction="right" className="order-last lg:order-first">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  alt="Our team"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-card rounded-lg p-4 shadow-lg max-w-[250px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="font-semibold">Award-winning agency</div>
                </div>
                <div className="text-sm text-gray-600">
                  Recognized for excellence in digital innovation
                </div>
              </div>
              
              <div className="absolute -z-10 top-10 -left-10 w-full h-full rounded-2xl border border-gray-100 bg-gray-50"></div>
              <div className="absolute -z-20 top-20 -left-20 w-full h-full rounded-2xl border border-gray-100 bg-gray-50/50"></div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="left">
            <div className="space-y-6">
              <div className="inline-block rounded-full px-3 py-1 text-sm bg-gray-100 text-gray-800 font-medium">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                We create digital experiences that people love
              </h2>
              <p className="text-lg text-gray-600">
                Founded in 2015, we're a team of designers, developers, and strategists passionate about creating exceptional digital solutions that help businesses grow and succeed.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">30+</span>
                  </div>
                  <p className="text-sm text-gray-600">Talented experts</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">8+</span>
                  </div>
                  <p className="text-sm text-gray-600">Years of experience</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">20+</span>
                  </div>
                  <p className="text-sm text-gray-600">Industry awards</p>
                </div>
              </div>
              
              <div className="space-y-4 pt-2">
                <p className="text-gray-600">
                  Our mission is to help businesses transform their digital presence through innovative design, strategic thinking, and technical excellence. We believe in creating meaningful experiences that connect brands with their audiences.
                </p>
                
                <Button className="rounded-full px-6 group">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About;
