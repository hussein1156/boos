"use client";

import { useLang } from "@/lib/lang";

/**
 * إطار الصورة:
 * - لو مفيش صورة بتظهر شارة برتقالية مكانها.
 * - مع الهفر (الموس يلمسها) الصورة بتعمل زووم ناعم وإطار برتقالي.
 */
export function PhotoSlot({
  src,
  alt,
  ratio,
  zoom = false,
}: {
  src: string;
  alt: string;
  ratio: string;
  zoom?: boolean;
}) {
  const { t } = useLang();

  return (
    <div className={`frame relative overflow-hidden ${ratio} ${zoom ? "zoom-frame" : ""}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div className="grid h-full place-items-center px-4 text-center">
          <span className="rounded-full bg-sun px-4 py-2 font-display text-xl text-plum">
            {t.gallery.title}
          </span>
        </div>
      )}
    </div>
  );
}
