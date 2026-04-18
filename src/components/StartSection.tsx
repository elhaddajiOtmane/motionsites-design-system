import { VideoBackground } from "./VideoBackground";
import { BlurText } from "./BlurText";

const START_VIDEO = "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    body: "We learn your brand, your goals, and what sets you apart. One hour. No fluff.",
  },
  {
    number: "02",
    title: "Design & Build",
    body: "Our team crafts your site — editorial layout, cinematic video, glass-surface depth.",
  },
  {
    number: "03",
    title: "Launch & Grow",
    body: "Your site goes live in days, not months. We handle hosting, speed, and SEO from day one.",
  },
];

export function StartSection() {
  return (
    <section id="services" className="relative overflow-hidden min-h-section">
      <VideoBackground src={START_VIDEO} />

      <div className="relative z-20 flex flex-col items-center text-center px-6 py-32 gap-16">
        {/* Heading block */}
        <div className="flex flex-col items-center gap-4">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            How It Works
          </div>
          <BlurText
            text="From Brief to Live in Days."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            Our process is tight, intentional, and built for brands that move fast.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {STEPS.map((step) => (
            <div key={step.number} className="liquid-glass rounded-2xl p-6 flex flex-col gap-3 text-left">
              <span className="font-heading italic text-white/30 text-4xl leading-none">
                {step.number}
              </span>
              <h3 className="font-heading italic text-white text-2xl leading-tight">
                {step.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
