import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PLANS = [
  { name: "1 MONTH - 4K", price: "$14.99/month", features: ["100,000+ Movies", "20,000+ Series", "TV Channels In 4K / FHD", "TV Guide (EPG)", "Anti Freeze Buffer", "24/7 Premium Support"] },
  { name: "3 MONTHS - 4K", price: "$29.99/3 months", highlighted: true, features: ["100,000+ Movies", "20,000+ Series", "TV Channels In 4K / FHD", "TV Guide (EPG)", "Anti Freeze Buffer", "24/7 Premium Support"] },
  { name: "6 MONTHS - 4K", price: "$44.99/6 months", features: ["100,000+ Movies", "20,000+ Series", "TV Channels In 4K / FHD", "TV Guide (EPG)", "Anti Freeze Buffer", "24/7 Premium Support"] },
  { name: "12 MONTHS - 4K", price: "$64.99/12 months", features: ["100,000+ Movies", "20,000+ Series", "TV Channels In 4K / FHD", "TV Guide (EPG)", "Anti Freeze Buffer", "24/7 Premium Support"] },
];

export function Pricing() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Flexible Plans</h2>
          <p className="text-gray-400">All plans are flexible and include a wide variety of channels & streaming options.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["1 Month", "3 Months", "6 Months", "12 Months"].map((tab, idx) => (
            <button key={tab} className={`px-6 py-2 rounded-full font-semibold text-sm ${idx === 1 ? 'bg-purple-600 text-white' : 'bg-purple-950/30 text-purple-300 border border-purple-500/30'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col p-8 rounded-3xl ${plan.highlighted ? 'bg-purple-900 border-2 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'bg-purple-950/20 border border-purple-500/20 hover:border-purple-500/50'}`}
            >
              <h3 className="text-center font-bold text-white mb-1 uppercase tracking-wide">{plan.name}</h3>
              <p className="text-center text-xs text-purple-300 mb-6">Receive devices within 4-5 Days Delay</p>
              
              <div className="text-center text-2xl font-bold text-white mb-8">
                {plan.price}
              </div>

              <button className={`w-full py-3 rounded-full font-bold text-sm mb-8 transition-transform hover:scale-105 ${plan.highlighted ? 'bg-white text-purple-900' : 'bg-purple-600 text-white'}`}>
                Buy Now
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={16} className={plan.highlighted ? "text-purple-300" : "text-purple-500"} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
