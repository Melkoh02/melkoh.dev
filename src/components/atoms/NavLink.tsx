import type { MouseEventHandler } from "react";

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLink({
  href,
  label,
  isActive = false,
  onClick,
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={
        isActive
          ? "text-zinc-900 dark:text-zinc-50 border-b border-zinc-900 dark:border-zinc-50 pb-1"
          : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
      }>
      {label}
    </a>
  );
}
