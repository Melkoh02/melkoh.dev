const links = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "GitHub" },
  { href: "#", label: "Layers" },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-8">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="font-headline text-xs tracking-[0.1rem] uppercase font-medium text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors opacity-80 hover:opacity-100"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
