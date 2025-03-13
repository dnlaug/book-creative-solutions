import { useState } from "react";
import AnimatedElement from "./AnimatedElement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, CheckCircle, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Using the provided service ID and template ID
      const serviceId = 'service_u36l5ov';
      const templateId = 'template_w5mvekb';
      // Using the provided EmailJS User ID
      const userId = 'AOuMRmP3mHsFLYAjs';
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message
      };
      await emailjs.send(serviceId, templateId, templateParams, userId);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        duration: 5000,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="section relative overflow-hidden">
      {/* Background elements inspired by the provided images */}
      <div className="absolute top-0 -z-10 left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block w-full scale-y-[-1]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#F9FAFB"
      fillOpacity="1"
      d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,138.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
</div>

     
      <div className="absolute bottom-0 -z-10 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full translate-y-1/4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffb138"
              fillOpacity="1"
              d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,138.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-[#3be991] opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-[#ffb138] opacity-20 blur-3xl -z-10"></div>
      
      <div className="container relative mx-auto px-4 md:px-6 py-16">
        <AnimatedElement direction="up" className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block rounded-full px-4 py-1 text-sm bg-[#3be991]/90 text-white font-labrador mb-4">
            Fale Conosco
          </div>
          <h2 className="text-5xl md:text-6xl font-kaleko mb-6 tracking-tight text-[#fe206b]">
            Vamos trabalhar juntos!
          </h2>
          <p className="text-lg text-gray-600 text-balance font-mairy">
          Tem um projeto em mente ou precisa de ajuda? Entre em contato e vamos criar algo incrível.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement direction="right">
            {/* Fixed height card for the left side */}
            <div className="space-y-8 p-6 md:p-8 bg-white rounded-2xl shadow-xl h-full flex flex-col">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ffb138]/20 flex items-center justify-center text-[#ffb138] flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-kaleko text-xl">equipe@bookcriativo.com</h4>
                  <p className="text-gray-600 font-mairy">Nos contate por e-mail</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ffb138]/20 flex items-center justify-center text-[#ffb138] flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-kaleko text-xl">+55 (42) 99804-1436</h4>
                  <p className="text-gray-600 mt-1 flex items-center gap-2 font-labrador">
                    <a href="https://w.app/BookCriativos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#00ff77] hover:underline">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#ffb138]/10 flex-grow">
                <h3 className="text-2xl font-kaleko mb-4 text-[#fe206b]">Processo Criativo</h3>
                <div className="space-y-4">
                  {[{
                  step: "Descoberta",
                  desc: "Entendemos seus objetivos de negócio e desafios"
                }, {
                  step: "Estratégia",
                  desc: "Criamos um plano personalizado para alcançar suas metas"
                }, {
                  step: "Design & Desenvolvimento",
                  desc: "Vamos dar vida à sua visão"
                }, {
                  step: "Lançamento",
                  desc: "Cuidamos de cada detalhe"
                }].map((item, idx) => <div key={idx} className="flex gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${idx % 3 === 0 ? "text-highlight" : idx % 3 === 1 ? "text-highlight" : "text-highlight"}`} />
                      <div>
                        <div className="font-kaleko">{item.step}</div>
                        <div className="text-sm text-gray-600 font-mairy">{item.desc}</div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="left">
            {/* Fixed height card for the right side */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-t-8 border-[#3be991] h-full flex flex-col">
              <h3 className="text-2xl font-kaleko mb-6 text-[#fe206b]">Nos envie uma mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                <div>
                  <label htmlFor="name" className="block text-md font-labrador mb-2">
                    Nome
                  </label>
                  <Input id="name" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className="w-full border-[#ffb138]/30 focus:border-[#ffb138] focus:ring-[#ffb138] font-mairy" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-md font-labrador mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} required className="w-full border-[#ffb138]/30 focus:border-[#ffb138] focus:ring-[#ffb138] font-mairy" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-md font-labrador mb-2">
                    Telefone
                  </label>
                  <Input id="phone" name="phone" type="tel" placeholder="Seu número de telefone" value={formData.phone} onChange={handleChange} className="w-full border-[#ffb138]/30 focus:border-[#ffb138] focus:ring-[#ffb138] font-mairy" />
                </div>

                <div className="flex-grow">
                  <label htmlFor="message" className="block text-md font-labrador mb-2">
                    Mensagem
                  </label>
                  <Textarea id="message" name="message" placeholder="Fale sobre seu projeto e/ou ideia" value={formData.message} onChange={handleChange} required className="w-full border-[#ffb138]/30 focus:border-[#ffb138] focus:ring-[#ffb138] font-mairy" />
                </div>

                <Button type="submit" className="w-full rounded-full px-6 py-6 group bg-[#fe206b] hover:bg-[#fe206b]/90 text-white font-labrador mt-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Envie sua mensagem"}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>;
};
export default Contact;