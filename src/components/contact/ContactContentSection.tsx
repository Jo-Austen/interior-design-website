import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const details = [
  {
    label: "Response",
    value: "Within 2 business days",
  },
  {
    label: "Scope",
    value: "Residential and boutique commercial",
  },
  {
    label: "Process",
    value: "Consultation, concept, execution",
  },
];

const checklist = [
  "Project type, location, and ideal timeline.",
  "Rooms or areas you want to transform first.",
  "Any style references, goals, or practical constraints.",
];

export function ContactContentSection() {
  return (
    <Section className="bg-neutral-50 py-24">
      <Container>
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
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                    {detail.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-neutral-900">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] bg-neutral-900 px-8 py-10 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                What to Include
              </p>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-white/78">
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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
      </Container>
    </Section>
  );
}
