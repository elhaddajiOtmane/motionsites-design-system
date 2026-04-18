import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { BlurText } from "./BlurText";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.src = HERO_VIDEO;
    }
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: "1000px" }}>
      {/* Video — positioned from 20% down per spec */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 right-0 w-full h-full object-cover z-0"
        style={{ top: "20%" }}
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: 200,
          background: "linear-gradient(to bottom, #000000, transparent)",
        }}
      />

      {/* Bottom fade — 300px for hero */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: 300,
          background: "linear-gradient(to top, #000000, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 pb-32 gap-8">
        {/* Announcement badge */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2">
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
              New
            </span>
            <span className="text-white text-sm font-body pr-2">
              Introducing AI-powered web design.
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <BlurText
          text="The Website Your Brand Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] max-w-4xl"
          delay={200}
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/60 font-body font-light text-sm md:text-base max-w-xl"
        >
          We build luxury editorial websites for ambitious brands — fast, cinematic, and built to convert.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-4"
        >
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body text-sm font-medium inline-flex items-center gap-2">
            Get Started <ArrowUpRight size={16} />
          </button>
          <button className="text-white font-body text-sm font-light inline-flex items-center gap-2">
            <Play size={14} fill="white" /> Watch the Film
          </button>
        </motion.div>
      </div>
    </section>
  );
}
