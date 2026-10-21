"use client";

import { Facebook, Instagram, Linkedin, MessageCircle, Music2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { socials, whatsappHref, type SocialKey } from "@/boos";
import { useLang } from "@/lib/lang";

/**
 * ايقونات السوشيال ميديا: إنستجرام، تيك توك، واتساب، فيسبوك، لينكدإن.
 *
 * - الروابط كلها جاهزة في ملف src/boos.ts — سيب الرابط فاضي = الأيقونة تظهر مطفية.
 * - الأيقونة بترتفع مع هفر أزرق أول ما الموس يلمسها.
 */
const items: { key: SocialKey; label: string; href: string }[] = [
  { key: "instagram", label: "Instagram", href: socials.instagram },
  { key: "tiktok", label: "TikTok", href: socials.tiktok },
  { key: "whatsapp", label: "WhatsApp", href: whatsappHref(socials.whatsapp) },
  { key: "facebook", label: "Facebook", href: socials.facebook },
  { key: "linkedin", label: "LinkedIn", href: socials.linkedin },
];

const icons: Record<SocialKey, typeof Instagram> = {
  instagram: Instagram,
  tiktok: Music2,
  whatsapp: MessageCircle,
  facebook: Facebook,
  linkedin: Linkedin,
};

export function SocialButtons({ variant }: { variant: "light" | "dark" }) {
  const { t } = useLang();

  return (
    <div className="flex flex-col items-center gap-3">
      <p
        className={`text-xs font-semibold uppercase tracking-widest ${
          variant === "light" ? "text-plum/60" : "text-paper/60"
        }`}
      >
        {t.social.title}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, index) => {
          const Icon = icons[item.key];
          const enabled = Boolean(item.href);
          const skin =
            variant === "light"
              ? "border-plum bg-white text-plum"
              : "border-paper/40 bg-white/10 text-paper";

          return (
            <Reveal key={item.key} delay={index * 0.07}>
              {enabled ? (
                /* لينك خارجي: تاب جديدة + noopener. */
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={item.label}
                  className={`social-link grid h-14 w-14 place-items-center rounded-full border-2 ${skin}`}
                >
                  <Icon aria-hidden />
                </a>
              ) : (
                <span
                  aria-hidden
                  title={`${item.label} — ${t.social.hint}`}
                  className={`grid h-14 w-14 place-items-center rounded-full border-2 opacity-35 ${skin}`}
                >
                  <Icon aria-hidden />
                </span>
              )}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
