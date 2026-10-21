"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import type { dict } from "@/lib/i18n";

type SectionKey = keyof (typeof dict)["en"];

/**
 * هيدر كل قسم: العنوان بس.
 * الموضوع بيدخل من الشمال بحركة كل مرة القسم يظهر.
 */
export function SectionHeader({ titleKey }: { titleKey: SectionKey; subtitle?: string }) {
  const { t } = useLang();
  const title = (t[titleKey] as { title?: string })?.title ?? String(titleKey);

  return (
    <motion.h2
      className="section-title text-5xl"
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {title}
    </motion.h2>
  );
}
