"use client";

import Link from "next/link";
import { nav, contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="shell">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-14 border-b border-white/10">
          <h2 className="display text-4xl md:text-5xl max-w-xl">Have a project in mind?</h2>
          <Link
            href="/#contact"
            className="bg-purple text-white px-6 py-3.5 rounded-full font-semibold hover:bg-purple-dark hover:-translate-y-0.5 transition-all duration-300 ease-premium"
          >
            Get Free Consultation
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-semibold tracking-tightest flex items-center gap-1">
              DevStudio<span className="w-2 h-2 rounded-full bg-purple inline-block mt-2" />
            </Link>
            <p className="text-white/50 text-sm mt-4 max-w-xs">
              Designing and developing premium custom websites that convert clicks into permanent clients for your brand.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider text-white/40 mb-1">Menu</span>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-purple transition-colors w-fit">
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" className="text-sm text-white/75 hover:text-purple transition-colors w-fit">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider text-white/40 mb-1">Social</span>
            {["LinkedIn", "Twitter / X", "GitHub", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-sm text-white/75 hover:text-purple transition-colors w-fit">{s}</a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider text-white/40 mb-1">Contact</span>
            <a href={`mailto:${contact.email}`} className="text-sm text-white/75 hover:text-purple transition-colors w-fit">{contact.email}</a>
            <span className="text-sm text-white/75">{contact.phone}</span>
            <span className="text-sm text-white/75">{contact.location}</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-8 text-sm text-white/50">
          <span>© 2026 DevStudio. All Rights Reserved.</span>
          <span>Designed for high conversion &amp; performance.</span>
        </div>
      </div>
    </footer>
  );
}
