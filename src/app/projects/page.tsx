import { Section } from "@/components/Section";
import { SecondaryButton } from "@/components/SecondaryButton";

const projects = [
  { title: "Modern Living Room", type: "Residential" },
  { title: "Boutique Lobby", type: "Commercial" },
  { title: "Cozy Bedroom Suite", type: "Residential" },
];

export default function ProjectsPage() {
  return (
    <div>
      <Section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl text-center px-4 sm:px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">Projects</p>
          <h1 className="text-heading-1 text-neutral-900 mb-6">Selected work</h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            A curated collection of recent interior design projects that demonstrate our refined aesthetic and thoughtful execution.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="rounded-3xl bg-white p-8 shadow-lg border border-neutral-200">
              <div className="h-56 rounded-3xl bg-neutral-100 mb-6 flex items-center justify-center">
                <span className="text-neutral-500">{project.title} Image</span>
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-3">{project.type}</p>
              <h2 className="text-heading-3 text-neutral-900 mb-4">{project.title}</h2>
              <SecondaryButton className="px-6 py-3">
                View Details
              </SecondaryButton>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
