import { cn } from "@/lib/utils";
import AnimatedElement from "./AnimatedElement";
import { Lightbulb, BarChart3, Code, Palette, MonitorSmartphone, MessageSquare, CheckCircle } from "lucide-react";
const services = [{
  icon: <Lightbulb className="w-6 h-6" />,
  title: "Strategy",
  description: "We develop targeted strategies to grow your business and reach your audience.",
  delay: 0
}, {
  icon: <Palette className="w-6 h-6" />,
  title: "UI/UX Design",
  description: "Create beautiful, intuitive interfaces that enhance user experiences.",
  delay: 0
}, {
  icon: <Code className="w-6 h-6" />,
  title: "Development",
  description: "Expert web and mobile solutions built with the latest technologies.",
  delay: 0
}, {
  icon: <MonitorSmartphone className="w-6 h-6" />,
  title: "Responsive",
  description: "All solutions perfectly adapt to any device and screen size.",
  delay: 0
}, {
  icon: <BarChart3 className="w-6 h-6" />,
  title: "Analytics",
  description: "Data-driven insights to improve performance and ROI.",
  delay: 0
}, {
  icon: <MessageSquare className="w-6 h-6" />,
  title: "Support",
  description: "Ongoing assistance and maintenance for sustained success.",
  delay: 0
}];
const Services = () => {
  return <section id="services" className="section bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement direction="up" className="text-center mb-16 max-w-2xl mx-auto">
          { <div className="inline-block rounded-full px-6 py-1 text-md bg-highlight/80 text-white font-labrador mb-6">
            Serviços
          </div> }
          <h2 className="text-3xl md:text-4xl font-kaleko mb-4 tracking-tight text-highlight">
            Criatividade sem limites e foco em resultados
          </h2>
          <p className="text-lg text-gray-800 text-balance font-mairy">
            Nós transformamos ideias em experiências inesquecíveis.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <AnimatedElement key={index} direction="up" delay={service.delay} className="hover-shadow rounded-xl bg-white p-6 border border-gray-100">
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-kaleko mb-2">{service.title}</h3>
              <p className="text-gray-600 font-mairy">{service.description}</p>
            </AnimatedElement>)}
        </div>

        <AnimatedElement direction="up" delay={800} className="mt-16 bg-gradient-to-br from-primary/5 to-highlight/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <h3 className="text-2xl md:text-3xl font-kaleko mb-4 text-highlight">Pronto para fazer seu negócio crescer?</h3>
              <p className="text-gray-600 mb-6 font-mairy">
              Vamos colaborar para criar algo incrível juntos. Nossa equipe está pronta para ajudar você a alcançar seus objetivos.
              </p>
              <div className="space-y-4">
                {["Planejamento digital estratégico", "Soluções criativas de design", "Desenvolvimento especializado", "Suporte contínuo"].map((item, index) => <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="font-labrador">{item}</span>
                  </div>)}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Team collaboration" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>;
};
export default Services;