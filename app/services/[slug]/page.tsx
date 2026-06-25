import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ServiceForm from "@/components/ServiceForm";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service — DevStudio" };
  return {
    title: `${service.name} — DevStudio`,
    description: service.short,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-36 pb-24 md:pt-44">
        <div className="shell">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-purple transition-colors mb-8">
            ← Back to Services
          </Link>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-16 items-start">
            <div>
              <FadeUp>
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-purple bg-purple/10 px-3 py-1.5 rounded-full">
                  {service.badge}
                </span>
                <h1 className="display text-4xl md:text-6xl mt-5">{service.name}</h1>
                <p className="text-lg md:text-xl text-muted mt-5 max-w-2xl leading-relaxed">{service.lede}</p>
              </FadeUp>

              <FadeUp delay={0.1} className="mt-12">
                <h2 className="display text-2xl mb-6">What you get with this service</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((f) => (
                    <div key={f.title} className="bg-card rounded-4xl p-6">
                      <h3 className="display text-lg">{f.title}</h3>
                      <p className="text-sm text-muted mt-2">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.15} className="lg:sticky lg:top-28">
              <ServiceForm
                heading={service.formHeading}
                detailsLabel={service.formLabel}
                buttonText={service.formButton}
                serviceName={service.name}
              />
            </FadeUp>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
