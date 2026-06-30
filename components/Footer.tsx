import Link from "next/link";
import { nav, contact, CTA_LABEL } from "@/lib/content";
import Button from "./Button";
import Icon from "./Icon";

const socialIcon: Record<string, string> = {
  GitHub: "GithubLogo",
  LinkedIn: "LinkedinLogo",
  X: "XLogo",
  Instagram: "InstagramLogo",
};

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell pt-20 md:pt-28 pb-10">
        {/* Final CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-14 border-b border-paper/12">
          <div>
            <span className="eyebrow text-accent-soft">Let&apos;s build</span>
            <h2 className="display text-display-sm md:text-display mt-4 max-w-xl text-balance">
              Have something worth building?
            </h2>
          </div>
          <Button href="/contact" variant="accent" size="lg" icon>
            {CTA_LABEL}
          </Button>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-14">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label="DevStudio home">
              <span className="w-2.5 h-2.5 rounded-[3px] bg-accent" />
              <span className="text-xl font-semibold tracking-tight2">DevStudio</span>
            </Link>
            <p className="text-paper/55 mt-5 max-w-xs leading-relaxed">
              A web design and engineering studio building fast, considered websites that convert.
            </p>
            <div className="flex items-center gap-2 mt-6">
              {contact.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="grid place-items-center w-10 h-10 rounded-md border border-paper/15 text-paper/70 hover:text-paper hover:border-paper/35 transition-colors"
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Icon name={socialIcon[s.label] ?? "ArrowUpRight"} size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <span className="eyebrow text-paper/40">Studio</span>
            <ul className="flex flex-col gap-3 mt-5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-paper/70 hover:text-paper transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-paper/70 hover:text-paper transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <span className="eyebrow text-paper/40">Get in touch</span>
            <ul className="flex flex-col gap-3 mt-5">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-paper/70 hover:text-paper transition-colors"
                >
                  <Icon name="At" size={17} aria-hidden /> {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-paper/70">
                <Icon name="MapPin" size={17} aria-hidden /> {contact.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-paper/12 text-sm text-paper/45">
          <span>© {new Date().getFullYear()} DevStudio. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-paper/80 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-paper/80 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
