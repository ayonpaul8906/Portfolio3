"use client";

import SectionContainer from "@/components/ui/section-container";
import GlassCard from "@/components/ui/glass-card";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

export default function Academics() {
  return (
    <SectionContainer id="academics">
      {/* Label */}
      <ScrollReveal animation="fadeLeft">
        <div className="flex items-center gap-3 mb-12">
          <span
            className="text-xs font-mono uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            03 / Academics
          </span>
          <div className="flex-1 h-px max-w-[80px]" style={{ background: "var(--border)" }} />
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {/* Main card */}
        <ScrollReveal animation="fadeUp" delay={0.1} className="lg:col-span-2">
          <GlassCard className="p-8 overflow-hidden relative" glow>
            {/* Decorative orb */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: "var(--glow)",
                filter: "blur(60px)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
                style={{
                  background: "var(--glow)",
                  border: "1px solid var(--border)",
                  color: "var(--accent)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--accent)", animation: "pulseGlow 2s ease-in-out infinite" }}
                />
                Currently Enrolled
              </div>

              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-6"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--accent)",
                  }}
                >
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3
                    className="font-display font-bold text-xl mb-1"
                    style={{ color: "var(--text)" }}
                  >
                    Bachelor of Technology
                  </h3>
                  <p
                    className="font-body text-sm mb-0.5 gradient-text font-medium"
                  >
                    Computer Science & Engineering
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    Dr. B.C. Roy Engineering College, Durgapur
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: <Calendar size={14} />, label: "Year", value: "3rd Year" },
                  { icon: <BookOpen size={14} />, label: "Stream", value: "CSE" },
                  { icon: <GraduationCap size={14} />, label: "Duration", value: "2023 – 2027" },
                ].map(({ icon, label, value }, i) => (
                  <div
                    key={label}
                    className="p-3 rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div
                      className="flex items-center gap-1.5 text-xs mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {icon}
                      {label}
                    </div>
                    <div
                      className="font-display font-semibold text-sm"
                      style={{ color: "var(--text)" }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Side cards */}
        <div className="flex flex-col gap-4">
          <ScrollReveal animation="fadeRight" delay={0.2}>
            <GlassCard className="p-6">
              <div
                className="text-3xl font-display font-bold mb-1 gradient-text"
              >
                2027
              </div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                Expected graduation
              </div>
            </GlassCard>
          </ScrollReveal>
          <ScrollReveal animation="fadeRight" delay={0.3}>
            <GlassCard className="p-6">
              <div
                className="text-3xl font-display font-bold mb-1 gradient-text"
              >
                CSE
              </div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                Core specialization in Computer Science & Engineering
              </div>
            </GlassCard>
          </ScrollReveal>
          <ScrollReveal animation="fadeRight" delay={0.4}>
            <GlassCard className="p-6">
              <div className="flex flex-wrap gap-1.5">
                {["DSA", "OS", "DBMS", "CN", "AI/ML"].map((s) => (
                  <span key={s} className="tech-tag">
                    {s}
                  </span>
                ))}
              </div>
              <div
                className="text-xs font-mono mt-3"
                style={{ color: "var(--text-muted)" }}
              >
                Core subjects
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </SectionContainer>
  );
}
