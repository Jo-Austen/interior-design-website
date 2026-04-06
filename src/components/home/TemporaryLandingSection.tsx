import { Container } from "@/components/Container";

export function TemporaryLandingSection() {
  return (
    <section className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center bg-neutral-50 py-24 text-center">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Interior Design Studio
          </p>
          <h1 className="text-heading-1 mb-6 text-neutral-900">
            A refined interior design experience is returning soon.
          </h1>
          <p className="text-lg leading-relaxed text-neutral-600">
            For inquiries and priority access, please use the contact button above.
          </p>
        </div>
      </Container>
    </section>
  );
}
