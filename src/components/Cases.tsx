
import { useState, useEffect } from "react";
import AnimatedElement from "./AnimatedElement";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ArrowRight as RightArrow, Quote } from "lucide-react";

const projects = [
  {
    title: "E-commerce Redesign",
    category: "UI/UX & Development",
    image: "https://images.unsplash.com/photo-1523475496115-395d03d7dc72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80",
    delay: 0,
  },
  {
    title: "Financial App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    delay: 150,
  },
  {
    title: "Educational Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    delay: 300,
  },
];

const testimonials = [
  {
    content: "Working with this team was a game-changer for our business. They understood our vision and delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    content: "Their strategic approach and attention to detail transformed our online presence and significantly increased our conversions.",
    author: "Michael Chen",
    position: "CEO, Innovate Inc",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    content: "The team's creativity and technical expertise helped us launch a product that our customers love. Highly recommended!",
    author: "Emily Rodriguez",
    position: "Product Manager, NextGen Solutions",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    content: "They delivered our project on time and on budget, with excellent communication throughout the entire process.",
    author: "David Wilson",
    position: "Founder, Startup Ventures",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
];

const Cases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="cases" className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement direction="up" className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block rounded-full px-3 py-1 text-sm bg-gray-200 text-gray-800 font-medium mb-4">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Featured projects
          </h2>
          <p className="text-lg text-gray-600 text-balance">
            Explore our portfolio of successful projects that have helped our clients achieve their goals.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedElement
              key={index}
              direction="up"
              delay={project.delay}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl hover-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm font-medium text-blue-300">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-1">
                    {project.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full sm:w-auto min-w-[140px] mt-3 text-white hover:text-white hover:bg-white/20 h-auto gap-1 group/btn"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement direction="up" delay={450} className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8 group">
            View All Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimatedElement>

        <AnimatedElement direction="up" delay={600} className="mt-24">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                What our clients say about us
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're proud of the relationships we've built and the impact we've made for our clients.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <div 
                  className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                  style={{ transform: isAnimating ? 'scale(0.96)' : 'scale(1)' }}
                >
                  <div className="relative p-8 md:p-10 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="absolute top-6 left-6 text-blue-600/20">
                      <Quote size={48} className="rotate-180" />
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-lg md:text-xl text-gray-700 font-medium mb-8">
                        {testimonials[currentIndex].content}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold">{testimonials[currentIndex].author}</div>
                          <div className="text-sm text-gray-500">{testimonials[currentIndex].position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 gap-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentIndex === idx ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={18} />
                </button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6">
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <RightArrow size={18} />
                </button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Cases;
