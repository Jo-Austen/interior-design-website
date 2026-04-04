import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <Section className="bg-neutral-50 py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="mx-auto flex w-full max-w-3xl flex-col justify-center text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Contact
            </p>
            <h1 className="text-heading-1 text-neutral-900 mb-6 leading-tight sm:leading-snug">
              Start your project with us
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 leading-relaxed">
              Reach out with your design brief, questions, or scheduling request. We’ll get back to you with a tailored response and next steps.
            </p>
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
