import { motion } from "framer-motion";

const REVIEWS = [
  { img: "/poster_action_1776487911427.png", msg1: "Thanks! Account is active.", msg2: "Working flawlessly smoothly!" },
  { img: "/poster_scifi_1776487896727.png", msg1: "Set it up on my Firestick.", msg2: "Picture quality is incredible." },
  { img: "/poster_fantasy_1776487877529.png", msg1: "Awesome support 👏", msg2: "Got my 4K streams running in minutes." },
  { img: "/hero_planet_bg_1776487853649.png", msg1: "No buffering during the big match", msg2: "Highly recommended." },
];

export function Reviews() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white text-center mb-16 uppercase tracking-wider">
          Feedback of our Customer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#efeae2] rounded-2xl overflow-hidden shadow-lg flex flex-col relative aspect-[4/7]"
            >
              {/* WhatsApp Header Mock */}
              <div className="bg-[#075e54] text-white p-3 flexItems-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden shrink-0">
                  <img src={review.img} className="w-full h-full object-cover" alt="" />
                </div>
                <div>
                  <div className="font-bold text-sm">Customer {idx + 1}</div>
                  <div className="text-[10px] opacity-80">online</div>
                </div>
              </div>

              {/* Chat Background */}
              <div className="flex-1 p-4 flex flex-col gap-3 relative z-10" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", backgroundSize: 'cover' }}>
                <div className="bg-white text-black p-2 rounded-lg rounded-tl-none self-start max-w-[80%] text-sm shadow-sm relative">
                  Hi, is the trial available?
                </div>
                <div className="bg-[#dcf8c6] text-black p-2 rounded-lg rounded-tr-none self-end max-w-[80%] text-sm shadow-sm">
                  Yes, credentials sent!
                </div>
                <div className="bg-white text-black p-2 rounded-lg rounded-tl-none self-start max-w-[80%] text-sm shadow-sm">
                  <img src={review.img} className="w-full h-24 object-cover rounded mb-2" alt="Proof" />
                  {review.msg1}
                </div>
                <div className="bg-white text-black p-2 rounded-lg rounded-tl-none self-start max-w-[80%] text-sm shadow-sm">
                  {review.msg2}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
