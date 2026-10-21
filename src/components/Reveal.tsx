"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * ظهور ناعم للعناصر مرة واحدة بس أول ما تظهر على الشاشة.
 * مش بتشتغل تاني لما تطلع وتنزل تاني.
 *
 * @param direction اتجاه الدخول: "up" (الافتراضي) أو "down".
 * @param distance  مقدار المسافة بالبكسل.
 * @param delay     تأخير بسيط لعمل تتابع (stagger).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down";
  distance?: number;
}) {
  const reduce = useReducedMotion();
  const offset = direction === "up" ? distance : -distance;

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
