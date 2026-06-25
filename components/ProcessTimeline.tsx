"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { processDetail } from "@/lib/content";
import { EASE_PREMIUM } from "./FadeUp";

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.55", "end 0.7"],
  });

  const n = processDetail.length;
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.max(0, Math.min(n - 1, Math.floor(v * n)));
    setActive(idx);
  });

  // moving arrow position + filled spine height
  const arrowTop = useTransform(scrollYProgress, [0, 1], ["1%", "99%"]);
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative shell">
      {/* base spine */}
      <div className="absolute left-[22px] md:left-9 top-0 bottom-0 w-[2px] bg-black/10" />
      {/* filled spine (snake trail) */}
      <motion.div
        style={{ scaleY: fillScale }}
        className="absolute left-[22px] md:left-9 top-0 bottom-0 w-[2px] bg-purple origin-top"
      />
      {/* moving arrow head */}
      <motion.div
        style={{ top: arrowTop }}
        className="absolute left-[22px] md:left-9 z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-9 h-9 rounded-full bg-purple text-white flex items-center justify-center shadow-lg shadow-purple/40 ring-4 ring-purple/15">
          <span className="text-lg leading-none">↓</span>
        </div>
      </motion.div>

      <div className="flex flex-col">
        {processDetail.map((step, i) => {
          const reached = i <= active;
          const current = i === active;
          return (
            <div key={step.num} className="relative pl-14 md:pl-24 py-8 md:py-12">
              {/* node dot */}
              <div
                className={`absolute left-[22px] md:left-9 -translate-x-1/2 top-11 md:top-14 w-4 h-4 rounded-full border-2 transition-all duration-500 ease-premium ${
                  reached ? "bg-purple border-purple scale-110" : "bg-paper border-black/20"
                }`}
              />
              <motion.div
                animate={{ opacity: current ? 1 : reached ? 0.85 : 0.5, x: current ? 4 : 0 }}
                transition={{ duration: 0.5, ease: EASE_PREMIUM }}
              >
                <span className={`display text-4xl md:text-6xl transition-colors duration-500 ${reached ? "text-purple" : "text-black/15"}`}>
                  {step.num}
                </span>
                <h2 className="display text-2xl md:text-3xl mt-2">{step.title}</h2>
                <p className="text-xs md:text-sm uppercase tracking-wider text-muted-soft mt-1">{step.desc}</p>

                {/* expanded info — emphasized while the arrow is on this step */}
                <motion.div
                  animate={{
                    opacity: current ? 1 : 0.55,
                    height: "auto",
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-muted text-base md:text-lg mt-3 max-w-2xl leading-relaxed">{step.detail}</p>
                  <motion.div
                    animate={{ width: current ? "3.5rem" : "0rem" }}
                    transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                    className="h-[3px] bg-purple rounded-full mt-4"
                  />
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
