"use client";

import SectionContainer from "@/components/ui/section-container";
import ScrollReveal from "@/components/ui/scroll-reveal";

const JOURNEY = [
  {
    year: "2022",
    title: "Started with Frontend",
    desc: "Dived into HTML, CSS, and JavaScript. Built my first interactive pages, discovered React, and fell in love with the craft of UI.",
    tag: "Origins",
  },
  {
    year: "2023",
    title: "Built Real Projects",
    desc: "Moved from tutorials to production. Shipped multiple React apps, contributed to open source, and started participating in hackathons.",
    tag: "Momentum",
  },
  {
    year: "2024",
    title: "Went Full Stack",
    desc: "Added Python & Flask to the stack. Built REST APIs, connected frontends to backends, and started thinking in systems.",
    tag: "Expansion",
  },
  {
    year: "2024",
    title: "Explored AI & Cloud",
    desc: "Integrated GROQ and Gemini APIs into real projects. Deployed on Firebase and Cloudinary. Started building intelligent, connected apps.",
    tag: "Intelligence",
  },
  {
    year: "2025",
    title: "Scaling & Web3",
    desc: "Diving into Ethers.js, smart contracts, and wallet-based auth. Building scalable, decentralized systems that push the web forward.",
    tag: "Frontier",
  },
];

export default function Journey() {
  return (
    <SectionContainer id="journey">
      {/* Label */}
      <ScrollReveal animation="fadeLeft">
        <div className="flex items-center gap-3 mb-12">
          <span
            className="text-xs font-mono uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            06 / Journey
          </span>
          <div className="flex-1 h-px max-w-[80px]" style={{ background: "var(--border)" }} />
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fadeUp" delay={0.1}>
        <h2
          className="font-display font-bold mb-16 leading-tight"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--text)" }}
        >
          The path <span className="gradient-text">so far</span>
        </h2>
      </ScrollReveal>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent), var(--glow), transparent)",
          }}
        />

        <div className="flex flex-col gap-0">
          {JOURNEY.map(({ year, title, desc, tag }, idx) => {
            const isRight = idx % 2 === 0;
            return (
              <ScrollReveal
                key={title}
                animation={isRight ? "fadeRight" : "fadeLeft"}
                delay={0.1 + idx * 0.1}
              >
                <div
                  className={`relative flex items-start gap-8 pb-12 pl-16 md:pl-0 ${
                    isRight ? "md:pr-[calc(50%+2rem)] md:pl-0 md:text-right" : "md:pl-[calc(50%+2rem)]"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div
                    className="absolute left-4 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center md:left-1/2 md:-translate-x-1/2 transition-all duration-300"
                    style={{
                      borderColor: "var(--accent)",
                      background: "var(--bg)",
                      boxShadow: "0 0 16px var(--glow)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 p-5 rounded-2xl transition-all duration-400 hover:-translate-y-1.5 hover:scale-[1.015] cursor-hover"
                    style={{
                      background: "var(--surface)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--card-shadow)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "var(--card-shadow), 0 0 24px var(--glow)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow)";
                    }}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${isRight ? "md:flex-row-reverse md:justify-start" : ""}`}
                    >
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-full"
                        style={{
                          background: "var(--glow)",
                          border: "1px solid var(--border)",
                          color: "var(--accent)",
                        }}
                      >
                        {year}
                      </span>
                      <span
                        className="text-xs font-mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {tag}
                      </span>
                    </div>
                    <h3
                      className="font-display font-semibold text-base mb-1.5"
                      style={{ color: "var(--text)" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
