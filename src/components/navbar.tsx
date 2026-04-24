"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import Magnetic from "@/components/ui/magnetic";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "var(--navbar-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.15}>
            <Link href="/" className="group flex items-center gap-2.5 cursor-hover">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-display font-bold transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: "var(--gradient-accent)",
                  color: "#090909b9",
                  boxShadow: "0 0 20px var(--glow)",
                }}
              >
                AP
              </div>
              <span
                className="font-display font-semibold text-sm tracking-tight hidden sm:block transition-colors duration-300"
                style={{ color: "var(--text)" }}
              >
                Ayon Paul
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Magnetic key={link.label} strength={0.1}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-body font-medium rounded-lg transition-all duration-300 group cursor-hover"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {link.label}
                  <span
                    className="absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: "var(--gradient-accent)" }}
                  />
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Magnetic strength={0.15}>
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-400 cursor-hover shadow-lg"
                style={{
                  background: "var(--text)",
                  color: "var(--bg)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px) scale(1.02)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
                }}
              >
                Download CV
              </a>
            </Magnetic>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 rounded-lg transition-all duration-300 cursor-hover"
              style={{ color: "var(--text)", background: "var(--surface)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(6px)",
        }}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className="absolute top-16 right-4 left-4 rounded-2xl p-6 transition-all duration-500"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
            transform: mobileOpen ? "translateY(0)" : "translateY(-20px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 30px var(--glow)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-hover"
                style={{ color: "var(--text-muted)" }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center py-3 rounded-xl text-sm font-bold cursor-hover"
              style={{ background: "var(--text)", color: "var(--bg)" }}
              onClick={() => setMobileOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
