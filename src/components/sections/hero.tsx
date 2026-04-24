"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Magnetic from "@/components/ui/magnetic";
import { ArrowRight, ExternalLink } from "lucide-react";

// ─── Animated number counter ──────────────────────────
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const dur = 1600;
        const animate = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - t, 4);
          el.textContent = Math.floor(ease * value) + suffix;
          if (t < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Scroll-driven exit
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const contentY   = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const contentOp  = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // Mouse spotlight
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 22 });
  const sy = useSpring(my, { stiffness: 50, damping: 22 });
  const spotBg = useMotionTemplate`radial-gradient(500px circle at ${sx}px ${sy}px, var(--glow-strong), transparent 80%)`;

  function onMouseMove(e: React.MouseEvent) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    const mouse = { x: -999, y: -999 };

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.8 + 0.4,
      a: Math.random() * 0.4 + 0.1,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) { p.vx += (dx / d) * 0.4; p.vy += (dy / d) * 0.4; }
        p.vx *= 0.97; p.vy *= 0.97;
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 110) * 0.06})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={onMouseMove}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.5 }} />

      {/* Ambient aurora glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full mix-blend-screen"
          style={{ background: "radial-gradient(circle, var(--glow-strong) 0%, transparent 65%)", filter: "blur(80px)", opacity: 0.35 }}
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[55vw] h-[55vw] rounded-full mix-blend-screen"
          style={{ background: "radial-gradient(circle, var(--glow-gold) 0%, transparent 65%)", filter: "blur(100px)", opacity: 0.25 }}
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Mouse spotlight */}
        <motion.div className="absolute inset-0 mix-blend-screen" style={{ background: spotBg, opacity: 0.45 }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }}
        />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--bg-deep) 100%)" }} />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12"
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7"
        >
          <span
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.18em]"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)", backdropFilter: "blur(12px)" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--accent)" }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "var(--accent)" }} />
            </span>
            Open to new opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display font-black tracking-tight leading-none mb-6" style={{ fontSize: "clamp(2.8rem, 7.5vw, 7rem)" }}>
          {["Engineering", "the Future", "of Web."].map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.div
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.12 }}
                style={{ color: i === 1 ? undefined : i === 2 ? "var(--text-muted)" : "var(--text)" }}
                className={i === 1 ? "gradient-text" : ""}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </h1>

        {/* Sub + CTA row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-12">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base font-light leading-relaxed max-w-xs"
            style={{ color: "var(--text-muted)" }}
          >
            Full Stack Developer building{" "}
            <span style={{ color: "var(--text)", fontWeight: 500 }}>AI-driven systems</span> and
            immersive digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <Magnetic strength={0.18}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300"
                style={{ background: "var(--text)", color: "var(--bg-deep)", boxShadow: "0 0 0 0 var(--glow)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 32px var(--glow-strong)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 0 var(--glow)")}
              >
                View Work <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
              >
                Contact <ExternalLink size={11} />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex items-center gap-10 md:gap-16 pt-7"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          {[{ n: 10, s: "+", label: "Projects" }, { n: 7, s: "+", label: "Hackathons" }, { n: 15, s: "+", label: "Technologies" }].map(({ n, s, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-black tabular-nums" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: "var(--text)", lineHeight: 1 }}>
                <AnimatedNumber value={n} suffix={s} />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest mt-1" style={{ color: "var(--text-muted)" }}>{label}</div>
            </div>
          ))}

          {/* Scroll hint */}
          <div className="ml-auto hidden md:flex flex-col items-center gap-1.5">
            <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)", opacity: 0.5 }}>Scroll</span>
            <div className="w-px h-10 overflow-hidden relative" style={{ background: "var(--border-subtle)" }}>
              <motion.div
                className="absolute inset-x-0 top-0 h-1/2"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
                style={{ background: "var(--text)" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
