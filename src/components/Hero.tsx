import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Planet Glow */}
      <div className="absolute top-0 inset-x-0 flex justify-center -z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-purple-900/30 to-black/0 mask-image-gradient" />
        <img 
          src="/hero_planet_bg_1776487853649.png" 
          alt="Planet Glow" 
          className="w-full max-w-[1200px] h-auto object-cover opacity-60 mix-blend-screen"
          style={{ WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }}
        />
        <div className="absolute top-[400px] w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-medium text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Welcome to Vai TV
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-heading italic text-white tracking-tight mb-6 max-w-4xl"
        >
          Experience Lightning Vai TV IPTV Streaming
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light"
        >
          4K live streaming, 100,000+ Movies, 20,000+ Series & 60,000+ Live TV Channels
          without buffering or freezing at all times.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
            Get Started
          </button>
          <button className="px-8 py-3.5 bg-transparent text-white border border-white/20 font-semibold rounded-full hover:bg-white/5 transition-all flex items-center gap-2">
            <PlayCircle size={20} />
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
