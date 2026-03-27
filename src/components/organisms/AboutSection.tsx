import { useTranslation } from "react-i18next";
import SectionLabel from "../atoms/SectionLabel";
import MaterialIcon from "../atoms/MaterialIcon";

export default function AboutSection() {
  const { t } = useTranslation();

  const stackCategories = [
    {
      icon: "devices",
      titleKey: "about.stackFrontend",
      techs: ["React", "React Native", "TypeScript", "JavaScript", "Tailwind"],
    },
    {
      icon: "dns",
      titleKey: "about.stackBackend",
      techs: ["Python", "Django", "DRF", "PostgreSQL", "JWT"],
    },
    {
      icon: "handyman",
      titleKey: "about.stackTools",
      techs: ["Git", "Docker", "Figma", "Postman", "PostGIS", "SQL", "MongoDB"],
    },
    {
      icon: "translate",
      titleKey: "about.stackLanguages",
      techs: [
        t("about.langEnglish"),
        t("about.langSpanish"),
        t("about.langJapanese"),
      ],
    },
  ];

  return (
    <section
      id="about"
      className="px-6 lg:px-24 py-32 max-w-7xl mx-auto min-h-dvh flex flex-col justify-center">
      {/* Main section title — full width */}
      <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter mb-16">
        {t("about.sectionTitle")}
      </h2>

      {/* 2-column layout: tech stack left, philosophy right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — Tech Stack */}
        <div>
          <SectionLabel>{t("about.stackLabel")}</SectionLabel>
          <h3 className="text-xl font-bold tracking-tighter mt-2 mb-8">
            {t("about.stackTitle")}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {stackCategories.map(cat => (
              <div
                key={cat.titleKey}
                className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/20">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <MaterialIcon
                    icon={cat.icon}
                    className="text-lg text-on-primary"
                  />
                </div>
                <h4 className="text-sm font-bold tracking-tight mb-3">
                  {t(cat.titleKey)}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.techs.map(tech => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Philosophy */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold tracking-tighter">
            {t("about.title")}
          </h3>
          <p className="text-xl leading-relaxed text-on-surface font-light">
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
