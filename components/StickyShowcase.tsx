"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { projects } from "@/lib/content";
import ProjectVisual from "./ProjectVisual";
import FadeUp from "./FadeUp";

function StickyMedia({ index, total, scrollYProgress }: { index: number; total: number; scrollYProgress: MotionValue<number> }) {
  const p = projects[index];
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start - 0.08, start, end - 0.05, end], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 1.04]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 rounded-4xl overflow-hidden">
      <ProjectVisual project={p} big />
    </motion.div>
  );
}

export default function StickyShowcase({ showHeading = true }: { showHeading?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="work" className="py-24 md:py-32 scroll-mt-24">
      {showHeading && (
        <div className="shell">
          <FadeUp className="max-w-2xl mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-purple">Selected work</span>
            <h2 className="display text-4xl md:text-6xl mt-3">Recent projects built to perform.</h2>
            <p className="text-muted text-lg mt-4">
              Take a look at some of my recent work built to optimize lead generation, increase performance, and elevate digital presence.
            </p>
          </FadeUp>
        </div>
      )}

      {/* Desktop: sticky media + scrolling copy */}
      <div ref={ref} className="hidden md:block shell relative">
        <div className="grid grid-cols-2 gap-12">
          <div className="relative">
            <div className="sticky top-24 h-[70vh] rounded-4xl bg-card overflow-hidden">
              {projects.map((_, i) => (
                <StickyMedia key={i} index={i} total={projects.length} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>
          <div>
            {projects.map((p) => (
              <div key={p.title} className="min-h-[70vh] flex flex-col justify-center">
                <span className="text-sm font-semibold uppercase tracking-wider text-purple">{p.category} · {p.year}</span>
                <h3 className="display text-4xl mt-3">{p.title}</h3>
                <p className="text-muted text-lg mt-4 max-w-md">{p.summary}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-ink"><span className="text-purple">✓</span>{h}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-medium bg-card rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
                <Link href={p.href} className="inline-flex items-center gap-1.5 mt-7 font-semibold hover:text-purple transition-colors w-fit">
                  View project <span>↗</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden shell grid gap-6">
        {projects.map((p) => (
          <Link key={p.title} href={p.href} className="block rounded-4xl border border-black/5 overflow-hidden bg-paper">
            <div className="relative aspect-[16/11]">
              <ProjectVisual project={p} />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple">{p.category} · {p.year}</span>
              <h3 className="display text-2xl mt-2">{p.title}</h3>
              <p className="text-muted mt-2">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-medium bg-card rounded-full px-3 py-1">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
