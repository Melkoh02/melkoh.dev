import { useTranslation } from "react-i18next";

const SOCIAL_URLS = {
  linkedin: "https://www.linkedin.com/in/milko-gutierrez/",
  github: "https://github.com/Melkoh02",
  instagram: "https://www.instagram.com/melkoh.dev",
} as const;

export default function SocialLinks() {
  const { t } = useTranslation();

  const links = [
    { href: SOCIAL_URLS.linkedin, label: t("footer.linkedin") },
    { href: SOCIAL_URLS.github, label: t("footer.github") },
    { href: SOCIAL_URLS.instagram, label: t("footer.instagram") },
  ];

  return (
    <div className="flex gap-8">
      {links.map(link => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-headline text-xs tracking-[0.1rem] uppercase font-medium text-zinc-500 hover:text-zinc-300 transition-colors opacity-80 hover:opacity-100">
          {link.label}
        </a>
      ))}
    </div>
  );
}
