import { BlurText } from "./BlurText";

const ROWS = [
  {
    badge: "Content",
    heading: "15,000+ Live Channels.",
    body: "Sports, news, movies, kids, international — every category, every country. Updated live, 24 hours a day.",
    gif: "/src/assets/feature-1.gif",
    gifLeft: false,
  },
  {
    badge: "Quality",
    heading: "Crystal-Clear 4K Streams.",
    body: "Full HD and 4K Ultra HD across every channel. Adaptive bitrate ensures zero buffering even on slower connections.",
    gif: "/src/assets/feature-2.gif",
    gifLeft: true,
  },
];

function FeatureMedia({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="liquid-glass rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        onError={(e) => {
          const el = e.target as HTMLImageElement;
          el.style.display = "none";
          const parent = el.parentElement;
          if (parent) {
            parent.style.minHeight = "280px";
            parent.style.background = "rgba(255,255,255,0.03)";
          }
        }}
      />
    </div>
  );
}

export function FeaturesChess() {
  return (
    <section id="channels" className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {ROWS.map((row) => (
          <div
            key={row.heading}
            className={`flex flex-col ${row.gifLeft ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
          >
            {/* Text */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-flex self-start">
                {row.badge}
              </div>
              <BlurText
                text={row.heading}
                className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
              />
              <p className="text-white/60 font-body font-light text-sm md:text-base max-w-md">
                {row.body}
              </p>
            </div>

            {/* GIF / media */}
            <div className="flex-1 w-full">
              <FeatureMedia src={row.gif} alt={row.heading} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
