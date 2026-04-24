"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Lead",
    org: "GDG on Campus BCREC",
    period: "Sept 2025 – Present",
    type: "Leadership",
    status: "active",
    desc: "Leading Google Developer Groups chapter on campus, organizing tech events, workshops, and hackathons for the developer community.",
    tags: ["Community", "Events", "Google"],
    color: "#3b82f6",
    num: "01",
  },
  {
    role: "Web Developer Intern",
    org: "SkillCraft Technology",
    period: "Sep – Oct 2024",
    type: "Internship",
    status: "completed",
    desc: "Built and shipped frontend features for production web applications using modern React-based architecture and responsive design principles.",
    tags: ["React", "Frontend", "Production"],
    color: "#10b981",
    num: "02",
  },
];

function ExpCard({ exp, i }: { exp: typeof EXPERIENCES[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
      viewport={{ once: true, margin: "-80px" }}
      className="group relative"
    >
      {/* Ghost number */}
      <div
        className="absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none transition-opacity duration-700 opacity-[0.035] group-hover:opacity-[0.07]"
        style={{ fontSize: "clamp(4rem, 8vw, 6rem)", color: "var(--text)", lineHeight: 1 }}
      >
        {exp.num}
      </div>

      <motion.div
        whileHover={{ x: 6 }}
        transition={{ duration: 0.25 }}
        className="relative p-6 md:p-8 rounded-2xl overflow-hidden transition-all duration-400"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", backdropFilter: "blur(20px)" }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}50`;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${exp.color}0d`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        {/* Left color stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ background: `linear-gradient(to bottom, transparent, ${exp.color}, transparent)` }}
        />

        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
          {/* Period + badge */}
          <div className="flex-shrink-0">
            <div className="text-[10px] font-mono uppercase tracking-widest mb-1.5" style={{ color: "var(--text-muted)" }}>{exp.period}</div>
            <span
              className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-0.5 rounded-full font-mono"
              style={{
                background: exp.status === "active" ? "rgba(16,185,129,0.1)" : "var(--surface-2)",
                color: exp.status === "active" ? "#10b981" : "var(--text-muted)",
                border: `1px solid ${exp.status === "active" ? "rgba(16,185,129,0.3)" : "var(--border-subtle)"}`,
              }}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${exp.status === "active" ? "animate-pulse" : ""}`}
                style={{ background: exp.status === "active" ? "#10b981" : "var(--text-muted)" }}
              />
              {exp.status === "active" ? "Active" : "Completed"}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-3 justify-between mb-1">
              <div>
                <h3 className="font-display font-black text-base md:text-lg leading-tight" style={{ color: "var(--text)" }}>{exp.role}</h3>
                <div className="text-xs font-mono gradient-text font-medium mt-0.5">{exp.org}</div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full"
                  style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}25`, color: exp.color }}
                >
                  {exp.type}
                </span>
                <motion.span
                  whileHover={{ rotate: 45 }}
                  className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                >
                  <ExternalLink size={11} />
                </motion.span>
              </div>
            </div>

            <p className="text-xs md:text-sm leading-relaxed mb-4 font-light" style={{ color: "var(--text-muted)" }}>{exp.desc}</p>

            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ExperiencePreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Ambient */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-1/3 w-[35vw] h-[35vw] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, var(--glow-gold), transparent 70%)", filter: "blur(80px)" }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-8" style={{ background: "var(--accent)" }} />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: "var(--accent)" }}>04 / Experience</span>
        </motion.div>

        {/* Headline row */}
        <div className="flex items-end justify-between mb-12">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="font-display font-black tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "var(--text)" }}
            >
              Work &amp; <span className="gradient-text italic font-medium">Leadership</span>
            </motion.h2>
          </div>
          <motion.a
            href="/experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest group"
            style={{ color: "var(--text-muted)" }}
          >
            View All <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        <div className="flex flex-col gap-4">
          {EXPERIENCES.map((exp, i) => <ExpCard key={exp.role + exp.org} exp={exp} i={i} />)}
        </div>
      </div>
    </section>
  );
}
