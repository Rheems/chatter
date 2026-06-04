"use client";

import Link from "next/link";
import {
  Sun,
  Moon,
  PenLine,
  Menu,
  X,
  LogOut,
  User as UserIcon,
  LayoutDashboard,
} from "lucide-react";
import { useTheme } from "@/app/providers";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { signOut } from "@/lib/auth/actions";
import type { User } from "@supabase/supabase-js";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    // Get current user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const userInitial = user?.email?.charAt(0).toUpperCase() ?? "U";
  const userEmail = user?.email ?? "";

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

          {user ? (
            <>
              {/* Write Button */}
              <Link
                href="/posts/new"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA6C0A] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25"
              >
                <PenLine className="h-4 w-4" />
                Write
              </Link>

              {/* User Avatar Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="h-9 w-9 rounded-full bg-[#F97316] flex items-center justify-center text-sm font-bold text-white hover:bg-[#EA6C0A] transition-colors"
                >
                  {userInitial}
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-[#0F2B5B] shadow-xl shadow-black/20 overflow-hidden">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="text-xs text-white/50">Signed in as</p>
                      <p className="text-sm font-semibold text-white truncate">
                        {userEmail}
                      </p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <UserIcon className="h-4 w-4" />
                        My Profile
                      </Link>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Link>
                    </div>

                    {/* Sign Out */}
                    <div className="border-t border-white/10 py-2">
                      <form action={signOut}>
                        <button
                          type="submit"
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/10 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
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
          <div className="pt-3 border-t border-white/10 space-y-2">
            {user ? (
              <>
                <p className="text-xs text-white/40 px-1">
                  Signed in as {userEmail}
                </p>
                <Link
                  href="/posts/new"
                  className="block text-center py-2 rounded-full bg-[#F97316] text-white text-sm font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Write
                </Link>
                <form action={signOut}>
                  <button
                    type="submit"
                    className="w-full text-center py-2 text-sm text-red-400"
                  >
                    Sign Out
                  </button>
                </form>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="flex-1 text-center py-2 text-sm font-medium text-white/80"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/posts/new"
                  className="flex-1 text-center py-2 rounded-full bg-[#F97316] text-white text-sm font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Write
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
