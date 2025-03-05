
import { cn } from "@/lib/utils";
import AnimatedElement from "./AnimatedElement";
import { 
  Lightbulb, BarChart3, Code, Palette,
  MonitorSmartphone, MessageSquare, CheckCircle
} from "lucide-react";

const services = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Strategy",
    description: "We develop targeted strategies to grow your business and reach your audience.",
    delay: 0,
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Create beautiful, intuitive interfaces that enhance user experiences.",
    delay: 150,
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Development",
    description: "Expert web and mobile solutions built with the latest technologies.",
    delay: 300,
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Responsive",
    description: "All solutions perfectly adapt to any device and screen size.",
    delay: 450,
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics",
    description: "Data-driven insights to improve performance and ROI.",
    delay: 600,
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Support",
    description: "Ongoing assistance and maintenance for sustained success.",
    delay: 750,
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement direction="up" className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block rounded-full px-3 py-1 text-sm bg-gray-200 text-gray-800 font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Transforming visions into digital reality
          </h2>
          <p className="text-lg text-gray-600 text-balance">
            Our comprehensive digital services that help businesses grow and succeed in the digital landscape.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement 
              key={index} 
              direction="up" 
              delay={service.delay}
              className="hover-shadow rounded-xl bg-white p-6 border border-gray-100"
            >
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement direction="up" delay={800} className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to grow your business?</h3>
              <p className="text-gray-600 mb-6">
                Let's collaborate to create something amazing together. Our team is ready to help you achieve your goals.
              </p>
              <div className="space-y-4">
                {[
                  "Strategic digital planning",
                  "Creative design solutions",
                  "Expert development",
                  "Ongoing support and growth"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Services;
