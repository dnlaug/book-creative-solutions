
import AnimatedElement from "./AnimatedElement";
import { Users, Calendar, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement direction="right" className="order-last lg:order-first">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  alt="Our team"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 highlight-box max-w-[250px] shadow-lg hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-brand-navy">Award-winning agency</div>
                </div>
                <div className="text-sm text-gray-600">
                  Recognized for excellence in digital innovation
                </div>
              </div>
              
              <div className="absolute -z-10 top-10 -left-10 w-full h-full rounded-2xl border border-brand-green bg-brand-green/5 hidden md:block"></div>
              <div className="absolute -z-20 top-20 -left-20 w-full h-full rounded-2xl border border-brand-pink bg-brand-pink/5 hidden md:block"></div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="left">
            <div className="space-y-6">
              <h2 className="section-title">About Us</h2>
              <p className="text-lg text-brand-navy">
                Founded with a passion for creativity and innovation, our marketing agency brings together a team of talented professionals dedicated to helping businesses grow and succeed in today's competitive landscape.
              </p>
              
              <div className="highlight-box my-8">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-pink">&#8226;</span>
                    <span><strong>Excellence</strong> - We strive for excellence in everything we do</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-pink">&#8226;</span>
                    <span><strong>Innovation</strong> - We embrace new ideas and creative solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-pink">&#8226;</span>
                    <span><strong>Integrity</strong> - We operate with honesty and transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-pink">&#8226;</span>
                    <span><strong>Collaboration</strong> - We believe in the power of teamwork</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-pink" />
                    <span className="font-bold text-brand-pink">30+</span>
                  </div>
                  <p className="text-sm text-brand-navy">Talented experts</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-pink" />
                    <span className="font-bold text-brand-pink">8+</span>
                  </div>
                  <p className="text-sm text-brand-navy">Years of experience</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-brand-pink" />
                    <span className="font-bold text-brand-pink">20+</span>
                  </div>
                  <p className="text-sm text-brand-navy">Industry awards</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About;
