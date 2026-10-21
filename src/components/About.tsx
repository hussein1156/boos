"use client";

import { site } from "@/boos";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { useLang } from "@/lib/lang";

/** قسم التعريف بالكوتش. */
export function About() {
  const { pick } = useLang();

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeader titleKey="about" />

      <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
        <Reveal direction="down">
          <PhotoSlot src={site.aboutPhoto} alt="" ratio="aspect-[5/4]" zoom />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="whitespace-pre-line text-base">{pick(site.about, site.aboutAr)}</p>
        </Reveal>
      </div>
    </section>
  );
}
