import { Zap, Palette, BarChart3, Shield } from "lucide-react";
import { BlurText } from "./BlurText";

const FEATURES = [
  {
    icon: Zap,
    title: "Days, Not Months",
    body: "We move at the speed of your ambition. From kickoff to launch in under two weeks — guaranteed.",
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    body: "No templates. No shortcuts. Every element is designed to feel like it belongs only to your brand.",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    body: "Beautiful sites that also perform. Our layouts are engineered to guide visitors toward action.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    body: "Enterprise-grade hosting, SSL, and performance baked in from the start. Your site, protected.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Heading block */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Why Us
          </div>
          <BlurText
            text="Everything Your Site Needs."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            We handle every dimension of your web presence — design, performance, security, and conversion.
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
