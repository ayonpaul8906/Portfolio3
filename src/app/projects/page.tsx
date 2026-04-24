"use client";

import Image from "next/image";
import { Shield, Activity, Brain, Globe, Lock, Server, ArrowUpRight } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";
import Footer from "@/components/footer";

const ALL_PROJECTS = [
  {
    id: "wrathops",
    title: "WrathOps",
    tagline: "Real-time API key leak detection system",
    desc: "Monitors public repositories, Pastebin, and code snippets in real time to detect exposed API keys and credentials before they get exploited. Instant alerts, dashboard, and zero-config setup for teams.",
    icon: <Shield size={24} strokeWidth={1.5} />,
    tech: ["Python", "Flask", "GROQ API"],
    github: "https://github.com/ayonpaul8906/WrathOps",
    demo: "https://wrathops.vercel.app/",
    category: "Security",
    status: "Live",
    image: "/wrathops.png",
  },
  {
    id: "trustbridge",
    title: "TrustBridge",
    tagline: "Secure trust-based decentralized platform",
    desc: "A Web3 platform enabling transparent, trust-scored interactions between parties. Built on smart contracts with wallet-native authentication.",
    icon: <Activity size={24} strokeWidth={1.5} />,
    tech: ["Ethers.js", "React.js", "Solidity"],
    github: "https://github.com/ayonpaul8906/Trust-Bridge",
    demo: "https://trust-bridge-drab.vercel.app/",
    category: "Web3",
    status: "Live",
    image: "/trustbridge.png",
  },
  {
    id: "tark",
    title: "TARK",
    tagline: "AI-powered reasoning & knowledge assistant",
    desc: "An intelligent assistant that combines LLM reasoning with structured knowledge retrieval. Context-aware, multi-turn, and architecturally lean — designed for speed and precision.",
    icon: <Brain size={24} strokeWidth={1.5} />,
    tech: ["GROQ", "Gemini", "Python"],
    github: "https://github.com/ayonpaul8906",
    demo: "#",
    category: "AI",
    status: "Live",
    image: "/tark.png",
  },
  {
    id: "devconnect",
    title: "DevConnect",
    tagline: "Developer networking & collaboration hub",
    desc: "A platform for developers to find collaborators, share projects, and build together. Real-time matching, skill tagging, and integrated GitHub activity.",
    icon: <Globe size={24} strokeWidth={1.5} />,
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/ayonpaul8906",
    demo: "#",
    category: "Social",
    status: "In Progress",
    image: null,
  },
  {
    id: "vaultkey",
    title: "VaultKey",
    tagline: "Encrypted credential manager",
    desc: "A client-side encrypted password and secret manager. Zero-knowledge architecture — your secrets never leave your device unencrypted.",
    icon: <Lock size={24} strokeWidth={1.5} />,
    tech: ["React.js", "Python", "Cryptography"],
    github: "https://github.com/ayonpaul8906",
    demo: "#",
    category: "Security",
    status: "Shipped",
    image: null,
  },
  {
    id: "apidash",
    title: "APIDash",
    tagline: "Lightweight API testing dashboard",
    desc: "A clean, fast API testing tool built in React. Supports all HTTP methods, custom headers, JSON body, and response visualization — no bloat.",
    icon: <Server size={24} strokeWidth={1.5} />,
    tech: ["React.js", "Axios", "Vite"],
    github: "https://github.com/ayonpaul8906",
    demo: "#",
    category: "Dev Tool",
    status: "Shipped",
    image: null,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-32 pb-32">
        <SectionContainer>
          
          {/* Header */}
          <div className="mb-20 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <a
                href="/"
                className="text-xs font-mono uppercase tracking-[0.2em] transition-colors duration-200 border-b pb-1"
                style={{ color: "var(--text-muted)", borderColor: "transparent" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--text)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "transparent")}
              >
                ← Return
              </a>
              <span style={{ color: "var(--border)" }}>/</span>
              <span className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: "var(--text)" }}>Archive</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6" style={{ color: "var(--text)" }}>
              Project <br />
              <span className="italic font-light" style={{ color: "var(--text-muted)" }}>Archive.</span>
            </h1>
            <p className="text-lg font-light leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
              A comprehensive index of platforms, architectures, and tools I've designed and shipped.
            </p>
          </div>

          {/* Premium Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            {ALL_PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.demo !== "#" ? project.demo : project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col"
              >
                {/* Massive Image Container */}
                <div 
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-[2rem] mb-8 transition-all duration-700"
                  style={{ 
                    background: "var(--surface)", 
                    boxShadow: "inset 0 0 0 1px var(--border)",
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-1000" style={{ color: "var(--text)" }}>
                      <div className="scale-[4]">
                        {project.icon}
                      </div>
                    </div>
                  )}
                  
                  {/* Floating "View" Button that appears on hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 rounded-full bg-white/90 text-black flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out backdrop-blur-md shadow-2xl">
                    <span className="text-xs font-bold uppercase tracking-widest">View</span>
                  </div>
                </div>

                {/* Sleek Typography */}
                <div className="flex justify-between items-start gap-4 px-2">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full border" 
                            style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                        {project.tech.join(" · ")}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight mb-3" style={{ color: "var(--text)" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed max-w-md" style={{ color: "var(--text-muted)" }}>
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

        </SectionContainer>
      </div>
      <Footer />
    </>
  );
}
