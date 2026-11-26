import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
};

/**
 * CSS-only scroll reveal.
 *
 * The content is always visible by default. Browsers that support
 * scroll-driven animations get a subtle fade-up as the block enters the
 * viewport; everyone else simply sees the content without motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const Tag = as;

  return (
    <Tag
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
