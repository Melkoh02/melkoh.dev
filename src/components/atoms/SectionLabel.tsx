import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <span
      className={`font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant font-medium ${className}`}>
      {children}
    </span>
  );
}
