import { Link } from "react-router-dom";
import { site } from "@/config/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-16 md:py-24">
      <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 animate-float rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="container relative max-w-3xl text-center">
        <h2 className="section-title reveal mb-6">{site.finalTitle}</h2>
        <p className="reveal mx-auto max-w-xl text-muted-foreground">{site.finalSubtitle}</p>
        <Link to="/dang-ky" className="btn-cta reveal mt-8">
          {site.ctaShort}
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-secondary py-8 text-center">
      <p className="px-4 font-bold text-secondary-foreground">{site.footer}</p>
    </footer>
  );
}
