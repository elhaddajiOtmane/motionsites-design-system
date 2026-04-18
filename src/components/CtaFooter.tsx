import { ArrowUpRight } from "lucide-react";
import { VideoBackground } from "./VideoBackground";
import { BlurText } from "./BlurText";

const CTA_VIDEO = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const FOOTER_LINKS = ["Services", "Work", "Pricing", "About", "Privacy"];

export function CtaFooter() {
  return (
    <section className="relative overflow-hidden min-h-section">
      <VideoBackground src={CTA_VIDEO} />

      <div className="relative z-20 flex flex-col px-6 py-32">
        {/* CTA block */}
        <div className="flex flex-col items-center text-center gap-8 pb-32">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Get Started
          </div>

          <BlurText
            text="Your Brand Deserves Better."
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] max-w-3xl"
          />

          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-md">
            Join over 150 ambitious brands that chose Motionsites. Let's build something exceptional.
          </p>

          <div className="flex items-center gap-4">
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium inline-flex items-center gap-2">
              Start Your Project <ArrowUpRight size={16} />
            </button>
            <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium">
              View Pricing
            </button>
          </div>
        </div>

        {/* Footer bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/logo-icon.png"
              alt=""
              className="h-5 w-5 opacity-60"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <span className="font-heading italic text-white/40 text-sm">Motionsites</span>
          </div>

          {/* Links */}
          <ul className="flex items-center gap-5 flex-wrap justify-center">
            {FOOTER_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-white/40 hover:text-white/70 font-body text-xs font-light transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-white/40 font-body text-xs font-light">
            © {new Date().getFullYear()} Motionsites. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
