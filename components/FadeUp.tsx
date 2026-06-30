"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
export const EASE_POP = [0.34, 1.56, 0.64, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span" | "p";
};

export default function FadeUp({ children, className, delay = 0, y = 28, as = "div" }: FadeUpProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: EASE_PREMIUM, delay }}
    >
      {children}
    </MotionTag>
  );
}
