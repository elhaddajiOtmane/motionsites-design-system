import { motion } from "framer-motion";
import { Tv, PlayCircle, Video, MonitorPlay, Film } from "lucide-react";

const POSTERS = [
  { id: 1, img: "/poster_action_1776487911427.png", provider: <Film size={40} /> },
  { id: 2, img: "/poster_fantasy_1776487877529.png", provider: <Video size={40} /> },
  { id: 3, img: "/poster_scifi_1776487896727.png", provider: <Tv size={40} /> },
  { id: 4, img: "/poster_action_1776487911427.png", provider: <PlayCircle size={40} /> },
  { id: 5, img: "/poster_fantasy_1776487877529.png", provider: <MonitorPlay size={40} /> },
];

export function MoviesRow() {
  return (
    <section className="pb-20 relative z-20">
      {/* Logos Strip */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          <PlayCircle size={48} />
          <Film size={48} />
          <Tv size={48} className="text-yellow-500" />
          <Video size={48} className="text-green-500" />
          <Tv size={48} className="text-red-600" />
          <MonitorPlay size={48} className="text-blue-500" />
          <Film size={48} />
        </div>
      </div>

      {/* Posters Grid Map */}
      <div className="w-full flex overflow-hidden">
        {POSTERS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex-1 group cursor-pointer overflow-hidden aspect-[2/3] max-w-[20%]"
          >
            <img
              src={item.img}
              alt="Movie Poster"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Dark overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
            
            {/* Provider Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
              {item.provider}
            </div>
            
            {/* Hover overlay border */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-purple-500/50 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
