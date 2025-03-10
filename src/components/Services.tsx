
import { cn } from "@/lib/utils";
import AnimatedElement from "./AnimatedElement";
import { 
  Palette, BarChart3, Code, 
  MonitorSmartphone, Video, PenTool,
  Lightbulb, CheckCircle, Award
} from "lucide-react";

const serviceCategories = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Brand",
    services: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines"],
    delay: 0,
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: "Digital",
    services: ["Website Development", "Social Media Management", "SEO Optimization", "Email Campaigns"],
    delay: 150,
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Audio & Video",
    services: ["Video Production", "Motion Graphics", "Sound Design", "Video Editing"],
    delay: 300,
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Strategy",
    services: ["Market Research", "Competitive Analysis", "Campaign Planning", "Growth Strategies"],
    delay: 450,
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Creation",
    services: ["Content Creation", "Copywriting", "Graphic Design", "UI/UX Design"],
    delay: 600,
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement direction="up" className="mb-16 max-w-3xl">
          <h2 className="section-title">Our Solutions</h2>
          <p className="text-lg text-brand-navy max-w-2xl">
            We offer comprehensive marketing solutions tailored to your specific needs, 
            combining creative thinking with strategic execution to help your business grow.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <AnimatedElement 
              key={index} 
              direction="up" 
              delay={category.delay}
              className="service-card group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-brand-green/20 text-brand-green mb-6">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-pink transition-colors">{category.title}</h3>
              <ul className="space-y-2">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-pink mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement direction="up" delay={750} className="mt-20 highlight-box">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">Why choose us?</h3>
              <p className="text-brand-navy mb-6">
                Our unique approach combines creativity with data-driven strategies to deliver measurable results for your business.
              </p>
              <div className="space-y-4">
                {[
                  "Strategic thinking with creative execution",
                  "Dedicated team of industry experts",
                  "Proven track record of success",
                  "Customized solutions for each client"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="w-5 h-5 text-brand-pink mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-pink rounded-xl -z-10"></div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Services;
