import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Section } from "@/components/Section";

export function CtaSection() {
  return (
    <Section className="relative overflow-hidden bg-neutral-950 py-24 text-white">
      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="text-heading-1 mb-6 text-white">Ready to Transform Your Space?</h2>
          <p className="mb-10 text-xl leading-relaxed text-white/72">
            Let&apos;s discuss your vision and create something extraordinary together. Schedule a consultation today and take the first step toward your dream space.
          </p>
          <PrimaryButton className="px-10 py-5 text-lg shadow-xl">
            Get In Touch
          </PrimaryButton>
        </div>
      </Container>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-white" />
        <div className="absolute right-10 bottom-10 h-32 w-32 rounded-full bg-white" />
        <div className="absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-white" />
      </div>
    </Section>
  );
}
