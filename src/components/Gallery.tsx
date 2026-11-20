import { ImageIcon } from "lucide-react";
import { asset, site } from "@/config/site";

const tints = [
  "from-green-200 to-emerald-400",
  "from-lime-100 to-green-400",
  "from-emerald-200 to-teal-400",
  "from-green-100 to-emerald-300",
];

/** Băng ảnh sự kiện chạy ngang vô hạn (bằng chứng xã hội). */
export function Gallery() {
  const items = [...site.gallery, ...site.gallery];
  return (
    <div className="relative overflow-hidden bg-background py-10 md:py-14">
      {/* mờ 2 mép */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent md:w-24" />

      <div className="flex w-max animate-marquee-slow gap-4 hover:[animation-play-state:paused]">
        {items.map((src, i) =>
          src ? (
            <img
              key={i}
              src={asset(src)}
              alt={`Khoảnh khắc sự kiện ${(i % site.gallery.length) + 1}`}
              loading="lazy"
              className="aspect-[4/3] h-40 w-auto shrink-0 rounded-xl border border-primary/20 object-cover shadow-sm md:h-56"
            />
          ) : (
            <div
              key={i}
              className={`flex aspect-[4/3] h-40 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-primary/20 bg-gradient-to-br shadow-sm md:h-56 ${tints[i % tints.length]}`}
            >
              <ImageIcon className="h-8 w-8 text-white/90" />
              <span className="text-xs font-semibold text-white/90">Ảnh sự kiện {(i % site.gallery.length) + 1}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
