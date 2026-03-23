import { useTranslation } from "react-i18next";
import NavLink from "../atoms/NavLink";

export default function NavLinks() {
  const { t } = useTranslation();

  const links = [
    { href: "#about", label: t("nav.about"), isActive: true },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight text-sm font-medium">
      {links.map(link => (
        <NavLink key={link.href} {...link} />
      ))}
    </div>
  );
}
