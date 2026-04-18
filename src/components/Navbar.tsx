import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = ["Services", "Work", "Pricing", "About"];

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="liquid-glass rounded-full px-2 py-2 flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 pl-2">
          <img
            src="/src/assets/logo-icon.png"
            alt=""
            className="h-6 w-6"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <span className="font-heading italic text-white text-base leading-none">
            Motionsites
          </span>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-white/60 hover:text-white font-body text-sm font-light px-3 py-1.5 rounded-full transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="liquid-glass-strong rounded-full px-4 py-2 text-white font-body text-sm font-medium inline-flex items-center gap-1.5">
          Get Started <ArrowUpRight size={14} />
        </button>
      </div>
    </nav>
  );
}
