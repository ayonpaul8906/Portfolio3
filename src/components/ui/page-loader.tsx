"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease out progress: fast at start, slow near end
        const remaining = 100 - prev;
        const step = Math.max(remaining * 0.08, 0.5);
        return Math.min(prev + step, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setExiting(true), 300);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(() => setHidden(true), 700);
      return () => clearTimeout(timer);
    }
  }, [exiting]);

  if (hidden) return null;

  return (
    <div
      className={`loader-overlay ${exiting ? "exiting" : ""}`}
      style={{ background: "var(--loader-bg)" }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo mark */}
        <div className="relative">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-display font-bold"
            style={{
              background: "var(--gradient-accent)",
              color: "#fff",
              boxShadow: "0 0 40px var(--glow-strong)",
              animation: "magneticFloat 3s ease-in-out infinite",
            }}
          >
            AP
          </div>
          {/* Orbiting ring */}
          <div
            className="absolute inset-[-8px] rounded-[20px] border"
            style={{
              borderColor: "var(--border)",
              animation: "spin-slow 8s linear infinite",
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
            }}
          />
        </div>

        {/* Audio-bar equalizer */}
        <div className="flex items-end gap-1.5 h-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1 rounded-full"
              style={{
                background: "var(--loader-accent)",
                height: "100%",
                animation: `loaderBars 0.8s ease-in-out ${i * 0.12}s infinite`,
                opacity: 0.4 + i * 0.12,
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-48 relative">
          <div
            className="h-px w-full rounded-full overflow-hidden"
            style={{ background: "var(--border)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`,
                background: "var(--gradient-accent)",
                boxShadow: "0 0 12px var(--glow-strong)",
              }}
            />
          </div>
          <div
            className="text-xs font-mono mt-3 text-center tabular-nums"
            style={{ color: "var(--text-muted)" }}
          >
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
