import { methodology, processPhases } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import FadeUp from "./FadeUp";
import Button from "./Button";

export default function Blueprint() {
  return (
    <section className="py-24 md:py-32 scroll-mt-24">
      <div className="shell">
        <SectionHeading
          eyebrow={methodology.tagline}
          title={
            <>
              A method we trust, called{" "}
              <span className="text-accent-deep">{methodology.name}</span>.
            </>
          }
          intro={methodology.intro}
          className="mb-16"
        />

        {/* Desktop: stepped horizontal timeline */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
          {processPhases.map((p, i) => (
            <FadeUp key={p.num} delay={i * 0.05}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-accent-deep">{p.num}</span>
                <span className="flex-1 h-px bg-ink/15" />
              </div>
              <h3 className="display text-lg mt-4">{p.name}</h3>
              <p className="text-sm text-ink-500 leading-relaxed mt-1.5">{p.desc}</p>
            </FadeUp>
          ))}
        </div>

        {/* Mobile: vertical numbered list */}
        <ol className="md:hidden flex flex-col">
          {processPhases.map((p) => (
            <li key={p.num} className="flex gap-4 py-5 border-t border-ink/12 first:border-t-0">
              <span className="font-mono text-sm text-accent-deep pt-1">{p.num}</span>
              <div>
                <h3 className="display text-xl">{p.name}</h3>
                <p className="text-ink-500 mt-1">{p.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <FadeUp className="mt-14">
          <Button href="/process" variant="secondary" icon iconName="ArrowRight">
            See how The Blueprint works
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
