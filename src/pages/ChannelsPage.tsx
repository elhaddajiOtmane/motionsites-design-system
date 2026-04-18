import { useState } from "react";
import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";

const CATEGORIES = [
  "All",
  "Sports",
  "Movies",
  "News",
  "Kids",
  "Entertainment",
  "International",
  "Documentaries",
];

const CHANNELS: { name: string; category: string; country: string }[] = [
  // Sports
  { name: "Sky Sports Main Event", category: "Sports", country: "UK" },
  { name: "ESPN HD", category: "Sports", country: "US" },
  { name: "beIN Sports 1", category: "Sports", country: "QA" },
  { name: "TNT Sports 1", category: "Sports", country: "UK" },
  { name: "Eurosport 1", category: "Sports", country: "EU" },
  { name: "NFL Network", category: "Sports", country: "US" },
  { name: "NBA TV", category: "Sports", country: "US" },
  { name: "Sky Sports F1", category: "Sports", country: "UK" },
  { name: "beIN Sports 2", category: "Sports", country: "QA" },
  { name: "Fox Sports 1", category: "Sports", country: "US" },
  { name: "DAZN 1", category: "Sports", country: "EU" },
  { name: "Canal+ Sport", category: "Sports", country: "FR" },

  // Movies
  { name: "Sky Cinema Premiere", category: "Movies", country: "UK" },
  { name: "HBO", category: "Movies", country: "US" },
  { name: "Cinemax", category: "Movies", country: "US" },
  { name: "Showtime", category: "Movies", country: "US" },
  { name: "MGM HD", category: "Movies", country: "US" },
  { name: "TCM", category: "Movies", country: "US" },
  { name: "Starz", category: "Movies", country: "US" },
  { name: "Canal+ Cinéma", category: "Movies", country: "FR" },
  { name: "FilmFour", category: "Movies", country: "UK" },
  { name: "Sony Movies", category: "Movies", country: "UK" },
  { name: "Cine+ Premier", category: "Movies", country: "FR" },
  { name: "Sky Cinema Action", category: "Movies", country: "UK" },

  // News
  { name: "CNN International", category: "News", country: "US" },
  { name: "BBC World News", category: "News", country: "UK" },
  { name: "Al Jazeera English", category: "News", country: "QA" },
  { name: "Sky News", category: "News", country: "UK" },
  { name: "France 24 EN", category: "News", country: "FR" },
  { name: "CNBC", category: "News", country: "US" },
  { name: "Bloomberg TV", category: "News", country: "US" },
  { name: "Euronews EN", category: "News", country: "EU" },
  { name: "RT International", category: "News", country: "RU" },
  { name: "DW English", category: "News", country: "DE" },
  { name: "i24 News", category: "News", country: "IL" },
  { name: "TRT World", category: "News", country: "TR" },

  // Kids
  { name: "Cartoon Network", category: "Kids", country: "US" },
  { name: "Disney Channel", category: "Kids", country: "US" },
  { name: "Nickelodeon", category: "Kids", country: "US" },
  { name: "Nick Jr.", category: "Kids", country: "US" },
  { name: "Boomerang", category: "Kids", country: "US" },
  { name: "CBeebies", category: "Kids", country: "UK" },
  { name: "CBBC", category: "Kids", country: "UK" },
  { name: "Disney Junior", category: "Kids", country: "US" },
  { name: "Baby TV", category: "Kids", country: "UK" },
  { name: "Piwi+", category: "Kids", country: "FR" },
  { name: "TiJi", category: "Kids", country: "FR" },
  { name: "Gulli", category: "Kids", country: "FR" },

  // Entertainment
  { name: "ITV HD", category: "Entertainment", country: "UK" },
  { name: "Channel 4 HD", category: "Entertainment", country: "UK" },
  { name: "E! Entertainment", category: "Entertainment", country: "US" },
  { name: "Bravo", category: "Entertainment", country: "US" },
  { name: "Comedy Central", category: "Entertainment", country: "US" },
  { name: "MTV", category: "Entertainment", country: "US" },
  { name: "VH1", category: "Entertainment", country: "US" },
  { name: "TLC", category: "Entertainment", country: "US" },
  { name: "AMC", category: "Entertainment", country: "US" },
  { name: "FX", category: "Entertainment", country: "US" },
  { name: "TNT", category: "Entertainment", country: "US" },
  { name: "TBS", category: "Entertainment", country: "US" },

  // International
  { name: "MBC 1", category: "International", country: "AE" },
  { name: "MBC Drama", category: "International", country: "AE" },
  { name: "OSN Movies", category: "International", country: "AE" },
  { name: "TF1", category: "International", country: "FR" },
  { name: "M6", category: "International", country: "FR" },
  { name: "ARD", category: "International", country: "DE" },
  { name: "ZDF", category: "International", country: "DE" },
  { name: "Rai 1", category: "International", country: "IT" },
  { name: "Antena 3", category: "International", country: "ES" },
  { name: "TVE Internacional", category: "International", country: "ES" },
  { name: "RTP Internacional", category: "International", country: "PT" },
  { name: "NHK World", category: "International", country: "JP" },

  // Documentaries
  { name: "National Geographic", category: "Documentaries", country: "US" },
  { name: "Discovery Channel", category: "Documentaries", country: "US" },
  { name: "History Channel", category: "Documentaries", country: "US" },
  { name: "Animal Planet", category: "Documentaries", country: "US" },
  { name: "BBC Earth", category: "Documentaries", country: "UK" },
  { name: "Smithsonian Channel", category: "Documentaries", country: "US" },
  { name: "Vice TV", category: "Documentaries", country: "US" },
  { name: "Nat Geo Wild", category: "Documentaries", country: "US" },
  { name: "Discovery Science", category: "Documentaries", country: "US" },
  { name: "Investigation Discovery", category: "Documentaries", country: "US" },
  { name: "Crime + Investigation", category: "Documentaries", country: "UK" },
  { name: "PBS Documentaries", category: "Documentaries", country: "US" },
];

const FLAG: Record<string, string> = {
  UK: "🇬🇧", US: "🇺🇸", QA: "🇶🇦", EU: "🇪🇺", FR: "🇫🇷", DE: "🇩🇪",
  AE: "🇦🇪", IT: "🇮🇹", ES: "🇪🇸", PT: "🇵🇹", JP: "🇯🇵", RU: "🇷🇺",
  TR: "🇹🇷", IL: "🇮🇱",
};

export function ChannelsPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = CHANNELS.filter((ch) => {
    const matchCat = active === "All" || ch.category === active;
    const matchQ = ch.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="bg-black min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Channel Catalog
          </div>
          <BlurText
            text="15,000+ Channels. Find Yours."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          />
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
            Sports, news, movies, kids, international — every category, every country. Browse a sample below.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center">
          <div className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-3 w-full max-w-md">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search channels…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent text-white/80 font-body text-sm font-light outline-none placeholder:text-white/30 w-full"
            />
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 font-body text-xs font-medium transition-all duration-200 ${
                active === cat
                  ? "liquid-glass-strong text-white"
                  : "liquid-glass text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Channel grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="liquid-glass rounded-2xl p-4 flex flex-col gap-2 cursor-pointer hover:brightness-125 transition-all duration-200"
            >
              <span className="text-xl">{FLAG[ch.country] ?? "🌐"}</span>
              <span className="text-white font-body text-xs font-medium leading-tight line-clamp-2">
                {ch.name}
              </span>
              <span className="text-white/40 font-body text-[10px] font-light">
                {ch.category}
              </span>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/40 font-body text-sm text-center py-16">
            No channels match your search.
          </p>
        )}

        {/* Disclaimer */}
        <p className="text-white/30 font-body text-xs text-center">
          Showing a sample of our catalog. Full access to 15,000+ channels is available with any plan.
        </p>
      </div>
    </div>
  );
}
