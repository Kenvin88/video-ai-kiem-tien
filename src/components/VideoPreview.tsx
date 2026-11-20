import { Link } from "react-router-dom";
import { PlayCircle } from "lucide-react";
import { site } from "@/config/site";

export function VideoPreview() {
  const id = site.youtubeId;
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container max-w-4xl text-center">
        <h2 className="reveal text-2xl font-extrabold md:text-4xl">{site.videoTitle}</h2>
        <p className="reveal mt-2 text-muted-foreground">{site.videoSubtitle}</p>

        <div className="reveal group relative mx-auto mt-8 aspect-video overflow-hidden rounded-2xl border border-primary/20 shadow-glow">
          {id ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&rel=0&modestbranding=1`}
              title={site.videoTitle}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary via-white to-secondary">
              <PlayCircle className="h-16 w-16 text-primary transition-transform duration-300 group-hover:scale-110" />
              <p className="text-sm font-semibold text-secondary-foreground">Video sẽ hiển thị ở đây (điền youtubeId trong site.ts)</p>
            </div>
          )}
        </div>

        <Link to="/dang-ky" className="btn-cta mt-8">
          {site.ctaShort}
        </Link>
      </div>
    </section>
  );
}
