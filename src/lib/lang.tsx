"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dict, type Lang } from "@/lib/i18n";

type LangContextValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  /** النصوص باللغة المختارة. */
  t: (typeof dict)["en"];
  /** اختيار نص عربي لو اللغة عربي، وإلا الإنجليزي. */
  pick: <T>(en: T, ar: T | undefined) => T;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "boos-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  /* استرجاع اللغة المحفوظة بعد التحميل (بدون مشاكل SSR). */
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  /* تحديث لغة واتجاه الصفحة كل ما اللغة تتغير. */
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((current) => (current === "ar" ? "en" : "ar"));
  }, []);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      t: dict[lang],
      pick: (en, ar) => (lang === "ar" && ar ? ar : en),
      toggleLang,
    }),
    [lang, toggleLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used inside LanguageProvider");
  return context;
}
