import { Sparkle } from "lucide-react";
import { site } from "@/config/site";

export function Marquee() {
  const items = [...site.marquee, ...site.marquee];
  return (
    <div className="relative overflow-hidden border-y border-primary/20 bg-secondary/80 py-3">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((text, i) => (
              <span key={i} className="flex items-center gap-6 px-3 text-sm font-bold uppercase tracking-wide text-secondary-foreground md:text-base">
                <Sparkle className="h-4 w-4 fill-primary text-primary" />
                <span className="whitespace-nowrap">{text}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
