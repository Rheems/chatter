"use client";

import Link from "next/link";
import { Sun, Moon, PenLine, Menu, X } from "lucide-react";
import { useTheme } from "@/app/providers";
import { useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F2B5B] text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="text-[#F97316]">●</span>
          Chatter
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Feed", "Browse", "Discover"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Sign In */}
          <Link
            href="/login"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors px-4 py-2"
          >
            Sign In
          </Link>

          {/* Write Button */}
          <Link
            href="/posts/new"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA6C0A] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <PenLine className="h-4 w-4" />
            Write
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0F2B5B] px-4 py-4 space-y-3">
          {["Feed", "Browse", "Discover"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block text-sm font-medium text-white/70 hover:text-white py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center gap-3">
            <Link
              href="/login"
              className="flex-1 text-center py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/posts/new"
              className="flex-1 text-center py-2 rounded-full bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA6C0A] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Write
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
