import { useTranslation } from "react-i18next";
import MaterialIcon from "../atoms/MaterialIcon";

const ONYX_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDk_Zp-ZYkpQD0MH3SU1kpagrGwHiblBpjc_LYWIoanBmKGTU-ABD_FFfyZQTWZiDxnbbeGCR64lplvP_F95bPEbtdFKyrQuFQA8hSf95oiM0BGkhKmdjUzSwnoLHdjedkHORQli-pfKHU0qj2YEYyRM-cDFOmjyOhsePM9th2tu0PZxAA5d9NC7X6GytTsB0CtI8-wSQ1GkqaEtMC-RFVyjxV7RS63JPwRrLpVrENQb4ftoTyVsDJBglrnL1uKiUaKGfu_JCaWwXtS";

export default function BentoGrid() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="px-6 lg:px-24 py-24 max-w-7xl mx-auto bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Feature Card */}
        <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant">
              {t("portfolio.selectedWork01")}
            </span>
            <h3 className="text-2xl font-bold mt-4 tracking-tight">
              {t("portfolio.onyxTitle")}
            </h3>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-8 bg-surface-container">
            <img
              src={ONYX_IMAGE_URL}
              alt={t("portfolio.onyxAlt")}
              className="object-cover w-full h-full opacity-90 mix-blend-multiply"
            />
          </div>
        </div>

        {/* Systems Design Card */}
        <div className="md:col-span-4 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between">
          <MaterialIcon icon="architecture" className="text-4xl" />
          <div className="mt-12">
            <h3 className="text-xl font-medium tracking-tight">
              {t("portfolio.systemsDesignTitle")}
            </h3>
            <p className="mt-2 text-sm text-on-primary-fixed-variant leading-relaxed">
              {t("portfolio.systemsDesignDescription")}
            </p>
          </div>
        </div>

        {/* Chronos Card */}
        <div className="md:col-span-4 bg-surface-container-highest p-8 rounded-xl">
          <h3 className="text-lg font-bold tracking-tight">
            {t("portfolio.chronosTitle")}
          </h3>
          <p className="mt-2 text-sm text-on-surface-variant">
            {t("portfolio.chronosDescription")}
          </p>
        </div>

        {/* Minimalist Interface Card */}
        <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold tracking-tight">
              {t("portfolio.minimalistTitle")}
            </h3>
            <p className="text-sm text-on-surface-variant mt-1">
              {t("portfolio.minimalistDescription")}
            </p>
          </div>
          <MaterialIcon icon="arrow_forward" className="text-3xl" />
        </div>
      </div>
    </section>
  );
}
