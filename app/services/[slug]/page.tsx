import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ServiceForm from "@/components/ServiceForm";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service — DevStudio" };
  return { title: `${service.name} — DevStudio`, description: service.short };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-32">
        {/* Hero — themed per service */}
        <section className="shell">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink transition-colors mb-8">
            ← All services
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <span
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                style={{ color: service.accent, backgroundColor: `${service.accent}1A` }}
              >
                {service.badge}
              </span>
              <h1 className="display text-4xl md:text-6xl mt-5">{service.name}</h1>
              <p className="text-lg md:text-xl text-muted mt-5 max-w-xl leading-relaxed">{service.lede}</p>
              <a href="#inquire" className="inline-block mt-8 text-white px-7 py-3.5 rounded-full font-semibold transition-transform duration-300 ease-premium hover:-translate-y-0.5" style={{ background: service.accent }}>
                Request {service.name}
              </a>
            </FadeUp>
            <FadeUp delay={0.1}>
              <ServiceHeroVisual num={service.num} name={service.name} gradient={service.gradient} />
            </FadeUp>
          </div>
        </section>

        {/* Features */}
        <section className="shell py-20 md:py-28">
          <FadeUp className="mb-10">
            <h2 className="display text-3xl md:text-5xl">What you get with this service</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.06}>
                <div className="bg-card rounded-4xl p-7 h-full" style={{ borderLeft: `4px solid ${service.accent}` }}>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: service.accent }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display text-xl">{f.title}</h3>
                  </div>
                  <p className="text-muted mt-3">{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Inquiry form */}
        <section id="inquire" className="shell pb-20 md:pb-28 grid lg:grid-cols-[1fr_1fr] gap-10 items-start scroll-mt-28">
          <FadeUp>
            <h2 className="display text-3xl md:text-5xl">Let&apos;s get started.</h2>
            <p className="text-muted text-lg mt-4 max-w-md">Send over your project details and I&apos;ll get back to you with a tailored quote and a clear plan for your {service.name.toLowerCase()}.</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ServiceForm heading={service.formHeading} detailsLabel={service.formLabel} buttonText={service.formButton} serviceName={service.name} accent={service.accent} />
          </FadeUp>
        </section>

        {/* Explore other services */}
        <section className="shell pb-24 md:pb-32">
          <FadeUp className="mb-8"><h2 className="display text-2xl md:text-3xl">Explore other services</h2></FadeUp>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherServices.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group rounded-4xl p-6 text-white overflow-hidden relative min-h-[140px] flex flex-col justify-end transition-transform duration-400 ease-premium hover:-translate-y-1" style={{ background: o.gradient }}>
                <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{o.num}</span>
                <span className="display text-xl mt-1">{o.name}</span>
                <span className="absolute top-5 right-5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
