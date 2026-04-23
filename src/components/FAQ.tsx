import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "Is 1 subscription available on multi devices?", a: "Yes, you can use combinations of devices depending on your selected plan. Check the pricing section for multiple device connections." },
  { q: "Can I use on Apple TV Also with Mac PC?", a: "Absolutely. Our service is compatible with all Apple devices including Apple TV, Mac, iPad, and iPhone via compatible IPTV player apps." },
  { q: "Do you offer TV Guide (EPG) support?", a: "Yes, we provide a full Electronic Program Guide (EPG) that is updated regularly for most of our channels." },
  { q: "Can I use VPN if my ISP is blocking you?", a: "Yes, using a VPN is completely allowed and actually recommended if your ISP throttles or blocks IPTV traffic." },
  { q: "How Can I Pay For Service?", a: "We accept PayPal, Credit/Debit Cards, and various cryptocurrencies for 100% secure payments." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white text-center mb-16">
          Frequently Asked Questions About
        </h2>

        <div className="space-y-4 mb-32">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-purple-900/50 rounded-xl overflow-hidden bg-purple-950/20">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-900/30 transition-colors"
              >
                <span className="text-white font-medium">{faq.q}</span>
                <ChevronDown className={`text-purple-500 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 border-t border-purple-900/30">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Reseller CTA */}
        <div className="bg-gradient-to-b from-purple-900/80 to-purple-600/20 p-16 rounded-3xl text-center border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
          <h2 className="text-4xl md:text-5xl font-heading font-bold italic text-white mb-8">
            Join Our IPTV Reseller<br/>Program
          </h2>
          <button className="px-8 py-3 bg-transparent border border-white/50 text-white rounded-full hover:bg-white hover:text-purple-900 font-semibold transition-all">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
