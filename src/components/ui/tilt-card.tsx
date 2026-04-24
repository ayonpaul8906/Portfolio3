"use client";

import { ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glareOpacity = 0.08,
}: TiltCardProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(xSpring, [0, 1], [-maxTilt, maxTilt]);
  const scale = useTransform(xSpring, () => {
    // When hovering (x != 0.5 and y != 0.5), slightly scale up
    const isHovering = Math.abs(x.get() - 0.5) > 0.01 || Math.abs(y.get() - 0.5) > 0.01;
    return isHovering ? 1.02 : 1;
  });

  const glareX = useTransform(xSpring, [0, 1], [0, 100]);
  const glareY = useTransform(ySpring, [0, 1], [0, 100]);
  const glareOpacityTransform = useTransform(xSpring, () => {
    const isHovering = Math.abs(x.get() - 0.5) > 0.01 || Math.abs(y.get() - 0.5) > 0.01;
    return isHovering ? glareOpacity : 0;
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-inherit mix-blend-overlay"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,1), transparent 60%)`
          ),
          opacity: glareOpacityTransform,
          borderRadius: "inherit",
          zIndex: 10,
        }}
      />
    </motion.div>
  );
}
