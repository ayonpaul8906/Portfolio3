export type ThemeMode = "iron" | "batman";

export const themes = {
  iron: {
    name: "Iron Mode",
    icon: "⚡",
    bg: "#faf8f5",
    surface: "rgba(255,255,255,0.75)",
    surface2: "rgba(255,248,240,0.55)",
    accent: "#c0392b",
    accentSecondary: "#e67e22",
    accentGold: "#f39c12",
    glow: "rgba(192,57,43,0.18)",
    text: "#1a1a2e",
    textMuted: "#5c5470",
    border: "rgba(192,57,43,0.18)",
    gradientFrom: "#faf8f5",
    gradientTo: "#f5f0ea",
  },
  batman: {
    name: "Batman Mode",
    icon: "🦇",
    bg: "#0a0a0a",
    surface: "rgba(255,255,255,0.04)",
    surface2: "rgba(255,255,255,0.025)",
    accent: "#e0e0e0",
    accentSecondary: "#9e9e9e",
    accentGold: "#bdbdbd",
    glow: "rgba(255,255,255,0.08)",
    text: "#f5f5f5",
    textMuted: "#787878",
    border: "rgba(255,255,255,0.08)",
    gradientFrom: "#0a0a0a",
    gradientTo: "#050505",
  },
} as const;

export const defaultTheme: ThemeMode = "batman";
