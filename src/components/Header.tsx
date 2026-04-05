"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 border-b border-slate-200/40 shadow-md shadow-slate-300/20 backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className={`text-lg font-semibold transition-colors duration-300 ${
            isScrolled ? "text-slate-900 hover:text-slate-700" : "text-white hover:text-slate-100"
          }`}
        >
          Interior Design Studio
        </Link>

        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10 text-sm font-medium">
            <li>
              <Link
                href="/#about"
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-slate-900 hover:text-slate-700" : "text-white hover:text-slate-100"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-slate-900 hover:text-slate-700" : "text-white hover:text-slate-100"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-slate-900 hover:text-slate-700" : "text-white hover:text-slate-100"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-slate-900 hover:text-slate-700" : "text-white hover:text-slate-100"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition duration-300 hover:bg-emerald-400"
          >
            Contact
          </Link>
          <button
            type="button"
            className={`rounded-full border px-3 py-2 text-sm font-medium transition duration-300 ${
              isScrolled
                ? "border-slate-300 bg-white/60 text-slate-900 hover:bg-white/80"
                : "border-white/25 bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
