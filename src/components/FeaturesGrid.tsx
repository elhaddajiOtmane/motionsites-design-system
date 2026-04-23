import { Zap, Palette, BarChart3, Shield } from "lucide-react";
import { BlurText } from "./BlurText";

const FEATURES = [
  {
    icon: Zap,
    title: "Zero Buffering",
    body: "Our ultra-low-latency CDN serves streams from 50+ global edge nodes — so you never miss a goal, a scene, or a beat.",
  },
  {
    icon: Palette,
    title: "Every Device",
    body: "Smart TV, Fire Stick, Apple TV, Roku, Android, iOS, PC, Mac. One account. Up to 5 simultaneous streams.",
  },
  {
    icon: BarChart3,
    title: "50K+ On Demand",
    body: "Movies, series, documentaries, and specials available instantly — no waiting, no scheduling, no limits.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    body: "End-to-end encrypted streams. No logs, no tracking, no sharing your viewing data. Your watchlist is yours alone.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Heading block */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Why MotionTV
          </div>
          <BlurText
            text="Built for Serious Viewers."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            We obsess over every frame so your only job is to sit back and watch.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="liquid-glass rounded-2xl p-6 flex flex-col gap-4">
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                <Icon size={16} className="text-white" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading italic text-white text-2xl leading-tight">
                  {title}
                </h3>
                <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
