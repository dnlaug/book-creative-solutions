
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Cases from "@/components/Cases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-reveal");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if (position.top < window.innerHeight * 0.85) {
          element.classList.add("revealed");
        }
      });
    };

    // Initial check
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Apply patterns to alternating sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      if (index % 3 === 0) {
        section.classList.add("pattern-dots");
      } else if (index % 3 === 1) {
        section.classList.add("pattern-grid");
      } else {
        section.classList.add("pattern-diagonal");
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-blue">
      <Navbar />
      <Hero />
      <div className="relative">
        <Services />
        <About />
        <Cases />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
