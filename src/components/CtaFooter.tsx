import { ArrowUpRight } from "lucide-react";
import { VideoBackground } from "./VideoBackground";
import { BlurText } from "./BlurText";

const CTA_VIDEO = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const FOOTER_LINKS = ["Channels", "Pricing", "Support", "Privacy", "Terms"];

export function CtaFooter() {
  return (
    <>
      {/* CTA Section */}
      <section className="relative overflow-hidden min-h-[500px]">
        <VideoBackground src={CTA_VIDEO} />

        <div className="relative z-20 flex flex-col items-center text-center justify-center min-h-[500px] px-6 py-24 gap-8">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Free Trial
          </div>

          <BlurText
            text="Start Your Ultimate TV Experience Today!"
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] max-w-3xl"
          />

          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-md">
            24-hour free trial — no card required. Join 10,000+ subscribers streaming right now.
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium inline-flex items-center gap-2">
              Get Free Trial <ArrowUpRight size={16} />
            </button>
            <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium">
              View Plans
            </button>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-black border-t border-white/10 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/logo-icon.png"
              alt=""
              className="h-5 w-5 opacity-60"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <span className="font-heading italic text-white/40 text-sm">MotionTV</span>
          </div>

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

          <p className="text-white/40 font-body text-xs font-light">
            © {new Date().getFullYear()} MotionTV. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
