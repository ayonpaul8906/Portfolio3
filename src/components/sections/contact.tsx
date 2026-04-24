"use client";

import { useState, FormEvent } from "react";
import SectionContainer from "@/components/ui/section-container";
import GlassCard from "@/components/ui/glass-card";
import GlowButton from "@/components/ui/glow-button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Magnetic from "@/components/ui/magnetic";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";

const SOCIAL = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "ayonpaul8906@gmail.com",
    href: "mailto:ayonpaul8906@gmail.com",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/ayon2407s",
    href: "https://linkedin.com/in/ayon2407s",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/ayonpaul8906",
    href: "https://github.com/ayonpaul8906",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      _subject: formData.get("_subject") || "New Contact Form Submission",
      message: formData.get("message"),
    };

    try {
      await fetch("https://formsubmit.co/ajax/ayonpaul8906@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    color: "var(--text)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "var(--accent)";
    e.target.style.boxShadow = "0 0 0 3px var(--glow), 0 0 20px var(--glow)";
    e.target.style.transform = "translateY(-1px)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "var(--border)";
    e.target.style.boxShadow = "none";
    e.target.style.transform = "translateY(0)";
  };

  return (
    <SectionContainer id="contact">
      {/* Label */}
      <ScrollReveal animation="fadeLeft">
        <div className="flex items-center gap-3 mb-12">
          <span
            className="text-xs font-mono uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            08 / Contact
          </span>
          <div className="flex-1 h-px max-w-[80px]" style={{ background: "var(--border)" }} />
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2
              className="font-display font-bold mb-4 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--text)" }}
            >
              Let&apos;s build something{" "}
              <span className="gradient-text">together</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Open to internships, freelance projects, and collaborative ventures.
              If you have an idea or opportunity, I&apos;d love to hear about it.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-3">
            {SOCIAL.map(({ icon, label, value, href }, idx) => (
              <ScrollReveal key={label} animation="fadeLeft" delay={0.25 + idx * 0.1}>
                <Magnetic strength={0.1}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-400 cursor-hover"
                    style={{
                      background: "var(--surface)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px var(--glow)";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(6px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: "var(--glow)",
                        border: "1px solid var(--border)",
                        color: "var(--accent)",
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs font-mono mb-0.5" style={{ color: "var(--text-muted)" }}>
                        {label}
                      </div>
                      <div className="text-sm font-medium" style={{ color: "var(--text)" }}>
                        {value}
                      </div>
                    </div>
                  </a>
                </Magnetic>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <ScrollReveal animation="fadeRight" delay={0.2}>
          <GlassCard className="p-8" hover={false} tilt={false}>
            <h3
              className="font-display font-semibold text-lg mb-6"
              style={{ color: "var(--text)" }}
            >
              Send a message
            </h3>

            {sent ? (
              <div
                className="flex flex-col items-center justify-center gap-3 py-12 text-center"
              >
                <CheckCircle size={40} style={{ color: "var(--accent)" }} />
                <div className="font-display font-semibold text-lg" style={{ color: "var(--text)" }}>
                  Message sent!
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  I&apos;ll get back to you as soon as possible.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    Subject
                  </label>
                  <input
                    name="_subject"
                    type="text"
                    required
                    placeholder="Project inquiry, collaboration..."
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <GlowButton
                  type="submit"
                  disabled={loading}
                  variant="primary"
                  className="w-full justify-center"
                  icon={<Send size={15} />}
                >
                  {loading ? "Sending..." : "Send Message"}
                </GlowButton>
              </form>
            )}
          </GlassCard>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
}
