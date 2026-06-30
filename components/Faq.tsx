import { faqs } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Accordion from "./Accordion";

export default function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-sand/60 scroll-mt-24">
      <div className="shell">
        <SectionHeading title="Questions, answered." className="mb-12" />
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
