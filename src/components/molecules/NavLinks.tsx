import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import NavLink from "../atoms/NavLink";
import useActiveSection from "../../lib/hooks/useActiveSection";

const SECTION_IDS = ["home", "projects", "about", "contact"];

export default function NavLinks() {
  const { t } = useTranslation();
  const activeSection = useActiveSection(SECTION_IDS);

  const links = useMemo(
    () => [
      { id: "home", label: t("nav.home") },
      { id: "projects", label: t("nav.projects") },
      { id: "about", label: t("nav.about") },
      { id: "contact", label: t("nav.contact") },
    ],
    [t],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, id: string) => {
      e.preventDefault();
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight text-sm font-medium">
      {links.map(link => (
        <NavLink
          key={link.id}
          href={`#${link.id}`}
          label={link.label}
          isActive={activeSection === link.id}
          onClick={e => handleClick(e, link.id)}
        />
      ))}
    </div>
  );
}
