"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // 0 = no parallax, 1 = full parallax
  className?: string;
  direction?: "up" | "down";
}

export default function Parallax({
  children,
  speed = 0.3,
  className = "",
  direction = "up",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      const normalizedDistance = distanceFromCenter / windowHeight;
      const movement = normalizedDistance * speed * 100 * (direction === "up" ? 1 : -1);
      setOffset(movement);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return (
    <div ref={ref} className={`parallax-layer ${className}`}>
      <div style={{ transform: `translateY(${offset}px)` }}>
        {children}
      </div>
    </div>
  );
}
