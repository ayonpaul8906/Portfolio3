"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <ScrollReveal animation="fadeUp" delay={0.1}>
      <footer
        className="relative w-full py-10 mt-4"
        style={{
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="max-w-8xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Magnetic strength={0.2}>
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-display font-bold cursor-hover transition-transform duration-300 hover:scale-110"
                style={{ background: "var(--gradient-accent)", color: "#090909b9" }}
              >
                AP
              </div>
            </Magnetic>
            <span className="text-sm font-body" style={{ color: "var(--text-muted)" }}>
              © {year} Ayon Paul
            </span>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: <Github size={16} />, href: "https://github.com/ayonpaul8906", label: "GitHub" },
              { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/ayon2407s", label: "LinkedIn" },
              { icon: <Mail size={16} />, href: "mailto:ayonpaul8906@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <Magnetic key={label} strength={0.2}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 cursor-hover hover:scale-110"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 16px var(--glow)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  {icon}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}
