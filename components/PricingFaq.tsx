import { pricingFaqs } from "@/lib/content";
import FadeUp from "./FadeUp";
import Accordion from "./Accordion";

export default function PricingFaq() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="shell">
        <FadeUp className="mb-10">
          <h2 className="display text-display-sm md:text-display">Pricing questions.</h2>
        </FadeUp>
        <Accordion items={pricingFaqs} />
      </div>
    </section>
  );
}
