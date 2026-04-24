"use client";

import { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

interface GlowButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: ReactNode;
}

export default function GlowButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  style,
  target,
  rel,
  type = "button",
  disabled,
  icon,
}: GlowButtonProps) {
  const baseClass = clsx(
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium font-body cursor-hover",
    "transition-all duration-400 ease-out",
    "hover:-translate-y-1 hover:scale-[1.03]",
    "active:scale-[0.97] active:translate-y-0",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
    className
  );

  const variantStyles: Record<Variant, CSSProperties> = {
    primary: {
      background: "var(--gradient-accent)",
      color: "#fff",
      boxShadow: "0 0 24px var(--glow), 0 4px 16px rgba(0,0,0,0.2)",
      border: "1px solid transparent",
    },
    secondary: {
      background: "var(--surface)",
      color: "var(--text)",
      backdropFilter: "blur(16px)",
      boxShadow: "var(--card-shadow)",
      border: "1px solid var(--border)",
    },
    ghost: {
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid var(--accent)",
      boxShadow: "inset 0 0 0 0 var(--glow)",
    },
  };

  const hoverStyles: Record<Variant, Partial<CSSProperties>> = {
    primary: {
      boxShadow: "0 0 48px var(--glow-strong), 0 8px 32px rgba(0,0,0,0.25)",
    },
    secondary: {
      borderColor: "var(--accent)",
      boxShadow: "var(--card-shadow), 0 0 24px var(--glow)",
    },
    ghost: {
      background: "var(--glow)",
      boxShadow: "0 0 28px var(--glow)",
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const el = e.currentTarget;
    Object.assign(el.style, hoverStyles[variant]);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const el = e.currentTarget;
    Object.assign(el.style, variantStyles[variant]);
  };

  const props = {
    className: baseClass,
    style: { ...variantStyles[variant], ...style },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...props}>
        {icon && <span className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} {...props}>
      {icon && <span className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
      {children}
    </button>
  );
}
