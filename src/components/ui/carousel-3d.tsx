"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Carousel3DProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel3D({ items, autoPlay = true, interval = 5000 }: Carousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div 
      className="relative w-full h-[550px] flex items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
    >
      <div 
        className="relative w-full max-w-lg h-full flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            // Calculate distance from current index
            let offset = index - currentIndex;
            if (offset < -Math.floor(items.length / 2)) offset += items.length;
            if (offset > Math.floor(items.length / 2)) offset -= items.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2; // show up to 2 items on each side

            if (!isVisible) return null;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  x: `${offset * 60}%`,
                  z: isActive ? 0 : -Math.abs(offset) * 150,
                  rotateY: offset * -25,
                  scale: isActive ? 1 : 1 - Math.abs(offset) * 0.15,
                  opacity: isActive ? 1 : 1 - Math.abs(offset) * 0.4,
                  zIndex: items.length - Math.abs(offset),
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], // Custom bouncy ease
                }}
                className={`absolute w-full h-[400px] flex items-center justify-center cursor-pointer ${
                  isActive ? "" : "pointer-events-none"
                }`}
                onClick={() => !isActive && setCurrentIndex(index)}
              >
                {item}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {items.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                idx === currentIndex ? "bg-accent scale-125" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
