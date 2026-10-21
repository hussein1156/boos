"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { videos, type VideoItem } from "@/boos";
import { youtubeId } from "@/lib/video";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { useLang } from "@/lib/lang";

/** قسم الفيديوهات — كروت بنفس المقاس + نافذة تشغيل. */
export function Videos() {
  const { t, pick } = useLang();
  const [open, setOpen] = useState<VideoItem | null>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const yt = open ? youtubeId(open.url) : "";

  return (
    <>
      <section id="tips" className="slant-up bg-plum px-5 py-20 text-paper">
        <div className="mx-auto max-w-6xl">
          <SectionHeader titleKey="videos" />
          <p className="mt-3 max-w-xl text-paper/80">{t.videos.subtitle}</p>

          {/* items-stretch + h-full = كل المربعات بنفس المقاس. */}
          <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <Reveal key={video.id} className="h-full" delay={index * 0.08}>
                <button
                  type="button"
                  className="hover-lift flex h-full w-full flex-col overflow-hidden rounded-frame border-[3px] border-plum bg-white text-start text-plum"
                  onClick={() => video.url && setOpen(video)}
                >
                  <div className="aspect-video shrink-0 bg-paper">
                    {video.thumb ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={video.thumb} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <div className="grid h-full place-items-center font-display text-xl text-pink uppercase">
                        {pick(video.category, video.categoryAr) || t.videos.empty}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-1 p-4">
                    {video.category ? (
                      <span className="text-xs font-semibold uppercase tracking-widest text-pink">
                        {pick(video.category, video.categoryAr)}
                      </span>
                    ) : null}
                    <h3 className="text-2xl">{pick(video.title, video.titleAr)}</h3>
                    <p className="min-h-[2.9rem] line-clamp-2 text-sm text-plum/70">
                      {pick(video.description, video.descriptionAr)}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-ink/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={pick(open.title, open.titleAr)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              className="absolute end-4 top-4 min-h-11 rounded-full bg-sun px-4 font-semibold text-plum"
              onClick={() => setOpen(null)}
            >
              ✕
            </button>

            <div className="w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
              {yt ? (
                <iframe
                  className="aspect-video w-full rounded-frame"
                  src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1`}
                  title={pick(open.title, open.titleAr)}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : open.url.includes("instagram.com") ? (
                <a
                  href={open.url}
                  target="_blank"
                  rel="noopener"
                  className="grid min-h-40 place-items-center rounded-frame bg-white font-semibold text-plum"
                >
                  {pick("Open this Instagram video", "افتح الفيديو ده على إنستجرام")}
                </a>
              ) : (
                <video
                  className="aspect-video w-full rounded-frame bg-black"
                  src={open.url}
                  controls
                  autoPlay
                />
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
