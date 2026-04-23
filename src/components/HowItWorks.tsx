import { motion } from "framer-motion";
import { MonitorPlay, Smartphone, Tv2, Gamepad2, Settings } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-20">How It Works<br/><span className="text-lg font-body font-normal text-purple-400">Stream in 4 quick steps</span></h2>

        {/* Stepper Timeline */}
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 mb-32">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-purple-900 z-0">
            <div className="absolute inset-y-0 left-0 bg-purple-500 w-full" />
          </div>

          {[
            { step: 'Step 1', title: 'Choose Your IPTV Package', desc: 'Select your preferred layout package matching your needs' },
            { step: 'Step 2', title: 'Connect To Our Network', desc: 'Securely link your active device with our worldwide network' },
            { step: 'Step 3', title: 'Setup Devices For Watch', desc: 'Input your details and finalize setup to prepare for playback' },
            { step: 'Step 4', title: 'Enjoy Unlimited Movies', desc: 'Access over 50,000+ Movies and series available today.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center flex-1 max-w-[250px] mx-auto text-center"
            >
              <div className="w-12 h-12 rounded-full bg-purple-950 border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold mb-6 text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                {idx + 1}
              </div>
              <div className="bg-purple-950/20 border border-purple-500/20 p-6 rounded-2xl">
                <div className="text-purple-400 text-xs font-bold uppercase mb-2">{item.step}</div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Devices Cluster */}
        <div className="relative pt-10">
          <div className="absolute mx-auto inset-0 w-full max-w-[800px] h-[300px] bg-purple-600/10 blur-[100px] rounded-[100%]" />
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 relative z-10 opacity-70">
            <div className="flex flex-col items-center gap-2"><Smartphone size={32} /><span className="text-xs">Android</span></div>
            <div className="flex flex-col items-center gap-2"><MonitorPlay size={32} /><span className="text-xs">Apple TV</span></div>
            <div className="flex flex-col items-center gap-2"><Gamepad2 size={32} /><span className="text-xs">Kodi</span></div>
            <div className="flex flex-col items-center gap-2"><Tv2 size={32} /><span className="text-xs">Firestick</span></div>
            <div className="flex flex-col items-center gap-2"><Settings size={32} /><span className="text-xs">Enigma</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
