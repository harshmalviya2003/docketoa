"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// AI tool related icons
const AI_ICONS = [
  '🤖', // Robot
  '🛠️', // Tools
  '🔍', // Magnifying glass
  '🧪', // Test tube
  '🐞', // Bug
  '📊', // Chart
  '⚙️', // Gear
  '🔧', // Wrench
  '🧠', // Brain (AI)
  '📝', // Document
  '🔎', // Magnifier
  '💻', // Computer
];

type FloatingIconElement = HTMLDivElement & {
  dataset: {
    speedX?: string;
    speedY?: string;
    name?: string;
  };
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<FloatingIconElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating AI icons
    iconsRef.current = Array.from({ length: 12 }).map((_, i) => {
      const icon = document.createElement('div') as FloatingIconElement;
      icon.className = 'absolute text-muted-foreground/20 select-none pointer-events-none';
      icon.style.fontSize = `${Math.random() * 20 + 10}px`;
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
      icon.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      
      const aiIcon = AI_ICONS[Math.floor(Math.random() * AI_ICONS.length)];
      icon.textContent = aiIcon;
      
      container.appendChild(icon);
      return icon;
    });

    // Animate icons
    const animate = () => {
      iconsRef.current.forEach(icon => {
        const speedX = parseFloat(icon.dataset.speedX || '0') || (Math.random() * 0.2 - 0.1);
        const speedY = parseFloat(icon.dataset.speedY || '0') || (Math.random() * 0.2 - 0.1);
        
        icon.dataset.speedX = speedX.toString();
        icon.dataset.speedY = speedY.toString();
        
        let newX = parseFloat(icon.style.left) + speedX;
        let newY = parseFloat(icon.style.top) + speedY;
        
        // Bounce off edges
        if (newX > 100 || newX < 0) {
          newX = Math.min(100, Math.max(0, newX));
          icon.dataset.speedX = (-speedX).toString();
        }
        
        if (newY > 100 || newY < 0) {
          newY = Math.min(100, Math.max(0, newY));
          icon.dataset.speedY = (-speedY).toString();
        }
        
        icon.style.left = `${newX}%`;
        icon.style.top = `${newY}%`;
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      iconsRef.current.forEach(icon => icon.remove());
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
      ref={containerRef}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080801A_1px,transparent_1px),linear-gradient(to_bottom,#8080801A_1px,transparent_1px)] bg-[size:28px_28px] opacity-80"
        style={{ zIndex: 2 }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl"
        style={{ zIndex: 3 }}
      />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" style={{ zIndex: 4 }}>
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-wide">AI Agents for Web Testing</span>
          </motion.div>
          
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
            <motion.span
              className="inline-block bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Just Ship.
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let AI Test.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Test your application using plain English. No coding required. Docket handles the complexity so you can ship faster.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 h-14 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 h-14 rounded-full border-2 hover:bg-primary/10 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}