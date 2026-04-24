"use client";

import { ReactNode, CSSProperties, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
  tilt?: boolean;
}

export default function GlassCard({
  children,
  className,
  style,
  hover = true,
  glow = false,
  onClick,
  tilt = true,
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={clsx(
        "group relative rounded-2xl border border-white/5 bg-surface/50 overflow-hidden cursor-hover",
        hover && "cursor-pointer transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.01]",
        className
      )}
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        boxShadow: glow ? "0 0 40px var(--glow), inset 0 0 20px var(--glow)" : "0 8px 32px rgba(0,0,0,0.2)",
        ...style,
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              var(--glow-strong),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              var(--accent),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
