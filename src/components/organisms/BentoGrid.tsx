import { useTranslation } from "react-i18next";
import MaterialIcon from "../atoms/MaterialIcon";
import solveArenaImg from "../../assets/solve_arena_01.png";

const SOLVE_ARENA_URL = "https://melkoh02.github.io/solve-arena/";
const SOLVE_ARENA_REPO = "https://github.com/Melkoh02/solve-arena";

export default function BentoGrid() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="px-6 lg:px-24 py-24 max-w-7xl mx-auto bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Solve Arena — Featured Card */}
        <a
          href={SOLVE_ARENA_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between min-h-[400px] group">
          <div>
            <span className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant">
              {t("portfolio.featuredLabel")}
            </span>
            <h3 className="text-2xl font-bold mt-4 tracking-tight group-hover:text-primary-fixed transition-colors">
              {t("portfolio.solveArenaTitle")}
            </h3>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-8 bg-surface-container">
            <img
              src={solveArenaImg}
              alt={t("portfolio.solveArenaAlt")}
              className="object-cover w-full h-full opacity-90 mix-blend-multiply"
            />
          </div>
        </a>

        {/* Real-Time Systems Card */}
        <div className="md:col-span-4 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between">
          <MaterialIcon icon="sync" className="text-4xl" />
          <div className="mt-12">
            <h3 className="text-xl font-medium tracking-tight">
              {t("portfolio.realtimeTitle")}
            </h3>
            <p className="mt-2 text-sm text-on-primary-fixed-variant leading-relaxed">
              {t("portfolio.realtimeDescription")}
            </p>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div className="md:col-span-4 bg-surface-container-highest p-8 rounded-xl">
          <h3 className="text-lg font-bold tracking-tight">
            {t("portfolio.comingSoonTitle")}
          </h3>
          <p className="mt-2 text-sm text-on-surface-variant">
            {t("portfolio.comingSoonDescription")}
          </p>
        </div>

        {/* Try Live Card */}
        <a
          href={SOLVE_ARENA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl flex items-center justify-between group">
          <div>
            <h3 className="text-lg font-bold tracking-tight group-hover:text-primary-fixed transition-colors">
              {t("portfolio.viewLiveTitle")}
            </h3>
            <p className="text-sm text-on-surface-variant mt-1">
              {t("portfolio.viewLiveDescription")}
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
