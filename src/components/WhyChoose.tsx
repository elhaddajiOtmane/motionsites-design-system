import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Laptop, Clock, HeadphonesIcon } from "lucide-react";

const FEATURES = [
  { icon: <Wrench size={32} />, title: "Install App" },
  { icon: <ShieldCheck size={32} />, title: "Reliability" },
  { icon: <Laptop size={32} />, title: "Multi Device" },
  { icon: <Clock size={32} />, title: "99.9% Uptime" },
  { icon: <HeadphonesIcon size={32} />, title: "24/7 Support" },
];

export function WhyChoose() {
  return (
    <section className="py-24 relative overflow-hidden bg-black z-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="text-purple-500 text-sm font-semibold tracking-wider uppercase mb-2">Core Features</div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Why You Should Choose Vai TV Services
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <p className="text-gray-400 text-lg">
              Vai TV Provides seamlessly integrated service with a rich feature set to allow you to effortlessly experience TV, movies, matches and streaming platforms from one central hub.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-8 bg-purple-950/20 border border-purple-500/20 rounded-2xl hover:bg-purple-900/40 hover:border-purple-500/50 transition-all cursor-default group"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 group-hover:text-purple-300 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-white font-medium text-center whitespace-nowrap">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
