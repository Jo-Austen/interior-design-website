import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <Section className="bg-neutral-50 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 grid-cols-1 xl:grid-cols-2 xl:items-start">
          <div className="mx-auto flex max-w-6xl flex-col justify-center text-center md:text-left lg:mx-0 space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </p>
            <h1 className="text-heading-1 text-neutral-900 leading-tight sm:leading-snug">
              Start your project with us
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Reach out with your design brief, questions, or scheduling request. We’ll get back to you with a tailored response and next steps.
            </p>
          </div>

          <div className="w-full mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
