import { Section } from "@/components/Section";
import { SecondaryButton } from "@/components/SecondaryButton";

const services = [
  {
    title: "Residential Design",
    description: "Tailored interiors for homes, apartments, and personal retreats that balance beauty with comfort.",
  },
  {
    title: "Commercial Design",
    description: "Brand-forward spaces for offices, hospitality, and retail that leave a memorable impression.",
  },
  {
    title: "Design Consultation",
    description: "Expert guidance on concept, materials, lighting, and layout to bring clarity to your vision.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <Section className="bg-white py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">Services</p>
          <h1 className="text-heading-1 text-neutral-900 mb-6">Design services for every scale</h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            From full-service interior architecture to focused consulting, we offer a tailored service menu for modern living and hospitality.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm transition hover:shadow-lg">
              <h2 className="text-heading-3 text-neutral-900 mb-4">{service.title}</h2>
              <p className="text-body text-neutral-600 leading-relaxed mb-8">{service.description}</p>
              <SecondaryButton className="px-6 py-3">
                Learn More
              </SecondaryButton>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
