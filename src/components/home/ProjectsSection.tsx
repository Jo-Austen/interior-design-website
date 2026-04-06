import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Section } from "@/components/Section";
import { SecondaryButton } from "@/components/SecondaryButton";

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-neutral-50">
      <Container>
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="text-heading-1 mb-6 text-neutral-900">Featured Projects</h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            Explore our portfolio of stunning transformations that showcase our expertise in creating spaces that inspire and delight.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <span className="font-medium text-neutral-500">Project {project} Image</span>
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              <div className="p-8">
                <h3 className="text-heading-3 mb-3 font-semibold text-neutral-900">Modern Living Room</h3>
                <p className="text-body mb-6 leading-relaxed text-neutral-600">
                  A contemporary redesign that maximizes space and natural light, creating a harmonious blend of form and function.
                </p>
                <SecondaryButton className="w-full py-3">View Project</SecondaryButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <PrimaryButton className="px-8 py-4 text-lg">View All Projects</PrimaryButton>
        </div>
      </Container>
    </Section>
  );
}
