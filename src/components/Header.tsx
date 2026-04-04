import Link from "next/link";
import { PrimaryButton } from "./PrimaryButton";

export function Header() {
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
          <Link href="/portfolio" className="text-sm font-medium hover:text-accent transition-colors">
            Portfolio
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
          <PrimaryButton>
            Get Quote
          </PrimaryButton>
        </div>

        {/* Mobile menu button - placeholder for future implementation */}
        <button className="md:hidden p-2">
          <span className="sr-only">Open menu</span>
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className="block w-full h-0.5 bg-foreground mb-1"></span>
            <span className="block w-full h-0.5 bg-foreground mb-1"></span>
            <span className="block w-full h-0.5 bg-foreground"></span>
          </div>
        </button>
      </div>

      {/* Mobile navigation - hidden by default, can be toggled later */}
      <div className="md:hidden hidden border-t border-neutral-200">
        <nav className="container mx-auto px-4 py-4 space-y-4">
          <Link href="/" className="block text-sm font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/portfolio" className="block text-sm font-medium hover:text-accent transition-colors">
            Portfolio
          </Link>
          <Link href="/services" className="block text-sm font-medium hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="/about" className="block text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/contact" className="block text-sm font-medium hover:text-accent transition-colors">
            Contact
          </Link>
          <div className="pt-4">
            <PrimaryButton className="w-full">
              Get Quote
            </PrimaryButton>
          </div>
        </nav>
      </div>
    </header>
  );
}