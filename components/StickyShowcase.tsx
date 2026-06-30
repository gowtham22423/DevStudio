"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { projects as allProjects } from "@/lib/content";
import ProjectVisual from "./ProjectVisual";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

function StickyMedia({
  index,
  total,
  scrollYProgress,
}: {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const p = allProjects[index];
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.08, start, end - 0.05, end],
    [0, 1, 1, 0]
  );
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 rounded-panel overflow-hidden border border-ink/10">
      <ProjectVisual project={p} big priority={index === 0} />
    </motion.div>
  );
}

function CaseMeta({ p }: { p: (typeof allProjects)[number] }) {
  return (
    <>
      <div className="flex items-baseline gap-3 text-sm text-ink-500">
        <span>{p.industry}</span>
        <span className="w-1 h-1 rounded-full bg-ink/25" />
        <span>{p.year}</span>
      </div>
      <h3 className="display text-3xl md:text-4xl mt-3">{p.title}</h3>
      <p className="text-ink-500 text-lg leading-relaxed mt-4 max-w-md">{p.result}</p>
      <div className="flex items-baseline gap-3 mt-7">
        <span className="display text-5xl text-accent-deep">{p.metric}</span>
        <span className="text-sm text-ink-500 max-w-[10rem] leading-snug">{p.metricLabel}</span>
      </div>
      <div className="flex flex-wrap gap-2 mt-7">
        {p.tech.map((t) => (
          <span key={t} className="text-xs font-medium text-ink-600 border border-ink/12 rounded-sm px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>
      <Link
        href={p.href}
        className="group inline-flex items-center gap-1.5 mt-8 font-medium text-ink hover:text-accent-deep transition-colors w-fit"
      >
        View project
        <Icon name="ArrowUpRight" size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </>
  );
}

export default function StickyShowcase({
  showHeading = true,
  limit,
}: {
  showHeading?: boolean;
  limit?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const projects = typeof limit === "number" ? allProjects.slice(0, limit) : allProjects;
  const total = projects.length;

  return (
    <section id="work" className="py-24 md:py-32 scroll-mt-24">
      {showHeading && (
        <div className="shell">
          <SectionHeading
            title="Selected work, measured by outcomes."
            intro="A few recent builds and what they moved. Every project is designed around a number that matters to the business."
            className="mb-14"
          />
        </div>
      )}

      {/* Desktop: sticky media + scrolling case detail */}
      <div ref={ref} className="hidden lg:block shell relative">
        <div className="grid grid-cols-2 gap-14">
          <div className="relative">
            <div className="sticky top-24 h-[72vh] rounded-panel bg-sand overflow-hidden">
              {projects.map((_, i) => (
                <StickyMedia key={i} index={i} total={total} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>
          <div>
            {projects.map((p) => (
              <div key={p.slug} className="min-h-[72vh] flex flex-col justify-center">
                <CaseMeta p={p} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile + tablet: stacked cards */}
      <div className="lg:hidden shell grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article key={p.slug} className="rounded-panel border border-ink/10 overflow-hidden bg-paper flex flex-col">
            <div className="relative aspect-[16/11]">
              <ProjectVisual project={p} priority={i === 0} />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-baseline gap-2.5 text-xs text-ink-500">
                <span>{p.industry}</span>
                <span className="w-1 h-1 rounded-full bg-ink/25" />
                <span>{p.year}</span>
              </div>
              <h3 className="display text-2xl mt-2">{p.title}</h3>
              <p className="text-ink-500 mt-2 leading-relaxed flex-1">{p.result}</p>
              <div className="flex items-baseline gap-2.5 mt-5">
                <span className="display text-3xl text-accent-deep">{p.metric}</span>
                <span className="text-sm text-ink-500">{p.metricLabel}</span>
              </div>
              <Link
                href={p.href}
                className="inline-flex items-center gap-1.5 mt-6 font-medium text-ink hover:text-accent-deep transition-colors w-fit"
              >
                View project <Icon name="ArrowUpRight" size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
