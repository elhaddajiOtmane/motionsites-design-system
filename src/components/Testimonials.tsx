import { BlurText } from "./BlurText";

const TESTIMONIALS = [
  {
    quote:
      "Motionsites delivered a site that looks like it cost ten times what we paid. Our conversion rate doubled in the first month.",
    name: "Aria Nakamura",
    role: "Founder, Luminos Studio",
  },
  {
    quote:
      "I've worked with four agencies. None of them moved this fast or cared this deeply about the details. The result speaks for itself.",
    name: "James Okafor",
    role: "CEO, Vantage Capital",
  },
  {
    quote:
      "The team understood our brand immediately. The site feels cinematic — it's the first thing people mention on sales calls.",
    name: "Sofía Reyes",
    role: "Creative Director, Aurum",
  },
];

export function Testimonials() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Heading block */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Testimonials
          </div>
          <BlurText
            text="Brands That Trust Us."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            Don't take our word for it. Here's what founders and creative directors say after working with us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="liquid-glass rounded-2xl p-6 flex flex-col gap-6">
              <p className="text-white/80 font-body font-light text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading italic text-white text-lg leading-tight">
                  {t.name}
                </span>
                <span className="text-white/50 font-body font-light text-xs">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
