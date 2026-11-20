import { Link } from "react-router-dom";
import { CalendarDays, Gift } from "lucide-react";
import { asset, site } from "@/config/site";
import { useCountdown } from "@/hooks/useCountdown";
import { CoverPoster } from "./CoverPoster";

export function Hero() {
  const t = useCountdown(site.eventDate);
  const units = [
    { v: t.days, l: "Ngày" },
    { v: t.hours, l: "Giờ" },
    { v: t.minutes, l: "Phút" },
    { v: t.seconds, l: "Giây" },
  ];

  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-16 pt-12 md:pb-24 md:pt-16">
      {/* đốm sáng trang trí */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary/60 px-4 py-1.5 backdrop-blur animate-fade-in">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{site.badge}</span>
        </div>

        <h1 className="mt-5 text-[clamp(1.6rem,6vw,3.25rem)] font-black uppercase leading-[1.1] tracking-tight animate-fade-in [animation-delay:.1s]">
          {site.titleDark} <span className="block text-primary">{site.titleGold}</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg font-semibold text-muted-foreground md:text-xl animate-fade-in [animation-delay:.2s]">
          {site.subtitle}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 font-bold animate-fade-in [animation-delay:.3s]">
          <CalendarDays className="h-4 w-4 text-accent" />
          {site.eventDateLabel}
        </div>

        {/* Ảnh bìa có viền phát sáng */}
        <div className="group relative mx-auto mt-8 max-w-3xl animate-fade-in [animation-delay:.35s]">
          <div className="absolute -inset-1 animate-pulse-soft rounded-2xl bg-gradient-to-tr from-primary via-accent to-primary opacity-60 blur transition duration-500 group-hover:opacity-90" />
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-white p-1.5 shadow-glow sm:p-2">
            <div className="overflow-hidden rounded-xl transition-transform duration-700 group-hover:scale-[1.02]">
              {site.coverImage ? (
                <img src={asset(site.coverImage)} alt={site.name} className="aspect-video w-full object-cover" />
              ) : (
                <CoverPoster />
              )}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-lg md:text-xl">
          👉 {site.question} <span className="font-bold text-primary">{site.questionGold}</span>
        </p>

        {t.ended ? (
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-destructive/20 bg-destructive/10 p-6">
            <p className="text-lg font-bold text-destructive">🚫 Đã hết thời gian đăng ký!</p>
            <p className="mt-1 text-sm text-muted-foreground">Cổng đăng ký đã đóng.</p>
          </div>
        ) : (
          <>
            <div className="mt-6">
              <Link to="/dang-ky" className="btn-cta w-full max-w-md">
                <Gift className="h-5 w-5 shrink-0" />
                {site.ctaMain}
              </Link>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{site.ctaNote}</p>

            <div className="mt-8 flex justify-center gap-2 sm:gap-3" aria-label="Thời gian còn lại">
              {units.map((u) => (
                <div
                  key={u.l}
                  className="w-16 rounded-xl border border-primary/30 bg-secondary px-2 py-2 shadow-soft sm:w-20"
                >
                  <div className="text-2xl font-black tabular-nums text-gradient sm:text-3xl">
                    {String(u.v).padStart(2, "0")}
                  </div>
                  <div className="text-[11px] font-semibold uppercase text-secondary-foreground">{u.l}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
