import { Clapperboard, Mic, Play, Sparkles, Wand2 } from "lucide-react";
import { asset, site } from "@/config/site";

/** Poster bìa 16:9: nền xanh có tia sáng + điện thoại "AI VIDEO" bên trái + ảnh KOL bên phải (site.heroPhoto). */
export function CoverPoster() {
  return (
    <div className="relative flex aspect-video w-full items-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,hsl(120_70%_72%),hsl(145_70%_40%)_45%,hsl(165_80%_18%)_100%)]">
      {/* tia sáng */}
      <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg_at_35%_55%,rgba(255,255,255,.12)_0deg_6deg,transparent_6deg_18deg)]" />
      <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute right-10 bottom-0 h-52 w-52 rounded-full bg-emerald-200/40 blur-3xl" />

      {/* nửa trái: điện thoại + biểu tượng */}
      <div className="relative flex h-full w-[55%] items-center justify-center">
        <Clapperboard className="absolute left-[10%] top-[16%] h-8 w-8 animate-float text-white/80 sm:h-12 sm:w-12" />
        <Mic className="absolute right-[8%] top-[14%] h-7 w-7 animate-float text-white/80 [animation-delay:1s] sm:h-11 sm:w-11" />
        <Wand2 className="absolute bottom-[16%] left-[12%] h-7 w-7 animate-float text-white/80 [animation-delay:2s] sm:h-11 sm:w-11" />
        <Sparkles className="absolute bottom-[20%] right-[12%] h-7 w-7 animate-float text-white/90 [animation-delay:.5s] sm:h-10 sm:w-10" />

        <div className="relative flex h-[68%] w-[34%] min-w-[70px] flex-col items-center justify-center gap-2 rounded-[1.2rem] border-[3px] border-white/90 bg-black/80 shadow-2xl sm:border-4">
          <div className="absolute top-1.5 h-1 w-6 rounded-full bg-white/40 sm:top-2 sm:h-1.5 sm:w-8" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cta-gradient shadow-glow sm:h-14 sm:w-14">
            <Play className="ml-0.5 h-4 w-4 fill-white text-white sm:h-7 sm:w-7" />
          </div>
          <span className="px-1 text-center text-[9px] font-bold uppercase leading-tight text-white sm:text-xs">AI Video</span>
        </div>
      </div>

      {/* nửa phải: ảnh KOL */}
      {site.heroPhoto && (
        <div className="relative mr-[5%] h-[84%] w-[40%] -rotate-2 overflow-hidden rounded-xl border-[3px] border-white shadow-2xl transition-transform duration-700 group-hover:rotate-0 sm:rounded-2xl sm:border-4">
          <img src={asset(site.heroPhoto)} alt={site.speaker.name} className="h-full w-full object-cover object-[50%_25%]" />
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase text-white shadow sm:bottom-3 sm:px-3 sm:text-xs">
            {site.speaker.name}
          </span>
        </div>
      )}

      <span className="absolute bottom-2 left-[27.5%] -translate-x-1/2 whitespace-nowrap rounded-full bg-black/30 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-widest text-white backdrop-blur sm:bottom-3 sm:px-3 sm:py-1 sm:text-xs">
        {site.name}
      </span>
    </div>
  );
}
