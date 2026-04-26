"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";

const PROJECTS = [
  {
    id: "wrathops",
    title: "WrathOps",
    category: "Security",
    desc: "Real-time enterprise monitoring engine for detecting exposed API keys in public repositories. High-throughput architecture for immediate remediation.",
    tech: "Python · Flask · GROQ API",
    link: "https://wrathops.vercel.app/",
    image: "/projects/wrathops.png",
  },
  {
    id: "trustbridge",
    title: "TrustBridge",
    category: "Web3",
    desc: "Transparent, trust-scored decentralized interactions. Architected on secure smart contracts with wallet-native authentication.",
    tech: "Ethers.js · React · Solidity",
    link: "https://trust-bridge-drab.vercel.app/",
    image: "/projects/trustbridge.png",
  },
  {
    id: "tark",
    title: "TARK",
    category: "AI",
    desc: "Intelligent autonomous assistant merging large language model reasoning with structured, rapid knowledge retrieval.",
    tech: "GROQ · Gemini · Python",
    link: "#",
    image: "/projects/tark.png",
  },
];

export default function ProjectsPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <SectionContainer id="projects" className="!p-0 overflow-hidden relative z-10 py-32">
      <div ref={containerRef}>
        {/* Intro Header */}
        <motion.div 
          style={{ y: headerY }}
          className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-2"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "var(--text)" }} />
              <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: "var(--text)" }}>05 / Projects</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
              Featured
              <span className="italic font-light mt-2" style={{ color: "var(--text-muted)" }}> Architectures.</span>
            </h2>
          </div>
          
          <a 
            href="/projects" 
            className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest transition-colors pb-2 border-b"
            style={{ color: "var(--text)", borderColor: "var(--border)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            View More 
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </a>
        </motion.div>

        {/* Premium Horizontal Slider */}
        <div className="w-full pl-6 md:pl-12 pb-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
             style={{ scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}>
          
          <div className="flex gap-6 md:gap-10 w-max pr-6 md:pr-32">
            {PROJECTS.map((project, idx) => (
              <a 
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col w-[85vw] sm:w-[60vw] md:w-[500px] lg:w-[650px] shrink-0 snap-center md:snap-start"
              >
                {/* Massive Image Container */}
                <div 
                  className="relative w-full aspect-[1/1] md:aspect-[10/6] overflow-hidden rounded-2xl md:rounded-[2rem] mb-6 md:mb-8 transition-all duration-700"
                  style={{ 
                    background: "var(--surface)", 
                    boxShadow: "inset 0 0 0 1px var(--border)",
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 500px, 650px"
                    priority={idx === 0}
                  />
                  
                  {/* Floating "View" Button that appears on hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 text-black flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out backdrop-blur-md shadow-2xl">
                    <span className="text-xs font-bold uppercase tracking-widest">View</span>
                  </div>
                </div>

                {/* Sleek Typography */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full border" 
                            style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                        {project.tech}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: "var(--text)" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-light leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>
                      {project.desc}
                    </p>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                       style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>

              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
