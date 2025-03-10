
import { useState } from "react";
import AnimatedElement from "./AnimatedElement";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projectCategories = ["All", "Branding", "Web Design", "Social Media", "Video"];

const projects = [
  {
    title: "E-commerce Redesign",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1523475496115-395d03d7dc72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80",
    delay: 0,
  },
  {
    title: "Financial App",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    delay: 150,
  },
  {
    title: "Educational Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    delay: 300,
  },
  {
    title: "Fashion Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1523475496115-395d03d7dc72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80",
    delay: 450,
  },
  {
    title: "Social Media Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    delay: 600,
  },
  {
    title: "Product Launch Video",
    category: "Video",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    delay: 750,
  },
];

const Cases = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="cases" className="section bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement direction="up" className="mb-16 max-w-3xl">
          <h2 className="section-title">Portfolio</h2>
          <p className="text-lg text-brand-navy max-w-2xl">
            Explore our latest projects and see how we've helped businesses transform their 
            digital presence and achieve their marketing objectives.
          </p>
        </AnimatedElement>

        <AnimatedElement direction="up" delay={150} className="mb-8">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {projectCategories.map((category, index) => (
              <button 
                key={index}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all",
                  activeCategory === category 
                    ? "bg-brand-pink text-white shadow-md" 
                    : "bg-white text-brand-navy hover:bg-brand-green/20"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedElement
              key={index}
              direction="up"
              delay={project.delay}
              className="portfolio-item rounded-xl overflow-hidden shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="portfolio-overlay">
                <span className="text-sm font-bold text-brand-green">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {project.title}
                </h3>
                <div className="flex items-start mt-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-white hover:bg-white/20 h-auto gap-1 pl-0 group/btn"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement direction="up" delay={950} className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-lg px-8 group font-medium border-brand-pink text-brand-pink hover:bg-brand-pink/10">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Cases;
