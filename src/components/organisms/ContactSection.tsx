import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="px-6 lg:px-24 py-40 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto text-center space-y-12">
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
    </section>
  );
}
