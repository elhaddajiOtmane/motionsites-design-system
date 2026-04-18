import { ArrowUpRight } from "lucide-react";
import { BlurText } from "./BlurText";

const PLANS = [
  {
    name: "1 Month",
    price: "$15",
    period: "/month",
    description: "Perfect for trying out the service.",
    connections: "1 Connection",
    featured: false,
    features: [
      "10,000+ Live Channels",
      "HD & Full HD Quality",
      "VOD Library Access",
      "All Sports Packages",
      "24/7 Customer Support",
      "Cancel Anytime",
    ],
  },
  {
    name: "3 Months",
    price: "$35",
    period: "/3 months",
    description: "Best value — most popular plan.",
    connections: "2 Connections",
    featured: true,
    features: [
      "15,000+ Live Channels",
      "4K Ultra HD Quality",
      "Full VOD Library (50K+)",
      "All Sports + PPV Events",
      "Priority 24/7 Support",
      "Anti-Freeze Technology",
      "EPG / TV Guide",
    ],
  },
  {
    name: "12 Months",
    price: "$70",
    period: "/year",
    description: "Full year, maximum savings.",
    connections: "5 Connections",
    featured: false,
    features: [
      "15,000+ Live Channels",
      "4K Ultra HD Quality",
      "Full VOD Library (50K+)",
      "All Sports + PPV Events",
      "Priority 24/7 Support",
      "Anti-Freeze Technology",
      "EPG / TV Guide",
      "Dedicated Account Manager",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Pricing
          </div>
          <BlurText
            text="Choose Your IPTV Subscription"
            className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            No contracts. No hidden fees. Switch plans any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col gap-6 rounded-2xl p-8 ${
                plan.featured
                  ? "liquid-glass-strong ring-1 ring-white/20 scale-105 md:scale-110"
                  : "liquid-glass"
              }`}
            >
              {plan.featured && (
                <div className="liquid-glass rounded-full px-3 py-1 text-xs font-medium text-white font-body self-start">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col gap-1">
                <span className="text-white/60 font-body text-sm font-medium">{plan.name}</span>
                <div className="flex items-end gap-1">
                  <span className="font-heading italic text-white text-5xl leading-none">{plan.price}</span>
                  <span className="text-white/40 font-body text-xs pb-1">{plan.period}</span>
                </div>
                <span className="text-white/50 font-body text-xs">{plan.connections}</span>
              </div>

              <p className="text-white/50 font-body font-light text-xs">{plan.description}</p>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-white/50 mt-0.5 text-xs">✓</span>
                    <span className="text-white/70 font-body font-light text-xs leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`rounded-full px-5 py-2.5 font-body text-sm font-medium inline-flex items-center justify-center gap-2 mt-auto ${
                  plan.featured
                    ? "bg-white text-black"
                    : "liquid-glass-strong text-white"
                }`}
              >
                {plan.featured ? "Subscribe Now" : "Get Started"} <ArrowUpRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
