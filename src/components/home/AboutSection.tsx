import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Section } from "@/components/Section";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Client Satisfaction", value: "100%" },
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-heading-1 mb-8 text-neutral-900">About Our Studio</h2>
            <p className="mb-6 text-lg leading-relaxed text-neutral-600">
              With over a decade of experience in interior design, we specialize in creating spaces that are not only beautiful but also functional and sustainable. Our team combines artistic vision with technical expertise to deliver exceptional results.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-neutral-600">
              We believe that great design should enhance your life, not complicate it. That&apos;s why we focus on understanding your needs and creating solutions that work for you, every step of the way.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="mb-1 text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <PrimaryButton>Learn More About Us</PrimaryButton>
            </div>
          </div>

          <div className="relative">
            <div className="flex h-96 items-center justify-center rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-200 shadow-2xl">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-3xl">👥</span>
                </div>
                <span className="font-medium text-neutral-500">About Image Placeholder</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-accent/20" />
            <div className="absolute -bottom-6 -left-6 h-8 w-8 rounded-full bg-accent/30" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
