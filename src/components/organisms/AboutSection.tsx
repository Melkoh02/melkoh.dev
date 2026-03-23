import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="px-6 lg:px-24 py-40 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="sticky top-40 h-fit">
          <h2 className="text-4xl font-bold tracking-tighter">
            {t("about.title")}
          </h2>
        </div>

        <div className="space-y-12">
          <p className="text-2xl leading-relaxed text-on-surface font-light">
            {t("about.paragraph1")}
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            {t("about.paragraph2")}
          </p>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-surface-variant">
            <div>
              <h4 className="font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-4">
                {t("about.focusLabel")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>{t("about.focusUiUx")}</li>
                <li>{t("about.focusArchitecture")}</li>
                <li>{t("about.focusStrategy")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-4">
                {t("about.valuesLabel")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>{t("about.valuesIntegrity")}</li>
                <li>{t("about.valuesSilence")}</li>
                <li>{t("about.valuesPerformance")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
