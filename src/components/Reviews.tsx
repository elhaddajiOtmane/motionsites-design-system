import { BlurText } from "./BlurText";

const REVIEWS = [
  {
    name: "Marcus D.",
    handle: "@marcus_streams",
    avatar: "M",
    time: "2 days ago",
    message: "Cancelled my Sky subscription immediately. 300+ sports channels, zero buffering during the Champions League final. Best £15 I've ever spent. 🔥",
    rating: 5,
  },
  {
    name: "Leila B.",
    handle: "@leila.watches",
    avatar: "L",
    time: "1 week ago",
    message: "Every Arabic and French channel my family needs, all in HD. Setup was 4 minutes. I've recommended MotionTV to everyone I know.",
    rating: 5,
  },
  {
    name: "Ryan O.",
    handle: "@ryaniptv",
    avatar: "R",
    time: "3 days ago",
    message: "Tested 6 IPTV services over 2 years. This is the ONLY one that didn't buffer once during a live match. Their anti-freeze tech is no joke.",
    rating: 5,
  },
  {
    name: "Sofia K.",
    handle: "@sofiakwatches",
    avatar: "S",
    time: "5 days ago",
    message: "The 4K quality on my OLED is unreal. Tried the free trial thinking I'd cancel — subscribed within 10 minutes. The VOD library alone is worth it.",
    rating: 5,
  },
  {
    name: "James T.",
    handle: "@jamestv99",
    avatar: "J",
    time: "4 days ago",
    message: "Setup took 3 minutes on my Fire Stick. All NFL games live, all UFC PPVs included. Customer support answered in 5 minutes on a Sunday night. 👏",
    rating: 5,
  },
  {
    name: "Amara N.",
    handle: "@amaravibes",
    avatar: "A",
    time: "1 week ago",
    message: "The kids' channels keep my children busy and I finally have every drama and movie I want. Running it on 3 TVs simultaneously — no lag at all.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-white text-xs">★</span>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Reviews
          </div>
          <BlurText
            text="Customer Reviews"
            className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            Real subscribers. Real streams. No script.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEWS.map((r) => (
            <div key={r.name} className="liquid-glass rounded-2xl p-5 flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="liquid-glass-strong rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading italic text-white text-sm">{r.avatar}</span>
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-body text-white text-xs font-medium truncate">{r.name}</span>
                  <span className="text-white/40 font-body text-[10px]">{r.handle}</span>
                </div>
                <span className="text-white/30 font-body text-[10px] ml-auto flex-shrink-0">{r.time}</span>
              </div>

              {/* Stars */}
              <Stars count={r.rating} />

              {/* Message */}
              <p className="text-white/70 font-body font-light text-sm leading-relaxed flex-1">
                {r.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
