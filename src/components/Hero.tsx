import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "./BlurText";

const SPORT_LOGOS = [
  { label: "NBA", emoji: "🏀" },
  { label: "NFL", emoji: "🏈" },
  { label: "MLB", emoji: "⚾" },
  { label: "UFC", emoji: "🥊" },
  { label: "Formula 1", emoji: "🏎️" },
  { label: "Premier League", emoji: "⚽" },
  { label: "NBA", emoji: "🎾" },
  { label: "Olympics", emoji: "🏅" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[720px] flex flex-col">
      {/* Stadium background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_stadium.png"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 160, background: "linear-gradient(to bottom, #000, transparent)" }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 220, background: "linear-gradient(to top, #000, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center flex-1 px-6 pt-40 pb-24 gap-7">
        {/* Badge */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2">
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">Live</span>
            <span className="text-white text-sm font-body pr-2">15,000+ channels streaming right now.</span>
          </div>
        </motion.div>

        {/* Headline */}
        <BlurText
          text="Premium IPTV Service at Affordable Price"
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-[-3px] max-w-4xl"
          delay={150}
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/60 font-body font-light text-sm md:text-base max-w-lg"
        >
          Crystal-clear 4K streams, zero buffering, and every sport, movie, and series — on any screen, any time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium inline-flex items-center gap-2">
            Get Started <ArrowUpRight size={16} />
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium">
            View Plans
          </button>
        </motion.div>
      </div>

      {/* Sport logos strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="relative z-20 pb-10"
      >
        <div className="flex items-center justify-center gap-2 flex-wrap px-6">
          {SPORT_LOGOS.map(({ label, emoji }) => (
            <div
              key={label + emoji}
              className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2"
            >
              <span className="text-lg leading-none">{emoji}</span>
              <span className="text-white/70 font-body text-xs font-medium">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
