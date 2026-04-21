import Link from "next/link";
import { primaryButtonClassName } from "@/components/buttonStyles";
import { Container } from "@/components/Container";

export function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(15,23,42,0.88),rgba(23,37,84,0.72)),url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(70,97,204,0.16),transparent_28%)]" />

      <Container className="relative flex min-h-[72vh] items-end pb-16 pt-32 lg:pb-20 lg:pt-40">
        <div className="w-full max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/70">
            Contact Studio
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-white/95 sm:text-6xl lg:text-7xl">
            Let&apos;s shape a home that feels quietly exceptional.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/78 sm:text-xl">
            Share your vision, timeline, and the atmosphere you want to create. We&apos;ll guide you from first ideas to a beautifully resolved interior.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact-form"
              className={primaryButtonClassName("px-8 py-4 text-base")}
            >
              Start Your Inquiry
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
