"use client";

import { motion } from "framer-motion";
import { Languages, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { socials, whatsappHref } from "@/boos";
import { useLang } from "@/lib/lang";

/**
 * الهيدر الأساسي (الشريط الثابت فوق):
 * - لينكات الأقسام: كل لينك بينزل للقسم بتاعه بسلاسة.
 * - تغيير اللغة: عربي ↔ إنجليزي (الصفحة تتعكس وتترجم بالكامل).
 * - أيقونة واتساب جاهزة للرابط من ملف boos.ts.
 */
export function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const wa = whatsappHref(socials.whatsapp);

  const links = [
    { href: "#top", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#tips", label: t.nav.tips },
    { href: "#packages", label: t.nav.packages },
  ];

  /* الشريط بيتغير شكله لما تنزل (زجاجي غامق). */
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-top"}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 text-paper">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link text-sm font-semibold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="nav-pill flex items-center gap-2 rounded-full border-2 border-paper/35 px-3 py-1.5 text-xs font-semibold"
            aria-label="Change language"
          >
            <Languages className="h-4 w-4" aria-hidden />
            {t.langLabel}
          </button>

          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              className="nav-pill grid h-9 w-9 place-items-center rounded-full border-2 border-paper/35"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
            </a>
          ) : (
            <span
              aria-hidden
              title={`WhatsApp — ${t.social.hint}`}
              className="grid h-9 w-9 place-items-center rounded-full border-2 border-paper/35 opacity-40"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
            </span>
          )}

          {lang === "ar" ? <span className="sr-only">اللغة: عربي</span> : null}
        </div>
      </nav>
    </motion.header>
  );
}
