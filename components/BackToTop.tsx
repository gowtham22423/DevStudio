"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { EASE_PREMIUM } from "./FadeUp";
import Icon from "./Icon";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 700));

  const toTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (v: number) => void } }).lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={{ duration: 0.3, ease: EASE_PREMIUM }}
          className="fixed bottom-6 right-6 z-40 grid place-items-center w-12 h-12 rounded-full bg-ink text-paper shadow-lift hover:bg-accent transition-colors duration-300"
        >
          <Icon name="ArrowUp" size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
