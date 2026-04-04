import { Section } from "@/components/Section";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export default function AboutPage() {
  return (
    <div>
      <Section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">About</p>
          <h1 className="text-heading-1 text-neutral-900 mb-6">Crafting premium interiors with purpose</h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We blend thoughtful design, refined materials, and expert planning to create spaces that feel both timeless and deeply personal.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-3 text-neutral-900 mb-3">Our Philosophy</h2>
              <p className="text-body text-neutral-600 leading-relaxed">
                Every project begins with listening. We translate your lifestyle, goals, and aesthetic into interiors that are elegant, functional, and uniquely yours.
              </p>
            </div>
            <div>
              <h2 className="text-heading-3 text-neutral-900 mb-3">Our Process</h2>
              <p className="text-body text-neutral-600 leading-relaxed">
                From concept to completion, we guide each step with careful curation, responsive collaboration, and a commitment to high-quality execution.
              </p>
            </div>
            <div>
              <h2 className="text-heading-3 text-neutral-900 mb-3">Our Promise</h2>
              <p className="text-body text-neutral-600 leading-relaxed">
                Premium design should feel effortless. We create spaces that are beautiful, calm, and practical for everyday living.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl border border-neutral-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-heading-3 text-neutral-900 mb-4">Trusted by discerning clients</h3>
                <p className="text-body text-neutral-600 leading-relaxed">
                  We partner with homeowners, developers, and brands who expect exceptional design, thoughtful detailing, and a seamless experience.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-neutral-50 p-6">
                  <div className="text-4xl font-bold text-accent">10+</div>
                  <p className="text-sm text-neutral-600 mt-2">Years in design</p>
                </div>
                <div className="rounded-3xl bg-neutral-50 p-6">
                  <div className="text-4xl font-bold text-accent">500+</div>
                  <p className="text-sm text-neutral-600 mt-2">Projects completed</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <PrimaryButton className="w-full sm:w-auto px-8 py-4 text-lg">
                  Learn More
                </PrimaryButton>
                <SecondaryButton className="w-full sm:w-auto px-8 py-4 text-lg">
                  Our Story
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
