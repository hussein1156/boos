"use client";

import { site } from "@/boos";
import { CountUp } from "@/components/CountUp";
import { useLang } from "@/lib/lang";

/** أرقام الإنجازات. */
export function Stats() {
  const { t } = useLang();
  const { clients, years, programs } = site.stats;
  if (clients + years + programs <= 0) return null;

  return (
    <section className="bg-plum px-5 py-12 text-paper">
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4">
        <CountUp value={clients} label={t.stats.clients} />
        <CountUp value={years} label={t.stats.years} />
        <CountUp value={programs} label={t.stats.programs} />
      </div>
    </section>
  );
}
