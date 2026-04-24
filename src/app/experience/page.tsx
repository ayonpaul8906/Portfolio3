"use client";

import { Briefcase, Users, Code, Award } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";
import Footer from "@/components/footer";

const EXPERIENCES = [
  {
    role: "Lead",
    org: "GDG on Campus BCREC",
    period: "Sept 2025 – Present",
    type: "Leadership",
    status: "active",
    desc: "Leading the Google Developer Groups chapter at BCREC. Organizing technical workshops, speaker sessions, hackathons, and community events that bridge students with the broader developer ecosystem.",
    responsibilities: [
      "Organizing technical workshops and speaker sessions",
      "Managing community events and hackathons on campus",
      "Mentoring junior developers in web and cloud technologies",
      "Building partnerships with Google and tech organizations",
    ],
    icon: <Users size={20} />,
    accent: "#00c8f0",
    glow: "rgba(0,200,240,0.12)",
  },
  {
    role: "Web Developer Intern",
    org: "SkillCraft Technology",
    period: "Sep – Oct 2024",
    type: "Internship",
    status: "completed",
    desc: "Contributed to production frontend development, shipping real features used by thousands of users. Worked with React-based architecture, implemented responsive UI components, and participated in code reviews.",
    responsibilities: [
      "Built responsive React components for production apps",
      "Implemented UI/UX improvements based on design specs",
      "Participated in code reviews and team stand-ups",
      "Collaborated using Git workflows and agile sprints",
    ],
    icon: <Code size={20} />,
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.12)",
  },
  {
    role: "Open Source Contributor",
    org: "JWOC 2025",
    period: "Jan – Feb 2025",
    type: "Open Source",
    status: "completed",
    desc: "Participated in Jwoc open source event, contributing across multiple repositories. Resolved issues, submitted PRs, and collaborated with maintainers worldwide.",
    responsibilities: [
      "Submitted multiple merged pull requests",
      "Fixed UI bugs and improved accessibility",
      "Wrote documentation and README improvements",
      "Reviewed and commented on other contributors' work",
    ],
    icon: <Award size={20} />,
    accent: "#22c55e",
    glow: "rgba(34,197,94,0.12)",
  },
];

const STATUS_META: Record<string, { label: string; color: string; bg: string }> = {
  active: { label: "● Active", color: "#00c864", bg: "rgba(0,200,100,0.1)" },
  completed: { label: "Completed", color: "#94a3b8", bg: "rgba(148,163,184,0.08)" },
};

export default function ExperiencePage() {
  return (
    <>
      <div className="pt-24">
        <SectionContainer>
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <a
                href="/"
                className="text-xs font-mono transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
              >
                ← Home
              </a>
              <span style={{ color: "var(--border)" }}>/</span>
              <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>Experience</span>
            </div>

            <h1
              className="font-display font-bold mb-4 leading-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "var(--text)" }}
            >
              Experience
            </h1>
            <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
              Leadership roles, internships, and open source — the work that shaped who I am as a developer.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{
                background: "linear-gradient(to bottom, var(--accent), var(--glow), transparent)",
              }}
            />

            <div className="flex flex-col gap-8 pl-20">
              {EXPERIENCES.map(({ role, org, period, type, status, desc, responsibilities, icon, accent, glow }) => (
                <div
                  key={role + org}
                  className="relative transition-all duration-300"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[3.6rem] top-5 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: accent,
                      background: "var(--bg)",
                      boxShadow: `0 0 16px ${glow}`,
                    }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: accent }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl p-7 transition-all duration-300"
                    style={{
                      background: "var(--surface)",
                      backdropFilter: "blur(16px) saturate(180%)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--card-shadow)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = accent;
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `var(--card-shadow), 0 0 32px ${glow}`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow)";
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: glow,
                            border: `1px solid ${accent}40`,
                            color: accent,
                          }}
                        >
                          {icon}
                        </div>
                        <div>
                          <h3
                            className="font-display font-bold text-xl"
                            style={{ color: "var(--text)" }}
                          >
                            {role}
                          </h3>
                          <p className="text-sm font-medium mt-0.5" style={{ color: accent }}>
                            {org}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:text-right">
                        <span
                          className="text-xs px-2.5 py-1 rounded-full font-mono"
                          style={{
                            background: STATUS_META[status]?.bg,
                            color: STATUS_META[status]?.color,
                            border: `1px solid ${STATUS_META[status]?.color}40`,
                          }}
                        >
                          {STATUS_META[status]?.label}
                        </span>
                        <span
                          className="text-xs font-mono px-2.5 py-1 rounded-lg"
                          style={{
                            background: "var(--surface-2)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {type}
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {desc}
                    </p>

                    {/* Responsibilities */}
                    <div
                      className="p-4 rounded-xl"
                      style={{
                        background: "var(--surface-2)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div
                        className="text-xs font-mono mb-3 uppercase tracking-wider"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Key Contributions
                      </div>
                      <ul className="flex flex-col gap-2">
                        {responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ background: accent }}
                            />
                            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                              {r}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </div>
      <Footer />
    </>
  );
}
