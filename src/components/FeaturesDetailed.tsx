import { motion } from "framer-motion";
import { MonitorSmartphone, Server, FileVideo, Undo2, ShieldCheck, CreditCard } from "lucide-react";

const STATS = [
  { label: "UPTIME", value: "99.9%" },
  { label: "HAPPY CUSTOMERS", value: "10 K+" },
  { label: "SERVER UPTIME", value: "98%" },
  { label: "PROFESSIONALS", value: "2500" },
  { label: "ONLINE SUPPORT", value: "24/7" },
];

const DETAILS = [
  { icon: <MonitorSmartphone size={32} />, title: "Multi Device Support", desc: "Our platform works seamlessly across all your devices, smartphone, tablet, smart TV." },
  { icon: <Server size={32} />, title: "High Availability Servers", desc: "Experience uninterrupted streaming with our robust, high-availability server infrastructure." },
  { icon: <FileVideo size={32} />, title: "Exclusive Content", desc: "Access premium channels and exclusive VOD content and sports." },
  { icon: <Undo2 size={32} />, title: "Money Back Guarantee", desc: "We offer 7 days money back guarantee. Try our service risk free." },
  { icon: <ShieldCheck size={32} />, title: "Free Updates", desc: "Regular updates to channels and VODs without any extra cost." },
  { icon: <CreditCard size={32} />, title: "100% SECURE PAYMENT", desc: "Your payments are processed securely without storing details." },
];

export function FeaturesDetailed() {
  return (
    <section className="py-24 bg-black relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* STATS */}
        <div className="border-t border-b border-purple-900/50 py-12 mb-24">
          <div className="flex flex-wrap justify-between items-center text-center gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex-1">
                <div className="text-gray-400 text-xs font-semibold tracking-wider mb-2">{stat.label}</div>
                <div className="text-3xl md:text-5xl font-bold font-heading text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Everything You Need For Perfect<br/>Entertainment</h2>
          <p className="text-gray-400">All premium plans include 7 days free stream.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {DETAILS.map((detail, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-6 p-6 rounded-2xl bg-purple-950/10 border border-purple-500/10 hover:border-purple-500/30 transition-colors"
            >
              <div className="text-purple-500 flex-shrink-0">
                {detail.icon}
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">{detail.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{detail.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
