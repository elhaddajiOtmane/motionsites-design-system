import { VideoBackground } from "./VideoBackground";
import { BlurText } from "./BlurText";

const STATS_VIDEO = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

const STAT_ITEMS = [
  { value: "15K+", label: "Live Channels" },
  { value: "50K+", label: "On-Demand Titles" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "4K", label: "Ultra HD Streams" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden min-h-section">
      <VideoBackground src={STATS_VIDEO} desaturate />

      <div className="relative z-20 flex flex-col items-center text-center px-6 py-32 gap-16">
        {/* Heading block */}
        <div className="flex flex-col items-center gap-4">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            By the Numbers
          </div>
          <BlurText
            text="The Scale to Match Your Appetite."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
        </div>

        {/* Stats card — rounded-3xl per spec */}
        <div className="liquid-glass rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl w-full">
          {STAT_ITEMS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <span className="font-heading italic text-white text-4xl md:text-5xl lg:text-6xl leading-none">
                {stat.value}
              </span>
              <span className="text-white/50 font-body font-light text-xs md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
