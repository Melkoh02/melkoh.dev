interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div
      className={`text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 ${className}`}
    >
      Melkoh
    </div>
  );
}
