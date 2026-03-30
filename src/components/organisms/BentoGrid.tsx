import { useTranslation } from "react-i18next";
import MaterialIcon from "../atoms/MaterialIcon";
import solveArenaImg from "../../assets/solve_arena_01.png";
import solveArenaBg from "../../assets/solve_arena_02.png";
import mango01 from "../../assets/mango_01.png";
import mango02 from "../../assets/mango_02.png";
import mango03 from "../../assets/mango_03.png";
import coopYsaImg from "../../assets/coop_ysa_01.png";
import coopYsaBg from "../../assets/coop_ysa_02.png";

const SOLVE_ARENA_URL = "https://melkoh02.github.io/solve-arena/";
const SOLVE_ARENA_REPO = "https://github.com/Melkoh02/solve-arena";
const MELKOH_DEV_REPO = "https://github.com/Melkoh02/melkoh.dev";
const MANGO_URL = "https://play.google.com/store/apps/details?id=com.mangopayment.mangoapp&hl=es";
const COOP_YSA_URL = "https://www.xn--ysateos-8za.com/";

export default function BentoGrid() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="px-6 lg:px-24 py-24 max-w-7xl mx-auto bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Billetera Mango — Featured Card */}
        <a
          href={MANGO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between min-h-[400px] group hover:shadow-lg transition-all duration-300">
          <div>
            <span className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant">
              {t("portfolio.mangoLabel")}
            </span>
            <h3 className="text-2xl font-bold mt-4 tracking-tight group-hover:text-primary-fixed transition-colors">
              {t("portfolio.mangoTitle")}
            </h3>
            <p className="mt-2 text-sm text-on-surface-variant max-w-xl">
              {t("portfolio.mangoSubtitle")}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <img
              src={mango02}
              alt=""
              className="w-1/4 max-w-[160px] rounded-xl object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <img
              src={mango01}
              alt={t("portfolio.mangoAlt")}
              className="w-1/3 max-w-[200px] rounded-xl object-contain z-10 group-hover:scale-110 transition-transform duration-500"
            />
            <img
              src={mango03}
              alt=""
              className="w-1/4 max-w-[160px] rounded-xl object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </a>

        {/* Mango Details Card — Image background */}
        <div className="md:col-span-4 rounded-xl flex flex-col justify-end relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <img
            src={mango01}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/95" />
          <div className="relative p-8 space-y-5">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-white">
                {t("portfolio.mangoStat")}
              </h3>
              <p className="mt-1 text-sm text-white/60 uppercase tracking-widest font-label">
                {t("portfolio.mangoStatLabel")}
              </p>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              {t("portfolio.mangoStatDescription")}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["React Native", "TypeScript", "Redux", "UIKit", "Kotlin"].map(
                tech => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur-sm">
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Solve Arena Details Card — LEFT (mirrored) */}
        <div className="md:col-span-4 rounded-xl flex flex-col justify-end relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <img
            src={solveArenaBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/95" />
          <div className="relative p-8 space-y-6">
            <div>
              <h4 className="font-label text-[0.65rem] uppercase tracking-widest text-white/50 mb-2">
                {t("portfolio.realtimeTechLabel")}
              </h4>
              <p className="text-sm text-white leading-relaxed">
                {t("portfolio.realtimeDescription")}
              </p>
            </div>
            <div>
              <h4 className="font-label text-[0.65rem] uppercase tracking-widest text-white/50 mb-2">
                {t("portfolio.realtimeFeaturesLabel")}
              </h4>
              <p className="text-sm text-white leading-relaxed">
                {t("portfolio.realtimeFeatures")}
              </p>
            </div>
          </div>
        </div>

        {/* Solve Arena Card — RIGHT (mirrored) */}
        <a
          href={SOLVE_ARENA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between min-h-[400px] group hover:shadow-lg transition-all duration-300">
          <div>
            <span className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant">
              {t("portfolio.solveArenaLabel")}
            </span>
            <h3 className="text-2xl font-bold mt-4 tracking-tight group-hover:text-primary-fixed transition-colors">
              {t("portfolio.solveArenaTitle")}
            </h3>
            <p className="mt-2 text-sm text-on-surface-variant">
              {t("portfolio.solveArenaSubtitle")}
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-8 bg-surface-container">
            <img
              src={solveArenaImg}
              alt={t("portfolio.solveArenaAlt")}
              className="object-cover w-full h-full opacity-90 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </a>

        {/* Cooperativa Ysateños — Featured Card */}
        <a
          href={COOP_YSA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between min-h-[400px] group hover:shadow-lg transition-all duration-300">
          <div>
            <span className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant">
              {t("portfolio.coopYsaLabel")}
            </span>
            <h3 className="text-2xl font-bold mt-4 tracking-tight group-hover:text-primary-fixed transition-colors">
              {t("portfolio.coopYsaTitle")}
            </h3>
            <p className="mt-2 text-sm text-on-surface-variant max-w-xl">
              {t("portfolio.coopYsaSubtitle")}
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-8 bg-surface-container">
            <img
              src={coopYsaImg}
              alt={t("portfolio.coopYsaAlt")}
              className="object-cover object-top w-full h-full opacity-90 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </a>

        {/* Coop Ysateños Details Card */}
        <div className="md:col-span-4 rounded-xl flex flex-col justify-end relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <img
            src={coopYsaBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/95" />
          <div className="relative p-8 space-y-6">
            <div>
              <h4 className="font-label text-[0.65rem] uppercase tracking-widest text-white/50 mb-2">
                {t("portfolio.coopYsaTechLabel")}
              </h4>
              <p className="text-sm text-white leading-relaxed">
                {t("portfolio.coopYsaTechDescription")}
              </p>
            </div>
            <div>
              <h4 className="font-label text-[0.65rem] uppercase tracking-widest text-white/50 mb-2">
                {t("portfolio.coopYsaFeaturesLabel")}
              </h4>
              <p className="text-sm text-white leading-relaxed">
                {t("portfolio.coopYsaFeatures")}
              </p>
            </div>
          </div>
        </div>

        {/* View Source Card — LEFT */}
        <a
          href={SOLVE_ARENA_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl flex items-center justify-between group hover:shadow-lg transition-all duration-300">
          <div>
            <h3 className="text-lg font-bold tracking-tight group-hover:text-primary-fixed transition-colors">
              {t("portfolio.viewRepoTitle")}
            </h3>
            <p className="text-sm text-on-surface-variant mt-1">
              {t("portfolio.viewRepoDescription")}
            </p>
          </div>
          <MaterialIcon
            icon="arrow_forward"
            className="text-3xl group-hover:translate-x-1 transition-transform"
          />
        </a>

        {/* melkoh.dev Card — RIGHT */}
        <a
          href={MELKOH_DEV_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-4 bg-surface-container-highest p-8 rounded-xl group hover:shadow-lg transition-all duration-300">
          <span className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant">
            {t("portfolio.melkohDevLabel")}
          </span>
          <h3 className="text-lg font-bold tracking-tight mt-3 group-hover:text-primary-fixed transition-colors">
            {t("portfolio.melkohDevTitle")}
          </h3>
          <p className="mt-2 text-sm text-on-surface-variant">
            {t("portfolio.melkohDevDescription")}
          </p>
        </a>
      </div>
    </section>
  );
}
