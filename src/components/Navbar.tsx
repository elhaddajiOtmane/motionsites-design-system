import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Channels", to: "/channels" },
  { label: "Pricing", to: "/pricing" },
  { label: "Support", to: "/support" },
];

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="liquid-glass rounded-full px-2 py-2 flex items-center gap-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 pl-2">
          <img
            src="/src/assets/logo-icon.png"
            alt=""
            className="h-6 w-6"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <span className="font-heading italic text-white text-base leading-none">
            MotionTV
          </span>
        </NavLink>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `font-body text-sm font-light px-3 py-1.5 rounded-full transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <NavLink
          to="/pricing"
          className="liquid-glass-strong rounded-full px-4 py-2 text-white font-body text-sm font-medium inline-flex items-center gap-1.5"
        >
          Start Streaming <ArrowUpRight size={14} />
        </NavLink>
      </div>
    </nav>
  );
}
