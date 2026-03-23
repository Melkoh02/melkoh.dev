import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  className?: string;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-on-primary px-8 py-4 rounded-lg font-medium text-sm tracking-wide active:scale-95 transition-transform duration-200",
  secondary:
    "bg-surface-container-high text-on-surface px-8 py-4 rounded-lg font-medium text-sm tracking-wide active:scale-95 transition-transform duration-200",
  tertiary:
    "text-on-surface text-sm font-medium uppercase tracking-[0.05em] active:scale-95 transition-transform duration-200",
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
}
