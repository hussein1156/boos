"use client";

import { site } from "@/boos";
import { useLang } from "@/lib/lang";

/** شريط الأخبار المتحرك — بالعربي أو الإنجليزي، والحروف بتكبر مع الهفر. */
export function Ticker() {
  const { lang } = useLang();
  const words = lang === "ar" ? site.marqueeAr : site.marquee;
  const band = [...words, ...words, ...words, ...words];

  return (
    <div className="sport-stripes overflow-hidden bg-pink py-3 text-white">
      <div className="marquee-track font-display text-2xl uppercase [dir=rtl]_&:normal-case">
        {band.map((word, index) => (
          <span key={`${word}-${index}`} className="marquee-word px-4">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
