import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <Section className="bg-neutral-50 py-20">
        <div className="grid gap-16 grid-cols-1 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col justify-center text-center md:text-left max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Contact
            </p>
            <h1 className="text-heading-1 text-neutral-900 mb-6 leading-tight sm:leading-snug">
              Start your project with us
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Reach out with your design brief, questions, or scheduling request. We’ll get back to you with a tailored response and next steps.
            </p>
          </div>

          <div className="w-full max-w-xl">
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
