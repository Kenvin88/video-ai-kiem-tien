import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Benefits } from "@/components/Benefits";
import { Speaker } from "@/components/Speaker";
import { VideoPreview } from "@/components/VideoPreview";
import { Gallery } from "@/components/Gallery";
import { FinalCta, Footer } from "@/components/FinalCta";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();
  return (
    <main>
      <Hero />
      <Marquee />
      <Benefits />
      <Speaker />
      <VideoPreview />
      <Gallery />
      <FinalCta />
      <Footer />
    </main>
  );
}
