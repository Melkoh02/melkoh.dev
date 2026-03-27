import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    void i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
        {current.label}
        <span className="material-symbols-outlined text-base">
          {open ? "expand_less" : "expand_more"}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden min-w-[80px] z-50">
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`block w-full text-left px-4 py-2.5 text-xs font-medium uppercase tracking-widest transition-colors ${
                lang.code === current.code
                  ? "text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              }`}>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
