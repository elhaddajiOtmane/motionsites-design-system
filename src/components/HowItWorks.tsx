import { BlurText } from "./BlurText";

const STEPS = [
  {
    number: "01",
    icon: "📋",
    title: "Choose Your Plan",
    body: "Pick the subscription that fits — monthly, quarterly, or annual. All plans include a 24-hour free trial.",
  },
  {
    number: "02",
    icon: "📲",
    title: "Connect Your Device",
    body: "Install our app on any Smart TV, Fire Stick, Android, iOS, PC, or Mac. Setup takes under five minutes.",
  },
  {
    number: "03",
    icon: "▶️",
    title: "Start Streaming",
    body: "Unlock 15,000+ live channels and 50,000+ on-demand titles instantly. Zero buffering, crystal-clear 4K.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            How It Works
          </div>
          <BlurText
            text="How Our IPTV Service Works"
            className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div key={step.number} className="liquid-glass rounded-2xl p-8 flex flex-col gap-4 text-center items-center">
              <div className="liquid-glass-strong rounded-full w-16 h-16 flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <span className="font-heading italic text-white/25 text-3xl leading-none">{step.number}</span>
              <h3 className="font-heading italic text-white text-2xl leading-tight">{step.title}</h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
