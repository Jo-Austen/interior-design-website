"use client";

import Link from "next/link";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-semibold text-xl hover:text-accent transition-colors">
          Interior Design Studio
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-sm font-medium hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="inline-flex rounded-md bg-accent px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-accent-hover">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="md:hidden p-2"
        >
          <span className="sr-only">Open menu</span>
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className="block w-full h-0.5 bg-foreground mb-1"></span>
            <span className="block w-full h-0.5 bg-foreground mb-1"></span>
            <span className="block w-full h-0.5 bg-foreground"></span>
          </div>
        </button>
      </div>

      <div className={menuOpen ? "md:hidden border-t border-neutral-200" : "md:hidden hidden border-t border-neutral-200"}>
        <nav className="container mx-auto px-4 py-4 space-y-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block text-sm font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)} className="block text-sm font-medium hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="block text-sm font-medium hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-sm font-medium hover:text-accent transition-colors">
            Contact
          </Link>
          <div className="pt-4">
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block rounded-2xl bg-accent px-6 py-3 text-center text-sm font-medium text-neutral-900 hover:bg-accent-hover transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}