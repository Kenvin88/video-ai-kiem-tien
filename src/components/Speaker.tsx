import { asset, site } from "@/config/site";

export function Speaker() {
  const s = site.speaker;
  const initials = s.name
    .split(" ")
    .slice(-2)
    .map((w) => w[0])
    .join("");

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="reveal text-center text-3xl font-bold text-primary md:text-4xl">{site.speakerTitle}</h2>

        <div className="reveal group mt-8 flex flex-col items-center gap-6 rounded-2xl border border-primary/15 bg-card-gradient p-6 text-center shadow-soft sm:flex-row sm:items-center sm:gap-8 sm:p-10 sm:text-left">
          <div className="relative shrink-0">
            {s.avatar ? (
              <img
                src={asset(s.avatar)}
                alt={s.name}
                className="h-32 w-32 rounded-full border-4 border-primary/20 object-cover shadow-glow transition-transform group-hover:scale-105 md:h-40 md:w-40"
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary/20 bg-cta-gradient text-4xl font-black text-white shadow-glow transition-transform group-hover:scale-105 md:h-40 md:w-40 md:text-5xl">
                {initials}
              </div>
            )}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-0.5 text-xs font-bold uppercase text-white shadow">
              {s.label}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold md:text-3xl">{s.name}</h3>
            <p className="mt-1 font-semibold text-accent">{s.role}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
              {s.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">{s.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
