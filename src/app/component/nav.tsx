"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0a0f24] text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-wide"
        >
          <Link href="/">
            Prasoon<span className="text-blue-500">.</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0a0f24] border-t border-blue-900"
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 hover:bg-blue-600"
            >
              {item}
            </Link>
          ))}
          
        </motion.div>
      )}
    </nav>
  );
}
