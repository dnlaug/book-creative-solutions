
import AnimatedElement from "./AnimatedElement";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

const Cases = () => {
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
                    className="w-fit mt-3 text-white hover:text-white hover:bg-white/20 p-0 h-auto gap-1 group/btn"
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  What our clients say about us
                </h3>
                <p className="text-gray-600 mb-6">
                  We're proud of the relationships we've built and the impact we've made for our clients.
                </p>
                <Button className="rounded-full px-6 group">
                  Read All Testimonials
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 gap-6">
                <blockquote className="p-6 border border-gray-100 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    "Working with this team was a game-changer for our business. They understood our vision and delivered beyond our expectations."
                  </p>
                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">Marketing Director, TechCorp</div>
                    </div>
                  </footer>
                </blockquote>

                <blockquote className="p-6 border border-gray-100 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    "Their strategic approach and attention to detail transformed our online presence and significantly increased our conversions."
                  </p>
                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                      <div className="font-medium">Michael Chen</div>
                      <div className="text-sm text-gray-500">CEO, Innovate Inc</div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Cases;
