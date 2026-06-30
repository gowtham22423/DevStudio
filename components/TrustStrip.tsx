import { clients } from "@/lib/content";
import Marquee from "./Marquee";
import Monogram from "./Monogram";

export default function TrustStrip() {
  return (
    <section className="py-12 md:py-16 border-y border-ink/8 bg-sand/60" aria-label="Clients">
      <p className="shell text-center text-sm text-ink-500 mb-9">
        Trusted by teams across retail, real estate, SaaS, and hospitality.
      </p>
      <Marquee>
        {clients.map((c) => (
          <div key={c.name} className="px-7 md:px-10">
            <Monogram monogram={c.monogram} name={c.name} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
