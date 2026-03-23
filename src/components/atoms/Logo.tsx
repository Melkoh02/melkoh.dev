import { useTranslation } from "react-i18next";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 ${className}`}>
      {t("brand.name")}
    </div>
  );
}
