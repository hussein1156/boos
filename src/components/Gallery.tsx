"use client";

import { gallery } from "@/boos";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

/** معرض الصور — كل صورة بحركة دخول متتابعة + زووم مع الهفر. */
export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeader titleKey="gallery" />

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {gallery.map((shot, index) => (
          <Reveal key={shot.id} delay={(index % 3) * 0.08}>
            <PhotoSlot src={shot.src} alt={shot.alt} ratio="aspect-square" zoom />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
