"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Video() {
  const canvasRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");
  //   let animationFrameId;

  //   // Set canvas size
  //   const resizeCanvas = () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   };
  //   resizeCanvas();
  //   window.addEventListener("resize", resizeCanvas);

  //   // Data stream parameters
  //   const streams = [];
  //   const streamCount = 25;
  //   for (let i = 0; i < streamCount; i++) {
  //     streams.push({
  //       x: Math.random() * canvas.width,
  //       y: -50,
  //       length: Math.random() * 60 + 30,
  //       speed: Math.random() * 3 + 1,
  //       opacity: 0.2 + Math.random() * 0.3,
  //       width: Math.random() * 2 + 1,
  //     });
  //   }

  //   // Particle parameters
  //   const particles = [];
  //   const particleCount = 50;
  //   for (let i = 0; i < particleCount; i++) {
  //     particles.push({
  //       x: Math.random() * canvas.width,
  //       y: Math.random() * canvas.height,
  //       size: Math.random() * 2 + 1,
  //       speed: Math.random() * 1.5 + 0.5,
  //     });
  //   }

  //   // Mouse position
  //   let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
  //   window.addEventListener("mousemove", (e) => {
  //     mouse.x = e.clientX;
  //     mouse.y = e.clientY;
  //   });

  //   // Animation loop
  //   const animate = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);

  //     // Draw streams
  //     streams.forEach((stream, i) => {
  //       stream.y += stream.speed;
  //       if (stream.y > canvas.height + stream.length) {
  //         stream.y = -stream.length;
  //         stream.x = Math.random() * canvas.width;
  //       }

  //       const dx = mouse.x - stream.x;
  //       const dy = mouse.y - (stream.y - stream.length / 2);
  //       const distance = Math.sqrt(dx * dx + dy * dy);
  //       const boost = distance < 150 ? 0.4 : 0;

  //       const gradient = ctx.createLinearGradient(stream.x, stream.y - stream.length, stream.x, stream.y);
  //       gradient.addColorStop(0, `rgba(255, 255, 255, ${stream.opacity + boost})`);
  //       gradient.addColorStop(1, `rgba(0, 0, 0, ${stream.opacity + boost})`);
  //       ctx.beginPath();
  //       ctx.moveTo(stream.x, stream.y - stream.length);
  //       ctx.lineTo(stream.x, stream.y);
  //       ctx.strokeStyle = gradient;
  //       ctx.lineWidth = stream.width;
  //       ctx.shadowBlur = 10;
  //       ctx.shadowColor = `rgba(255, 255, 255, ${stream.opacity + boost})`;
  //       ctx.stroke();
  //       ctx.shadowBlur = 0;

  //       gsap.to(stream, {
  //         opacity: 0.2 + Math.random() * 0.3 + boost,
  //         speed: Math.random() * 3 + 1,
  //         width: Math.random() * 2 + 1,
  //         duration: 2 + i * 0.1,
  //         ease: "sine.inOut",
  //       });
  //     });

  //     // Draw particles
  //     particles.forEach((particle) => {
  //       particle.y += particle.speed;
  //       if (particle.y > canvas.height) {
  //         particle.y = -particle.size;
  //         particle.x = Math.random() * canvas.width;
  //       }

  //       const dx = mouse.x - particle.x;
  //       const dy = mouse.y - particle.y;
  //       const distance = Math.sqrt(dx * dx + dy * dy);
  //       const boost = distance < 100 ? 0.5 : 0;

  //       ctx.beginPath();
  //       ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  //       ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + boost})`;
  //       ctx.fill();
  //     });

  //     animationFrameId = requestAnimationFrame(animate);
  //   };
  //   animate();

  //   return () => {
  //     window.removeEventListener("resize", resizeCanvas);
  //     window.removeEventListener("mousemove", () => {});
  //     cancelAnimationFrame(animationFrameId);
  //   };
  // }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Canvas for Particle Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center" style={{ zIndex: 3 }}>
        {/* Header and Badge */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            AI-Powered Web Testing
          </h1>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="text-sm font-semibold text-orange-500">Backed by </span>
            <Image 
              src="/logo-1.avif" 
              alt="Backer Logo" 
              width={80}  // adjust as needed
              height={20} // adjust as needed
              className="h-5 w-auto" // optional, for additional styling
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-6">
          {/* GIF */}
          <motion.div
            className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <Image
              src="/a.gif"
              alt="Docket AI Testing Demo"
              className="w-full h-auto rounded-lg"
              width={800}
              height={450}
              priority
            />
          </motion.div>

          {/* Text */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Just ship. Let AI do the testing.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Docket adapts to UI changes and flags real bugs with no coding required.
          </motion.p>

          {/* Button */}
          <motion.button
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </section>
  );
}