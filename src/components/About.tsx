
import AnimatedElement from "./AnimatedElement";
import { Users, Calendar, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section bg-white">
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
              
              <div className="absolute -bottom-6 -right-6 glass-card rounded-lg p-4 shadow-lg max-w-[250px] hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#0168ff]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="font-semibold">Award-winning agency</div>
                </div>
                <div className="text-sm text-gray-600">
                  Recognized for excellence in digital innovation
                </div>
              </div>
              
              <div className="absolute -z-10 top-10 -left-10 w-full h-full rounded-2xl border border-gray-100 bg-gray-50 hidden md:block"></div>
              <div className="absolute -z-20 top-20 -left-20 w-full h-full rounded-2xl border border-gray-100 bg-gray-50/50 hidden md:block"></div>
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
                    <Users className="w-5 h-5 text-[#0168ff]" />
                    <span className="font-semibold">30+</span>
                  </div>
                  <p className="text-sm text-gray-600">Talented experts</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#0168ff]" />
                    <span className="font-semibold">8+</span>
                  </div>
                  <p className="text-sm text-gray-600">Years of experience</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#0168ff]" />
                    <span className="font-semibold">20+</span>
                  </div>
                  <p className="text-sm text-gray-600">Industry awards</p>
                </div>
              </div>
              
              <div className="space-y-4 pt-2">
                <p className="text-gray-600">
                  Our mission is to help businesses transform their digital presence through innovative design, strategic thinking, and technical excellence. We believe in creating meaningful experiences that connect brands with their audiences.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
      
      {/* Testimonials Carousel */}
      <div className="mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedElement direction="up" className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">What our clients say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've helped hundreds of businesses succeed. Here's what they have to say about working with us.
            </p>
          </AnimatedElement>
          
          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  );
};

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      quote: "Working with this agency transformed our online presence. They understood our vision and executed it flawlessly.",
      author: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      quote: "The team's creativity and technical expertise helped us achieve results we never thought possible. Highly recommended!",
      author: "Michael Chen",
      position: "Marketing Director, GrowthLabs",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      quote: "From strategy to execution, their work exceeded our expectations. Our conversion rates have improved by 200%.",
      author: "Emma Rodriguez",
      position: "Founder, StyleHouse",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex flex-nowrap overflow-x-auto scrollbar-hide pb-10 -mx-4 px-4 snap-x snap-mandatory">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 snap-start"
            >
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full flex flex-col">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 16H4L8 8H12L9.33333 16ZM19.3333 16H14L18 8H22L19.3333 16Z" fill="#0168ff" fillOpacity="0.2"/>
                    <path d="M13.3333 24H8L12 16H16L13.3333 24ZM23.3333 24H18L22 16H26L23.3333 24Z" fill="#0168ff"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${index === 0 ? 'bg-[#0168ff]' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
