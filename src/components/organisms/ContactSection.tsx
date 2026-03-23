import { useTranslation } from "react-i18next";
import SocialLinks from "../molecules/SocialLinks";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="px-6 lg:px-24 pb-12 bg-zinc-950 text-white flex flex-col min-h-dvh">
      <div className="max-w-7xl mx-auto text-center space-y-12 flex-1 flex flex-col justify-center">
        <span className="font-label text-xs uppercase tracking-[0.3em] opacity-50">
          {t("contact.label")}
        </span>
        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter leading-tight">
          {t("contact.title")}
        </h2>
        <div className="pt-12">
          <a
            href={`mailto:${t("contact.email")}`}
            className="text-2xl md:text-3xl font-light hover:opacity-70 transition-opacity border-b-2 border-white/20 pb-2">
            {t("contact.email")}
          </a>
        </div>
      </div>

      <footer className="mt-auto pt-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-headline text-xs tracking-[0.1rem] uppercase font-medium text-zinc-500">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
          <SocialLinks />
        </div>
      </footer>
    </section>
  );
}
