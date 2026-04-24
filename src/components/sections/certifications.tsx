"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Trophy, Star, Zap, Award, Medal } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";

const CERTS = [
  {
    title: "HackHazard 2025",
    type: "Hackathon",
    year: "2025",
    icon: <Zap size={24} strokeWidth={1.5} />,
    link: "https://drive.google.com/drive/folders/placeholder",
    colSpan: "lg:col-span-4",
  },
  {
    title: "Bharatiya Antariksh",
    type: "National Hackathon",
    year: "2025",
    icon: <Trophy size={24} strokeWidth={1.5} />,
    link: "https://drive.google.com/drive/folders/placeholder",
    colSpan: "lg:col-span-4",
  },
  {
    title: "JWOC 2025",
    type: "Open Source",
    year: "2025",
    icon: <Star size={24} strokeWidth={1.5} />,
    link: "https://drive.google.com/drive/folders/placeholder",
    colSpan: "lg:col-span-4",
  },
  {
    title: "Solution Challenge",
    type: "Google Challenge",
    year: "2025",
    icon: <Trophy size={24} strokeWidth={1.5} />,
    link: "https://drive.google.com/drive/folders/placeholder",
    colSpan: "lg:col-span-6",
  },
  {
    title: "Apertre 3.0",
    type: "Open Source",
    year: "2026",
    icon: <Award size={24} strokeWidth={1.5} />,
    link: "https://drive.google.com/drive/folders/placeholder",
    colSpan: "lg:col-span-6",
  },
  {
    title: "Code for Change",
    type: "Hackathon",
    year: "2024",
    icon: <Zap size={24} strokeWidth={1.5} />,
    link: "https://drive.google.com/drive/folders/placeholder",
    colSpan: "lg:col-span-4",
  },
  {
    title: "Code for Change 2.0",
    type: "Hackathon",
    year: "2026",
    icon: <Medal size={24} strokeWidth={1.5} />,
    link: "https://drive.google.com/drive/folders/placeholder",
    colSpan: "lg:col-span-4",
  },
  {
    title: "Winter of Code 5.0",
    type: "Open Source",
    year: "2023",
    icon: <Star size={24} strokeWidth={1.5} />,
    link: "https://drive.google.com/drive/folders/placeholder",
    colSpan: "lg:col-span-4",
  },
];

export default function Certifications() {
  return (
    <SectionContainer id="certifications" className="py-32">
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "var(--text)" }} />
              <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: "var(--text)" }}>
                04 / Recognition
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1]" style={{ color: "var(--text)" }}>
              Awards & <br />
              <span className="italic font-light" style={{ color: "var(--text-muted)" }}>Certifications.</span>
            </h2>
          </div>
          <p className="text-sm font-mono uppercase tracking-widest max-w-xs border-l pl-6" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
            A curated log of hackathons, open source contributions, and industry milestones
          </p>
        </motion.div>

        {/* High-End Bento Grid (Compact Version) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
          {CERTS.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 0.98 }}
              className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-3xl overflow-hidden border transition-all duration-500 shadow-lg hover:shadow-xl ${cert.colSpan}`}
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              
              {/* Dynamic Glowing Orb Background */}
              <div 
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-[0.05] transition-all duration-1000 blur-[60px]" 
                style={{ background: "var(--text)" }} 
              />
              
              <div className="relative z-10 flex justify-between items-start mb-10 md:mb-12">
                <div 
                  className="w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:-rotate-6 shadow-inner"
                  style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text)" }}
                >
                  {cert.icon}
                </div>
                
                <div 
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--text)] group-hover:border-[var(--text)]"
                  style={{ borderColor: "var(--border)", color: "var(--text)" }}
                >
                  <ArrowUpRight size={18} className="transition-all duration-500 group-hover:rotate-45 group-hover:text-[var(--bg)]" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span 
                    className="text-[10px] sm:text-xs font-mono px-3 py-1 rounded-full border shadow-sm" 
                    style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "var(--bg)" }}
                  >
                    {cert.year}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    {cert.type}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight" style={{ color: "var(--text)" }}>
                  {cert.title}
                </h3>
              </div>
              
              {/* Sleek inner glass overlay line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "linear-gradient(90deg, transparent, var(--text), transparent)", filter: "blur(4px)" }} />
              
            </motion.a>
          ))}
        </div>

      </div>
    </SectionContainer>
  );
}
