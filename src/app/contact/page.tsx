import Link from "next/link";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(15,23,42,0.88),rgba(23,37,84,0.72)),url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_28%)]" />
        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:pb-20 lg:pt-40">
          <div className="w-full max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/70">
              Contact Studio
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-white/95 sm:text-6xl lg:text-7xl">
              Let&apos;s shape a home that feels quietly exceptional.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/78 sm:text-xl">
              Share your vision, timeline, and the atmosphere you want to create.
              We&apos;ll guide you from first ideas to a beautifully resolved interior.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-neutral-950 transition-colors hover:bg-accent-hover"
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
        </div>
      </section>

      <Section className="bg-neutral-50 py-24">
        <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-start">
          <div className="space-y-10 text-left">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Contact
              </p>
              <h2 className="text-heading-1 leading-tight text-neutral-900 sm:leading-snug">
                Start your project with us
              </h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                Reach out with your design brief, questions, or scheduling request. We&apos;ll get back to you with a tailored response and next steps.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                  Response
                </p>
                <p className="mt-3 text-lg font-semibold text-neutral-900">
                  Within 2 business days
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                  Scope
                </p>
                <p className="mt-3 text-lg font-semibold text-neutral-900">
                  Residential and boutique commercial
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                  Process
                </p>
                <p className="mt-3 text-lg font-semibold text-neutral-900">
                  Consultation, concept, execution
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-neutral-900 px-8 py-10 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                What to Include
              </p>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-white/78">
                <li>Project type, location, and ideal timeline.</li>
                <li>Rooms or areas you want to transform first.</li>
                <li>Any style references, goals, or practical constraints.</li>
              </ul>
            </div>
          </div>

          <div
            id="contact-form"
            className="w-full rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10"
          >
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
