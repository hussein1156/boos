"use client";

import { SocialButtons } from "@/components/SocialButtons";
import { useLang } from "@/lib/lang";

/** الفوتر: ايقونات السوشيال ميديا (جاهزة للروابط) + حقوق النشر. */
export function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="bg-ink px-5 py-12 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <SocialButtons variant="dark" />
        <p className="text-sm text-paper/70">
          © {new Date().getFullYear()} {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
