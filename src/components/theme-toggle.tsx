"use client";

import { useTheme } from "@/components/theme-provider";
import Magnetic from "@/components/ui/magnetic";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Magnetic strength={0.2}>
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "iron" ? "Batman" : "Iron"} mode`}
        className="relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 group cursor-hover"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--text)",
          backdropFilter: "blur(12px)",
        }}
      >
        <span
          className="text-sm transition-all duration-500"
          style={{
            transform: theme === "iron" ? "rotate(0deg) scale(1)" : "rotate(360deg) scale(1.1)",
            display: "inline-block",
          }}
        >
          {theme === "iron" ? "⚡" : "🦇"}
        </span>

        {/* Animated toggle track */}
        <span
          className="relative inline-flex w-9 h-[18px] rounded-full transition-all duration-500 ml-0.5 overflow-hidden"
          style={{
            background: theme === "iron"
              ? "linear-gradient(90deg, rgba(192,57,43,0.3), rgba(243,156,18,0.3))"
              : "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.12))",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="absolute top-0.5 w-3.5 h-3.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
            style={{
              background: theme === "iron" ? "var(--gradient-accent)" : "#fff",
              left: theme === "batman" ? "calc(100% - 16px)" : "2px",
              boxShadow: `0 0 10px var(--glow-strong)`,
            }}
          />
        </span>
      </button>
    </Magnetic>
  );
}
