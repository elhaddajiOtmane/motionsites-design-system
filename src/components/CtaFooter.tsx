import { NavLink } from "react-router-dom";
import { Youtube, Twitter, Instagram, Facebook } from "lucide-react";

export function CtaFooter() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Social Icons */}
        <div className="flex items-center gap-4 text-gray-500">
          <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <NavLink to="/" className="hover:text-white">Home</NavLink>
          <NavLink to="/delivery" className="hover:text-white">Delivery Policy</NavLink>
          <NavLink to="/terms" className="hover:text-white">Terms of Service</NavLink>
          <NavLink to="/privacy" className="hover:text-white">Privacy Policy</NavLink>
          <NavLink to="/contact" className="hover:text-white">Contact Us</NavLink>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-600">
          Copyright © 2026 Vai TV
        </div>

      </div>
    </footer>
  );
}
