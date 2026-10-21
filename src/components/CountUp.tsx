"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** عداد أرقام بيتحرك أول مرة يظهر على الشاشة. */
export function CountUp({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || value <= 0) {
      setShown(value);
      return;
    }

    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      setShown(Math.round(value * (1 - (1 - t) ** 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl text-sun">{shown}</div>
      <div className="mt-1 text-sm font-medium uppercase tracking-widest text-paper/80">{label}</div>
    </div>
  );
}
