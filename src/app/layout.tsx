import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interior Design Studio",
  description: "Premium interior design services showcasing elegant portfolios and consultation expertise.",
  keywords: ["interior design", "home decor", "consultation", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Header Placeholder */}
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="font-semibold text-xl">Interior Design Studio</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Home</a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Portfolio</a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">About</a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer Placeholder */}
        <footer className="border-t border-neutral-200 bg-neutral-50">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-sm text-neutral-600">
              © 2024 Interior Design Studio. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
