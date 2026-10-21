"use client";

import { useState } from "react";
import { packages, site, socials, whatsappHref } from "@/boos";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { useLang } from "@/lib/lang";

/** بطاقة باقة واحدة مع طرق الدفع. */
function PackageCard({ pack }: { pack: (typeof packages)[number] }) {
  const { t, pick } = useLang();
  const [tab, setTab] = useState<"insta" | "cash">("insta");
  const [copied, setCopied] = useState(false);
  const wa = whatsappHref(socials.whatsapp);
  const features = pick(pack.features, pack.featuresAr);

  async function copyNumber() {
    if (!site.vodafone) return;
    /* رقم فودافون كاش للحافظة بضغطة واحدة، والزر يرجع بعد ثانيتين. */
    await navigator.clipboard.writeText(site.vodafone);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <article className="pkg flex h-full flex-col rounded-frame border-[3px] border-plum bg-white p-5 text-plum">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-3xl">{pick(pack.name, pack.nameAr)}</h3>
        {pack.popular ? (
          <span className="rounded-full bg-pink px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {t.packages.popular}
          </span>
        ) : (
          /* عنصر مخفي بياخد نفس ارتفاع شارة "الأكثر طلبًا" = كل الكروت بنفس الطول. */
          <span className="invisible rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {t.packages.popular}
          </span>
        )}
      </div>

      <p className="mt-3 font-display text-4xl text-pink">{pack.price}</p>
      <p className="text-sm font-medium uppercase tracking-widest text-plum/60">
        {pick(pack.duration, pack.durationAr)}
      </p>

      {/* نفس المساحة لكل قايمة المميزات (أطول باقة عندها 5) = أحجام متساوية. */}
      <ul className="mt-4 flex-1 space-y-2 text-sm">
        {features.map((feature) => (
          <li key={feature} className="border-s-4 border-sun ps-3">
            {feature}
          </li>
        ))}
        {Array.from({ length: Math.max(0, 5 - features.length) }).map((_, index) => (
          <li key={`spacer-${index}`} className="invisible border-s-4 border-transparent ps-3">
            &nbsp;
          </li>
        ))}
      </ul>

      <div className="mt-5 grid grid-cols-2 gap-2" role="tablist" aria-label="Payment method">
        {(["insta", "cash"] as const).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`min-h-11 rounded-full px-3 text-sm font-semibold transition ${
              tab === key ? "bg-plum text-paper" : "bg-paper text-plum hover:bg-sun/25"
            }`}
          >
            {key === "insta" ? t.packages.instapay : t.packages.vodafone}
          </button>
        ))}
      </div>

      {tab === "insta" ? (
        <div className="mt-4 space-y-3 text-sm">
          {site.instapayQr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={site.instapayQr}
              alt="InstaPay QR"
              className="zoom-frame mx-auto h-40 w-40 rounded-2xl object-contain"
            />
          ) : (
            <div className="grid h-40 place-items-center rounded-2xl border-2 border-dashed border-plum/40">
              {t.packages.qrPlaceholder}
            </div>
          )}
          <p>{t.packages.qrHint}</p>
        </div>
      ) : (
        <div className="mt-4 space-y-3 text-sm">
          <p className="font-display text-3xl">{site.vodafone || t.packages.numberPlaceholder}</p>
          <button
            type="button"
            onClick={copyNumber}
            disabled={!site.vodafone}
            className="hover-lift min-h-11 w-full rounded-full bg-sun font-semibold text-plum disabled:opacity-50"
          >
            {copied ? t.packages.copied : t.packages.copy}
          </button>
          <p>{t.packages.cashHint}</p>
        </div>
      )}

      {wa ? (
        <a
          href={wa}
          target="_blank"
          rel="noopener"
          className="cta mt-4 grid min-h-11 place-items-center rounded-full bg-pink text-white"
        >
          {t.packages.sendProof}
        </a>
      ) : null}
    </article>
  );
}

/** قسم الباقات. */
export function Packages() {
  const { t } = useLang();

  return (
    <section id="packages" className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeader titleKey="packages" />
      <p className="mt-3 max-w-xl">{t.packages.subtitle}</p>

      {/* items-stretch + h-full = كل البطاقات بنفس الطول. */}
      <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
        {packages.map((pack, index) => (
          <Reveal key={pack.id} className="h-full" delay={index * 0.08}>
            <PackageCard pack={pack} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
