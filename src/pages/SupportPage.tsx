import { FAQ } from "../components/FAQ";
import { BlurText } from "../components/BlurText";
import { ArrowUpRight } from "lucide-react";

const GUIDES = [
  { device: "Amazon Fire Stick", icon: "🔥", steps: ["Go to App Store", "Search 'IPTV Smarters'", "Install & open", "Enter your credentials", "Start watching"] },
  { device: "Smart TV (Samsung/LG)", icon: "📺", steps: ["Open Smart Hub", "Go to Apps", "Search 'Smart IPTV'", "Install & launch", "Enter your M3U URL"] },
  { device: "Android Phone/Tablet", icon: "📱", steps: ["Open Play Store", "Install 'IPTV Smarters Pro'", "Open the app", "Add your account", "Browse & stream"] },
  { device: "iPhone / iPad", icon: "🍎", steps: ["Open App Store", "Install 'GSE Smart IPTV'", "Launch the app", "Add your playlist URL", "Enjoy 15,000+ channels"] },
  { device: "Windows PC / Mac", icon: "💻", steps: ["Download VLC Media Player", "Open Network Stream (Ctrl+N)", "Paste your M3U URL", "Click Play", "Full channel list loads"] },
  { device: "Apple TV / Roku", icon: "📡", steps: ["Search 'IPTV Smarters' in store", "Install the app", "Open & select 'Add User'", "Enter your login details", "Stream in 4K"] },
];

export function SupportPage() {
  return (
    <div className="bg-black min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Support
          </div>
          <BlurText
            text="Setup Guides & Help"
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            Step-by-step guides for every device. Up and running in under five minutes.
          </p>
        </div>

        {/* Device guides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDES.map((g) => (
            <div key={g.device} className="liquid-glass rounded-2xl p-6 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center text-lg">
                  {g.icon}
                </div>
                <h3 className="font-heading italic text-white text-lg leading-tight">{g.device}</h3>
              </div>
              <ol className="flex flex-col gap-2">
                {g.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-heading italic text-white/30 text-sm leading-tight flex-shrink-0">{i + 1}.</span>
                    <span className="text-white/60 font-body font-light text-sm leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Live chat CTA */}
        <div className="liquid-glass rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading italic text-white text-3xl leading-tight">Still need help?</h3>
            <p className="text-white/60 font-body font-light text-sm max-w-sm">
              Our support team is available 24/7 via live chat. Average response time: under 5 minutes.
            </p>
          </div>
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium inline-flex items-center gap-2 flex-shrink-0">
            Open Live Chat <ArrowUpRight size={16} />
          </button>
        </div>

        {/* FAQ reused */}
        <FAQ />
      </div>
    </div>
  );
}
