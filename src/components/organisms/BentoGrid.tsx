import { useTranslation } from "react-i18next";
import MaterialIcon from "../atoms/MaterialIcon";
import solveArenaImg from "../../assets/solve_arena_01.png";
import solveArenaBg from "../../assets/solve_arena_02.png";

const SOLVE_ARENA_URL = "https://melkoh02.github.io/solve-arena/";
const SOLVE_ARENA_REPO = "https://github.com/Melkoh02/solve-arena";
const MELKOH_DEV_REPO = "https://github.com/Melkoh02/melkoh.dev";

export default function BentoGrid() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="px-6 lg:px-24 py-24 max-w-7xl mx-auto bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Solve Arena — Featured Card */}
        <a
          href={SOLVE_ARENA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between min-h-[400px] group hover:shadow-lg transition-all duration-300">
          <div>
            <span className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant">
              {t("portfolio.featuredLabel")}
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

        {/* Tech Details Card */}
        <div className="md:col-span-4 rounded-xl flex flex-col justify-end relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <img
            src={solveArenaBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
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

        {/* melkoh.dev Card */}
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

        {/* View Source Card */}
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
      </div>
    </section>
  );
}
