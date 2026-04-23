import { NavLink } from "react-router-dom";
import { Tv } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Packages", to: "/packages" },
  { label: "Channels", to: "/channels" },
  { label: "Blog", to: "/blog" },
  { label: "Installation Guide", to: "/guide" },
  { label: "Reseller", to: "/reseller" },
  { label: "Contact Us", to: "/contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <Tv className="w-8 h-8 text-purple-500" />
        <span className="font-heading font-bold italic text-white text-2xl tracking-wide">
          Vai TV
        </span>
      </NavLink>

      {/* Nav links */}
      <ul className="hidden lg:flex items-center gap-6">
        {NAV_LINKS.map(({ label, to }) => (
          <li key={label}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `font-body text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
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
        to="/trial"
        className="hidden md:inline-flex bg-white text-black rounded-full px-6 py-2.5 font-body text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
      >
        Get a Trial
      </NavLink>
    </nav>
  );
}
