"use client";

import Image from "next/image";
import { Shield, Activity, Brain, Globe, Lock, Server, ArrowUpRight,Compass,BookOpen,Sparkles } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";
import Footer from "@/components/footer";

const ALL_PROJECTS = [
  {
    id: "wrathops",
    title: "WrathOps",
    tagline: "Real-time API key leak detection system",
    desc: "Monitors public repositories, Pastebin, and code snippets in real time to detect exposed API keys and credentials before they get exploited. Instant alerts, dashboard, and zero-config setup for teams.",
    icon: <Shield size={24} strokeWidth={1.5} />,
    tech: ["Python", "Flask", "Gemini  API"],
    github: "https://github.com/ayonpaul8906/WrathOps",
    demo: "https://wrathops.vercel.app/",
    category: "Security",
    status: "In Progress",
    image: "/projects/wrathops.png",
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
    image: "/projects/trustbridge.png",
  },
  {
    id: "tark",
    title: "TARK",
    tagline: "AI-powered reasoning & knowledge assistant",
    desc: "An intelligent assistant that combines LLM reasoning with structured knowledge retrieval. Context-aware, multi-turn, and architecturally lean — designed for speed and precision.",
    icon: <Brain size={24} strokeWidth={1.5} />,
    tech: ["GROQ", "Gemini", "Python"],
    github: "https://github.com/ayonpaul8906/TARK",
    demo: "#",
    category: "AI",
    status: "In Progress",
    image: "/projects/tark.png",
  },
  {
    id: "SkillBite",
    title: "SkillBite",
    tagline: "Developer networking & collaboration hub",
    desc: "A platform for developers to find collaborators, share projects, and build together. Real-time matching, skill tagging, and integrated GitHub activity.",
    icon: <Globe size={24} strokeWidth={1.5} />,
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/ayonpaul8906/SkillBite",
    demo: "https://skillbite.vercel.app/",
    category: "Social",
    status: "Live",
    image: "/projects/skillbite.png",
  },
  {
    id: "careercompass",
    title: "Career Compass",
    tagline: "Guided career exploration platform",
    desc: "A career guidance platform that helps users explore suitable career paths based on interests, skills, and goals. Provides structured insights and interactive navigation for better decision-making.",
    icon: <Compass size={24} strokeWidth={1.5} />,
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/ayonpaul8906/Career-Compass-GDG",
    demo: "https://career-compass-4a13f.web.app",
    category: "Career",
    status: "Live",
    image: "/projects/careercompass.png",
  },
  {
    id: "edunexa",
    title: "Edunexa",
    tagline: "Smart education & learning platform",
    desc: "A modern learning platform designed to deliver structured educational content with an intuitive UI. Supports scalable content delivery, user engagement tracking, and responsive design for seamless learning across devices.",
    icon: <BookOpen size={24} strokeWidth={1.5} />,
    tech: ["React", "TailwindCSS", "JavaScript"],
    github: "https://github.com/ayonpaul8906/EduNexa",
    demo: "#",
    category: "EdTech",
    status: "Live",
    image: "/projects/edunexa.png",
  },
  {
    id: "zencue",
    title: "ZenCue",
    tagline: "AI-powered assistive learning for neurodivergent users",
    desc: "A neurodivergent-friendly productivity and learning assistant that simplifies complex content using AI. Supports text, image, and screen-based inputs with real-time explanations, voice output, and distraction-free UI to improve focus and comprehension.",
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    tech: ["React.js", "Flask", "Tailwind CSS", "Gemini API", "html2canvas"],
    github: "https://github.com/ayonpaul8906/ZenCue",
    demo: "https://zen-cue.vercel.app/",
    category: "AI",
    status: "Live",
    image: "/projects/zencue.png",
  }
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
                  className="relative w-full aspect-[1/1] md:aspect-[13/6] overflow-hidden rounded-xl md:rounded-[2rem] mb-6 md:mb-8 transition-all duration-700 bg-center"
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
