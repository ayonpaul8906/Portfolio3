"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Cpu, Globe, Layers, Shield } from "lucide-react";

const COMPETENCIES = [
  { icon: <Cpu size={16} />, title: "Neural Engineering", desc: "LLM integration, RAG pipelines, and Multi-Agent systems." },
  { icon: <Layers size={16} />, title: "Full Stack Systems", desc: "Building scalable architectures with Next.js and Flask." },
  { icon: <Shield size={16} />, title: "Blockchain Logic", desc: "On-chain development and secure cryptographic execution." },
  { icon: <Globe size={16} />, title: "Premium Interfaces", desc: "Dark-mode aesthetics with high-performance 3D animations." },
];

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Background Name Parallax
  const textX = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1.05]);

  return (
    <section 
      ref={container}
      className="relative min-h-screen flex items-center overflow-hidden py-24"
      style={{ background: "var(--bg)" }}
    >
      {/* ── BACKGROUND NAME (Solid, subtle opacity) ── */}
      <motion.div 
        style={{ x: textX }}
        className="absolute inset-0 flex items-center justify-center whitespace-nowrap pointer-events-none z-0 select-none overflow-hidden"
      >
        <h2 
          className="font-black tracking-tighter uppercase"
          style={{ 
            fontSize: "clamp(3.5rem, 10vw, 12rem)",
            color: "var(--text)",
            opacity: 0.03
          }}
        >
          Ayon Paul
        </h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* ════════ LEFT: PROFESSIONAL IDENTITY ════════ */}
        <div className="pt-10 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em]" style={{ color: "var(--accent)" }}>01 / About</span>
          </motion.div>

          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-8"
            style={{ color: "var(--text)" }}
          >
            FULL STACK <br />
            <span style={{ color: "var(--text-muted)", opacity: 0.7 }}>&amp; AI</span> <br />
            DEVELOPER.
          </h2>

          <p className="text-sm md:text-base font-light leading-relaxed max-w-md mb-10" style={{ color: "var(--text-muted)" }}>
            I build scalable web applications, integrate complex AI models, and design high-performance architectures. Focused on bringing premium aesthetics to highly functional systems.
          </p>

          <div className="flex items-center gap-8">
            <a 
              href="#projects" 
              className="group flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all shadow-xl"
              style={{ background: "var(--text)", color: "var(--bg)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px var(--glow-strong)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
            >
              Explore Systems <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>

        {/* ════════ RIGHT: BENTO COMPETENCIES ════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pb-10 lg:pb-0">
          {COMPETENCIES.map((item, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 md:p-8 rounded-[24px] flex flex-col justify-between aspect-auto sm:aspect-square group transition-all duration-500 relative overflow-hidden"
                style={{ 
                  background: "var(--surface)", 
                  border: "1px solid var(--border)",
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)"
                }}
             >
                {/* Subtle hover glow inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-10 sm:mb-0 transition-transform duration-500 group-hover:scale-110 group-hover:bg-opacity-100"
                     style={{ background: "var(--bg)", color: "var(--text)", border: "1px solid var(--border)" }}>
                   {item.icon}
                </div>

                <div className="relative z-10 mt-auto">
                   <h3 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text)" }}>{item.title}</h3>
                   <p className="text-[13px] font-light leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}