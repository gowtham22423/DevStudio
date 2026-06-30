import { processPhases } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function ProcessTimeline() {
  return (
    <div className="shell">
      <ol className="relative border-l border-ink/15 ml-2 md:ml-4">
        {processPhases.map((p, i) => (
          <FadeUp
            as="li"
            key={p.num}
            delay={i * 0.04}
            className="relative pl-8 md:pl-14 pb-14 last:pb-0"
          >
            <span className="absolute -left-[8px] top-1.5 w-4 h-4 rounded-full bg-accent ring-4 ring-paper" />
            <span className="font-mono text-sm text-accent-deep">{p.num}</span>
            <h2 className="display text-2xl md:text-4xl mt-1.5">{p.name}</h2>
            <p className="text-xs uppercase tracking-kicker text-ink-500 mt-2">{p.desc}</p>
            <p className="text-ink-500 text-lg leading-relaxed mt-4 max-w-2xl">{p.detail}</p>
          </FadeUp>
        ))}
      </ol>
    </div>
  );
}
