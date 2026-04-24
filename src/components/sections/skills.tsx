"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { Code2, Cpu, Bot, Globe, Cloud, Layers, Wrench, Boxes } from "lucide-react";

const SKILLS = [
  { id: "frontend",      category: "Frontend",          icon: Code2,   color: "#3b82f6", glow: "rgba(59,130,246,0.2)",   skills: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"], level: 90, desc: "Pixel-perfect, high-performance UIs" },
  { id: "ai",            category: "AI & APIs",          icon: Bot,     color: "#a855f7", glow: "rgba(168,85,247,0.2)",   skills: ["GROQ API", "Gemini API", "LLM Integration", "RAG"], level: 85, desc: "Intelligent, context-aware systems" },
  { id: "backend",       category: "Backend",            icon: Cpu,     color: "#10b981", glow: "rgba(16,185,129,0.2)",   skills: ["Flask", "REST APIs", "Node.js", "WebSockets"], level: 80, desc: "Scalable server-side architectures" },
  { id: "web3",          category: "Web3",               icon: Globe,   color: "#f59e0b", glow: "rgba(245,158,11,0.2)",   skills: ["Ethers.js", "RainbowKit", "Solidity", "Smart Contracts"], level: 75, desc: "Decentralized on-chain experiences" },
  { id: "cloud",         category: "Cloud",              icon: Cloud,   color: "#06b6d4", glow: "rgba(6,182,212,0.2)",    skills: ["Firebase", "Cloudinary", "Vercel", "CI/CD"], level: 80, desc: "Cloud-native deployment pipelines" },
  { id: "languages",     category: "Languages",          icon: Layers,  color: "#ef4444", glow: "rgba(239,68,68,0.2)",    skills: ["JavaScript ES6+", "Python", "TypeScript", "Solidity"], level: 88, desc: "Multi-paradigm language mastery" },
  { id: "tools",         category: "Tools",              icon: Wrench,  color: "#8b5cf6", glow: "rgba(139,92,246,0.2)",   skills: ["Git", "GitHub", "Vite", "Axios"], level: 85, desc: "Streamlined development workflow" },
  { id: "architecture",  category: "Architecture",       icon: Boxes,   color: "#ec4899", glow: "rgba(236,72,153,0.2)",   skills: ["Clean Code", "MVC", "Microservices", "Design Patterns"], level: 78, desc: "Principled, maintainable design" },
];

// Per-card spotlight hook
function SkillCard({ skill }: { skill: typeof SKILLS[0] }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const bg = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, ${skill.glow}, transparent 80%)`;
  const Icon = skill.icon;

  return (
    <motion.div
      className="relative flex-shrink-0 w-[300px] h-full rounded-2xl overflow-hidden group cursor-default"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onMouseMove={({ currentTarget, clientX, clientY }) => {
        const r = currentTarget.getBoundingClientRect();
        mx.set(clientX - r.left);
        my.set(clientY - r.top);
      }}
    >
      {/* Spotlight overlay */}
      <motion.div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: bg }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${skill.color}80, transparent)`, opacity: 0 }}
      />

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Icon + level */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
            style={{ background: skill.glow, border: `1px solid ${skill.color}40`, color: skill.color }}
          >
            <Icon size={20} />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
            style={{ background: skill.glow, color: skill.color }}
          >
            {skill.level}%
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-sm mb-1" style={{ color: "var(--text)" }}>{skill.category}</h3>
        <p className="text-xs font-mono leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{skill.desc}</p>

        {/* Progress bar */}
        <div className="h-px rounded-full overflow-hidden mb-4" style={{ background: "var(--border-subtle)" }}>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="h-full rounded-full"
            style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})` }}
          />
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {skill.skills.map(s => (
            <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-full"
              style={{ background: `${skill.color}12`, border: `1px solid ${skill.color}25`, color: skill.color }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);

  // Horizontal scroll via vertical scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll → horizontal translateX
  // Track width = cards * 316px (card 300 + gap 16), minus 1 viewport width
  const cardCount = SKILLS.length;
  const cardW = 316;
  const gap = 0; // already in cardW
  const totalTrackPx = cardCount * cardW;
  // We translate from 0 to -(totalTrackPx - 100vw)
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${totalTrackPx - 100}px`]);

  return (
    // Tall sticky container — height controls how long the pin lasts
    <section
      ref={sectionRef}
      id="skills"
      style={{ height: "300vh", background: "var(--bg-deep)" }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Background ambient */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)", filter: "blur(120px)" }}
          />
        </div>

        {/* Header */}
        <div className="px-6 md:px-12 mb-8 max-w-7xl mx-auto w-full flex items-end justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="h-px w-8" style={{ background: "var(--accent)" }} />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: "var(--accent)" }}>02 / Skills</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="font-display font-black tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "var(--text)" }}
              >
                Technology Arsenal
              </motion.h2>
            </div>
          </div>

          {/* Scroll direction hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "var(--text-muted)", opacity: 0.5 }}
          >
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
            Scroll to explore
          </motion.div>
        </div>

        {/* Horizontal track */}
        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 px-6 md:px-12"
          >
            {SKILLS.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}

            {/* Tail card */}
            <motion.div
              className="flex-shrink-0 w-[240px] h-full flex flex-col items-center justify-center gap-3 rounded-2xl"
              style={{ border: "1px dashed var(--border-subtle)" }}
            >
              <div className="font-display font-black text-4xl gradient-text">15+</div>
              <div className="text-xs font-mono text-center" style={{ color: "var(--text-muted)" }}>Technologies<br />in active use</div>
              <div className="text-[10px] font-mono mt-2" style={{ color: "var(--accent)", opacity: 0.7 }}>Always learning ↗</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Progress bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "var(--border-subtle)" }}>
          <motion.div className="h-full" style={{ scaleX: scrollYProgress, originX: 0, background: "var(--accent)", transformOrigin: "left" }} />
        </div>
      </div>
    </section>
  );
}
