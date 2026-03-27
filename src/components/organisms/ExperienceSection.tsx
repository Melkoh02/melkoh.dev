import { useTranslation } from "react-i18next";
import SectionLabel from "../atoms/SectionLabel";
import TimelineItem from "../molecules/TimelineItem";

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="px-6 lg:px-24 py-40 max-w-7xl mx-auto">
      <div className="mb-20">
        <SectionLabel>{t("experience.label")}</SectionLabel>
        <h2 className="text-4xl font-bold tracking-tighter mt-4">
          {t("experience.title")}
        </h2>
        <p className="text-lg text-on-surface-variant mt-4 max-w-2xl">
          {t("experience.description")}
        </p>
      </div>

      <div className="relative">
        {/* Vertical timeline line — desktop only */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-outline-variant/30" />

        <TimelineItem
          position="left"
          period={t("experience.period1")}
          company={t("experience.company1")}
          badge={t("experience.current")}
          badgeVariant="current"
          role={t("experience.role1")}
          items={[
            { icon: "smartphone", text: t("experience.role1Item1") },
            { icon: "groups", text: t("experience.role1Item2") },
            { icon: "build", text: t("experience.role1Item3") },
          ]}
        />

        <TimelineItem
          position="right"
          period={t("experience.period2")}
          company={t("experience.company2")}
          badge={t("experience.months6")}
          role={t("experience.role2")}
          items={[
            { icon: "web", text: t("experience.role2Item1") },
            { icon: "api", text: t("experience.role2Item2") },
            { icon: "cloud", text: t("experience.role2Item3") },
          ]}
        />

        <TimelineItem
          position="left"
          period={t("experience.period3")}
          company={t("experience.company3")}
          badge={t("experience.year1")}
          role={t("experience.role3")}
          items={[
            { icon: "devices", text: t("experience.role3Item1") },
            { icon: "api", text: t("experience.role3Item2") },
            { icon: "smartphone", text: t("experience.role3Item3") },
          ]}
        />

        <TimelineItem
          position="right"
          period={t("experience.period4")}
          company={t("experience.company4")}
          badge={t("experience.internship")}
          role={t("experience.role4")}
          items={[
            { icon: "bug_report", text: t("experience.role4Item1") },
            { icon: "settings_suggest", text: t("experience.role4Item2") },
            { icon: "build", text: t("experience.role4Item3") },
          ]}
        />

        <TimelineItem
          position="left"
          period={t("experience.period5")}
          company={t("experience.company5")}
          badge={t("experience.freelance")}
          role={t("experience.role5")}
          items={[
            { icon: "rocket_launch", text: t("experience.role5Item1") },
            { icon: "devices", text: t("experience.role5Item2") },
            { icon: "dns", text: t("experience.role5Item3") },
          ]}
        />
      </div>
    </section>
  );
}
