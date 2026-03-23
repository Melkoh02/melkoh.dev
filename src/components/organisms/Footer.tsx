import { useTranslation } from "react-i18next";
import SocialLinks from "../molecules/SocialLinks";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-12 px-6 mt-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="font-headline text-xs tracking-[0.1rem] uppercase font-medium text-zinc-400 dark:text-zinc-500">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
