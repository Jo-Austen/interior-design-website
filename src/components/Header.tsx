import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-semibold text-xl hover:text-accent transition-colors">
          Interior Design Studio
        </Link>

        <div className="hidden md:block">
          <Link href="/contact" className="inline-flex rounded-md bg-accent px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-accent-hover">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
