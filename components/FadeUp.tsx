"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Premium easing from the Jitter scrape
export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
export const EASE_POP = [0.34, 1.56, 0.64, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
};

export default function FadeUp({ children, className, delay = 0, y = 40, as = "div" }: FadeUpProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: EASE_PREMIUM, delay }}
    >
      {children}
    </MotionTag>
  );
}
