import { VideoBackground } from "./VideoBackground";
import { BlurText } from "./BlurText";

const START_VIDEO = "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

const STEPS = [
  {
    number: "01",
    title: "Pick Your Plan",
    body: "Monthly, quarterly, or annual — choose the subscription that fits your household. Cancel any time.",
  },
  {
    number: "02",
    title: "Connect Any Device",
    body: "Smart TV, Fire Stick, Apple TV, Android, iPhone, PC — if it has a screen, it streams.",
  },
  {
    number: "03",
    title: "Watch Instantly",
    body: "Your account is live in under three minutes. Thousands of channels, zero waiting.",
  },
];

export function StartSection() {
  return (
    <section id="features" className="relative overflow-hidden min-h-section">
      <VideoBackground src={START_VIDEO} />

      <div className="relative z-20 flex flex-col items-center text-center px-6 py-32 gap-16">
        {/* Heading block */}
        <div className="flex flex-col items-center gap-4">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            How It Works
          </div>
          <BlurText
            text="Live in Three Minutes."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            No satellite dish. No engineer visit. Just sign up, connect, and stream.
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
