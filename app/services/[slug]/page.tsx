import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import ServiceForm from "@/components/ServiceForm";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service" };
  return { title: service.name, description: service.short };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 md:pt-32">
        {/* Hero */}
        <section className="shell">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-ink transition-colors mb-8"
          >
            <Icon name="ArrowLeft" size={16} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            All services
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <span className="inline-flex items-center text-xs font-medium tracking-wide text-ink-600 bg-sand border border-ink/10 px-3 py-1.5 rounded-sm">
                {service.badge}
              </span>
              <h1 className="display display-tight text-display md:text-display-lg mt-5 text-balance">
                {service.name}
              </h1>
              <p className="text-lg md:text-xl text-ink-500 leading-relaxed mt-5 max-w-xl">{service.lede}</p>
              <p className="text-accent-deep font-medium mt-5">{service.outcome}</p>
              <Button href="#inquire" size="lg" icon iconName="ArrowRight" className="mt-8">
                Request a quote
              </Button>
            </FadeUp>
            <FadeUp delay={0.1}>
              <ServiceHeroVisual num={service.num} name={service.name} icon={service.icon} />
            </FadeUp>
          </div>
        </section>

        {/* Features */}
        <section className="shell py-20 md:py-28">
          <FadeUp className="mb-10">
            <h2 className="display text-display-sm md:text-display">What this includes.</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
            {service.features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.05} className="border-l-2 border-accent/40 pl-5">
                <h3 className="display text-xl">{f.title}</h3>
                <p className="text-ink-500 leading-relaxed mt-2">{f.desc}</p>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Inquiry */}
        <section id="inquire" className="shell pb-20 md:pb-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start scroll-mt-28">
          <FadeUp>
            <h2 className="display text-display-sm md:text-display text-balance">Let&apos;s get started.</h2>
            <p className="text-ink-500 text-lg leading-relaxed mt-4 max-w-md">
              Send a few details and we will reply with a tailored quote and a
              clear plan for your {service.name.toLowerCase()}.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ServiceForm
              heading={service.formHeading}
              detailsLabel={service.formLabel}
              buttonText={service.formButton}
              serviceName={service.name}
            />
          </FadeUp>
        </section>

        {/* Other services */}
        <section className="shell pb-24 md:pb-32">
          <FadeUp className="mb-8">
            <h2 className="display text-2xl md:text-3xl">More from the studio.</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-px bg-ink/10 rounded-card overflow-hidden border border-ink/10">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group bg-paper p-6 flex flex-col gap-4 hover:bg-sand transition-colors duration-300 min-h-[150px]"
              >
                <span className="grid place-items-center w-10 h-10 rounded-md bg-ink/[0.05] text-ink group-hover:bg-accent group-hover:text-paper transition-colors">
                  <Icon name={o.icon} size={20} />
                </span>
                <span className="display text-xl mt-auto">{o.name}</span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:text-accent-deep transition-colors">
                  Explore <Icon name="ArrowUpRight" size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
