import { CTA_LABEL } from "@/lib/content";
import Button from "./Button";
import FadeUp from "./FadeUp";

export default function CtaBand({
  title,
  body,
}: {
  title: string;
  body?: string;
}) {
  return (
    <section className="pb-24 md:pb-32">
      <FadeUp className="shell">
        <div className="rounded-panel border border-ink/10 bg-sand p-10 md:p-16 text-center">
          <h2 className="display text-display-sm md:text-display max-w-2xl mx-auto text-balance">
            {title}
          </h2>
          {body && (
            <p className="text-ink-500 text-lg leading-relaxed mt-5 max-w-xl mx-auto">{body}</p>
          )}
          <div className="mt-9 flex justify-center">
            <Button href="/contact" size="lg" icon>
              {CTA_LABEL}
            </Button>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
