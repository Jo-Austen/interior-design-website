import { Section } from "@/components/Section";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-display text-neutral-900 mb-6">
            Transform Your Space Into Something Extraordinary
          </h1>
          <p className="text-body text-neutral-600 mb-8 max-w-2xl mx-auto">
            We create elegant, sophisticated interior designs that reflect your unique style and inspire confidence.
            From residential to commercial spaces, we bring your vision to life with premium craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton>
              View Our Portfolio
            </PrimaryButton>
            <SecondaryButton>
              Schedule Consultation
            </SecondaryButton>
          </div>
        </div>
        {/* Hero Image Placeholder */}
        <div className="mt-12 h-96 bg-neutral-200 rounded-lg flex items-center justify-center">
          <span className="text-neutral-500">Hero Image Placeholder</span>
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-heading-1 text-neutral-900 mb-4">Our Services</h2>
          <p className="text-body text-neutral-600 max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to your needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-heading-3 text-neutral-900 mb-2">Residential Design</h3>
            <p className="text-body text-neutral-600">
              Transform your home into a sanctuary that reflects your personality and lifestyle.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-heading-3 text-neutral-900 mb-2">Commercial Design</h3>
            <p className="text-body text-neutral-600">
              Create inspiring workspaces that boost productivity and impress clients.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-heading-3 text-neutral-900 mb-2">Consultation</h3>
            <p className="text-body text-neutral-600">
              Expert guidance to help you make informed design decisions.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-neutral-50">
        <div className="text-center mb-12">
          <h2 className="text-heading-1 text-neutral-900 mb-4">Featured Projects</h2>
          <p className="text-body text-neutral-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations that showcase our expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-500">Project {i} Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-heading-3 text-neutral-900 mb-2">Modern Living Room</h3>
                <p className="text-body text-neutral-600 mb-4">
                  A contemporary redesign that maximizes space and natural light.
                </p>
                <SecondaryButton className="w-full">
                  View Project
                </SecondaryButton>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <PrimaryButton>
            View All Projects
          </PrimaryButton>
        </div>
      </Section>

      {/* About Preview */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-heading-1 text-neutral-900 mb-4">About Our Studio</h2>
            <p className="text-body text-neutral-600 mb-6">
              With over a decade of experience in interior design, we specialize in creating spaces
              that are not only beautiful but also functional and sustainable. Our team combines
              artistic vision with technical expertise to deliver exceptional results.
            </p>
            <p className="text-body text-neutral-600 mb-6">
              We believe that great design should enhance your life, not complicate it. That's why
              we focus on understanding your needs and creating solutions that work for you.
            </p>
            <PrimaryButton>
              Learn More About Us
            </PrimaryButton>
          </div>
          <div className="h-96 bg-neutral-200 rounded-lg flex items-center justify-center">
            <span className="text-neutral-500">About Image Placeholder</span>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-accent text-neutral-900">
        <div className="text-center">
          <h2 className="text-heading-1 mb-4">Ready to Transform Your Space?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together.
            Schedule a consultation today and take the first step toward your dream space.
          </p>
          <PrimaryButton className="bg-neutral-900 text-white hover:bg-neutral-800">
            Get In Touch
          </PrimaryButton>
        </div>
      </Section>
    </div>
  );
}
