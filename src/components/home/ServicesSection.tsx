import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const services = [
  {
    description:
      "Transform your home into a sanctuary that reflects your personality and lifestyle, creating spaces that are both beautiful and functional.",
    icon: "🏠",
    title: "Residential Design",
  },
  {
    description:
      "Create inspiring workspaces that boost productivity and impress clients, combining aesthetics with practical functionality.",
    icon: "🏢",
    title: "Commercial Design",
  },
  {
    description:
      "Expert guidance to help you make informed design decisions, ensuring your vision is realized with professional expertise.",
    icon: "🎨",
    title: "Consultation",
  },
];

export function ServicesSection() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="text-heading-1 mb-6 text-neutral-900">Our Services</h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            Comprehensive interior design solutions tailored to your needs and budget, delivered with exceptional craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-hover shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-heading-3 mb-4 font-semibold text-neutral-900">{service.title}</h3>
              <p className="text-body leading-relaxed text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
