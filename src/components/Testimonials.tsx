import { BlurText } from "./BlurText";

const TESTIMONIALS = [
  {
    quote:
      "I cancelled my cable subscription the day I found MotionTV. 300+ sports channels, crystal-clear picture, and it costs less than a pizza night.",
    name: "Marcus D.",
    role: "Subscriber since 2024",
  },
  {
    quote:
      "Every international channel my family needs — Arabic, French, Turkish — all in HD. Setup took four minutes. I'm not going back.",
    name: "Leila B.",
    role: "Family Plan Subscriber",
  },
  {
    quote:
      "Tested six IPTV services over two years. MotionTV is the only one that hasn't buffered once during a live match. That's everything.",
    name: "Ryan O.",
    role: "Premium Plan Subscriber",
  },
];

export function Testimonials() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Heading block */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Subscribers
          </div>
          <BlurText
            text="Thousands Stream. All Stay."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            Our renewal rate speaks for itself. Here's what real subscribers say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="liquid-glass rounded-2xl p-6 flex flex-col gap-6">
              <p className="text-white/80 font-body font-light text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading italic text-white text-lg leading-tight">
                  {t.name}
                </span>
                <span className="text-white/50 font-body font-light text-xs">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
