
import { useState } from "react";
import AnimatedElement from "./AnimatedElement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        duration: 5000,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement
          direction="up"
          className="mb-16 max-w-3xl"
        >
          <h2 className="section-title">Contact Us</h2>
          <p className="text-lg text-brand-navy max-w-2xl">
            Ready to start your project? Get in touch with our team and let's create something amazing together.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement direction="right">
            <div className="space-y-8 p-6 md:p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-navy">Email Us</h4>
                  <p className="text-gray-600">hello@bookagency.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-navy">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600 mt-1 flex items-center gap-2">
                    <span>or WhatsApp</span>
                    <a 
                      href="https://w.app/BookCriativos" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-pink hover:underline"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Click here
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-navy">Visit Us</h4>
                  <p className="text-gray-600">123 Creative St, Design City, DC 10101</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  {/* Placeholder for map - would be replaced with an actual map component */}
                  <img 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x400&key=YOUR_API_KEY" 
                    alt="Map location" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="left">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-t-8 border-brand-pink">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Send us a message</h3>
              
              {/* Mascot placeholder */}
              <div className="absolute top-0 right-8 mascot-float hidden lg:block">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-green text-white rounded-full">
                  <span className="text-2xl">&#x2764;</span> {/* Green character placeholder */}
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-brand-navy">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-brand-navy">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-brand-navy">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-brand-navy">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px] rounded-lg border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-lg px-6 py-6 group bg-brand-pink hover:bg-brand-pink/90 text-white shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;
