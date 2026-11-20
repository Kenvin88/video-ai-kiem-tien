import { ArrowUpRight, AudioLines, Coins, Factory, FileText, Gift, Workflow, type LucideIcon } from "lucide-react";
import { site } from "@/config/site";

const icons: Record<string, LucideIcon> = {
  workflow: Workflow,
  script: FileText,
  voice: AudioLines,
  factory: Factory,
  gift: Gift,
  money: Coins,
};

export function Benefits() {
  return (
    <section className="bg-secondary/50 py-12 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="section-title reveal">{site.benefitsTitle}</h2>
        <p className="reveal mx-auto mt-3 max-w-xl text-center text-muted-foreground md:mt-4">{site.benefitsSubtitle}</p>

        <div className="mt-10 space-y-4 md:space-y-5">
          {site.benefits.map((b, i) => {
            const Icon = icons[b.icon] ?? Gift;
            return (
              <div
                key={b.title}
                className="reveal group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-primary/20 bg-card p-4 pl-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-glow md:gap-6 md:p-6 md:pl-7"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary to-accent" />
                <span className="w-14 shrink-0 text-center text-4xl font-black text-gradient md:w-20 md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:flex md:h-14 md:w-14">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-base font-bold md:text-xl">{b.title}</h3>
                  <p className="text-sm text-muted-foreground md:text-base">{b.desc}</p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-primary/40 transition-colors group-hover:text-primary sm:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
