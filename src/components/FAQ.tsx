import { useState } from "react";
import { BlurText } from "./BlurText";

const FAQS = [
  {
    q: "What is IPTV and how does it work?",
    a: "IPTV (Internet Protocol Television) delivers TV channels through your internet connection instead of satellite or cable. You get a stream URL or app that plays thousands of live channels on any internet-connected device.",
  },
  {
    q: "Which devices are compatible?",
    a: "Smart TVs (Samsung, LG, Sony), Amazon Fire Stick, Apple TV, Nvidia Shield, Roku, Android boxes, Android phones, iPhones, iPads, Windows PCs, and Macs — if it connects to the internet, it works.",
  },
  {
    q: "Do I need a fast internet connection?",
    a: "For HD streams we recommend 10 Mbps. For 4K Ultra HD, 25 Mbps or above. Standard broadband handles HD perfectly fine for most households.",
  },
  {
    q: "How many devices can I use at the same time?",
    a: "Depending on your plan — 1 connection (1 Month), 2 connections (3 Months), or 5 simultaneous streams (12 Months). Each connection can be on a different device.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes. All new accounts get a 24-hour free trial with full access to every channel and VOD title — no payment details required to activate.",
  },
  {
    q: "What happens if a channel buffers or goes down?",
    a: "Our anti-freeze technology automatically switches to a backup server within milliseconds. In the rare event a channel has issues, our support team resolves it within 30 minutes.",
  },
  {
    q: "Can I watch live sports and PPV events?",
    a: "Yes. All sports packages are included in every plan — Premier League, NFL, NBA, UFC, Formula 1, MLB, boxing, and more. PPV events are included in the 3 Month and 12 Month plans.",
  },
  {
    q: "How do I set up after subscribing?",
    a: "After subscribing you receive your credentials within minutes. Follow our step-by-step device guide in the Support section, or our team will walk you through it via live chat.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const half = Math.ceil(FAQS.length / 2);
  const col1 = FAQS.slice(0, half);
  const col2 = FAQS.slice(half);

  return (
    <section id="support" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            FAQ
          </div>
          <BlurText
            text="Frequently Asked Questions"
            className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[col1, col2].map((col, ci) =>
            col.map((item) => {
              const idx = ci * half + col.indexOf(item);
              const isOpen = open === idx;
              return (
                <button
                  key={item.q}
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="liquid-glass rounded-2xl p-5 text-left flex flex-col gap-3 w-full transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-body text-sm font-medium text-white leading-snug">{item.q}</span>
                    <span
                      className="text-white/50 text-lg leading-none flex-shrink-0 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <p className="text-white/60 font-body font-light text-sm leading-relaxed border-t border-white/10 pt-3">
                      {item.a}
                    </p>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
