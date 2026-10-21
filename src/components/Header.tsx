"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { site } from "@/boos";
import { useLang } from "@/lib/lang";

/**
 * الهيرو (أول الصفحة):
 * - مفيش اسم "Coach Bossy" ولا مربع صورة.
 * - لو حطيت صورة في site.heroPhoto بتبقى خلفية كاملة للصفحة الأولى.
 */
export function Header() {
  const { t, pick } = useLang();
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  const bg = site.heroPhoto;

  return (
    <header
      id="top"
      className="slant-down sport-stripes relative overflow-hidden bg-plum px-5 pb-32 pt-32 text-paper"
    >
      {/* خلفية الصفحة الأولى: الصورة لو موجودة، وإلا التدرّج الغامق. */}
      {bg ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bg}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ink/85 via-ink/70 to-plum/95" />
        </>
      ) : null}

      <motion.div
        className="absolute end-6 top-24 text-pink/50"
        animate={reduce ? undefined : { y: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Dumbbell className="h-16 w-16" aria-hidden />
      </motion.div>
      <motion.div
        className="absolute start-4 bottom-20 text-sun/40"
        animate={reduce ? undefined : { y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Dumbbell className="h-10 w-10" aria-hidden />
      </motion.div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.p
          className="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-2 text-xs font-semibold uppercase tracking-widest text-plum"
          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.35, ease }}
        >
          {t.hero.badge}
        </motion.p>

        <motion.h1
          className="mt-6 max-w-4xl text-5xl text-white sm:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          {pick(site.tagline, site.taglineAr)}
        </motion.h1>

        <motion.div
          className="mt-6 h-2 w-40 origin-center rounded-full bg-linear-to-r from-pink to-sun"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        />

        <a
          href="#packages"
          className="cta mt-9 inline-grid min-h-12 place-items-center rounded-full bg-pink px-8 text-white"
        >
          {t.hero.cta}
        </a>
      </div>
    </header>
  );
}
