import { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
  fullBleed?: boolean;
  tight?: boolean;
}

export default function SectionContainer({
  children,
  id,
  className,
  style,
  fullBleed = false,
  tight = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative w-full",
        tight ? "py-12 md:py-16" : "py-20 md:py-28",
        className
      )}
      style={style}
    >
      <div
        className={clsx(
          "relative z-10 px-6",
          !fullBleed && "max-w-8xl mx-auto"
        )}
      >
        {children}
      </div>
    </section>
  );
}
