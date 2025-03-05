
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  threshold?: number;
  duration?: number;
  once?: boolean;
}

const AnimatedElement = ({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.2,
  duration = 800,
  once = true,
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const getInitialStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-10 opacity-0";
      case "down":
        return "-translate-y-10 opacity-0";
      case "left":
        return "translate-x-10 opacity-0";
      case "right":
        return "-translate-x-10 opacity-0";
      default:
        return "translate-y-10 opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible
          ? "translate-y-0 translate-x-0 opacity-100"
          : getInitialStyles(),
        "transition-all transform",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
