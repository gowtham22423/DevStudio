"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM } from "./FadeUp";
import Icon from "./Icon";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="max-w-3xl">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-ink/12">
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="display text-xl md:text-2xl">{f.q}</span>
                <Icon
                  name="Plus"
                  size={22}
                  className={`text-accent-deep shrink-0 transition-transform duration-300 ease-premium ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                  className="overflow-hidden"
                >
                  <p className="text-ink-500 leading-relaxed pb-6 max-w-2xl">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
