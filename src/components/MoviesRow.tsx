import { BlurText } from "./BlurText";

const MOVIES = [
  { title: "Action Pack", src: "/movie_action.png" },
  { title: "Dynamic Force", src: "/movie_dynamic.png" },
  { title: "Sci-Fi Universe", src: "/movie_scifi.png" },
  { title: "Edge of Thriller", src: "/movie_thriller.png" },
  { title: "Action Pack", src: "/movie_action.png" },
  { title: "Dynamic Force", src: "/movie_dynamic.png" },
  { title: "Sci-Fi Universe", src: "/movie_scifi.png" },
];

export function MoviesRow() {
  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            On Demand
          </div>
          <BlurText
            text="Watch the Latest Movies & TV Shows"
            className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            50,000+ titles available instantly — no scheduling, no waiting, no limits.
          </p>
        </div>

        {/* Horizontal scroll row */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
          {MOVIES.map((movie, i) => (
            <div
              key={i}
              className="liquid-glass rounded-2xl overflow-hidden flex-shrink-0 w-40 md:w-52 cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={movie.src}
                  alt={movie.title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent) {
                      parent.style.height = "280px";
                      parent.style.background = "rgba(255,255,255,0.05)";
                    }
                  }}
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-white text-lg">▶</span>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-white/80 font-body text-xs font-medium truncate">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
