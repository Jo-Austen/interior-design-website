import { Section } from "@/components/Section";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export default function Home() {
  const isTemporaryLanding = true;

  return (
    <div>
      {isTemporaryLanding ? (
        <section className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-neutral-50 px-4 py-24 text-center">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Interior Design Studio
            </p>
            <h1 className="text-heading-1 text-neutral-900 mb-6">
              A refined interior design experience is returning soon.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              For inquiries and priority access, please use the contact button above.
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-neutral-50 via-white to-neutral-100 min-h-screen flex items-center py-20 px-4 sm:px-6">
          <div className="w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <h1 className="text-display text-neutral-900 mb-8 leading-tight sm:leading-snug max-w-3xl mx-auto lg:mx-0">
                    Transform Your Space Into<br />
                    <span className="text-accent">Something Extraordinary</span>
                  </h1>
                  <p className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    We create elegant, sophisticated interior designs that reflect your unique style and inspire confidence.
                    From residential to commercial spaces, we bring your vision to life with premium craftsmanship and attention to detail.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                    <PrimaryButton className="px-8 py-4 text-lg">
                      View Our Portfolio
                    </PrimaryButton>
                    <SecondaryButton className="px-8 py-4 text-lg">
                      Schedule Consultation
                    </SecondaryButton>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="h-[400px] lg:h-[500px] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl shadow-2xl flex items-center justify-center border border-neutral-200">
                      <div className="text-center">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-3xl lg:text-4xl">🏠</span>
                        </div>
                        <span className="text-neutral-500 font-medium">Hero Image Placeholder</span>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent/20 rounded-full"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Preview */}
          <Section className="bg-white">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="text-heading-1 text-neutral-900 mb-6">Our Services</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Comprehensive interior design solutions tailored to your needs and budget,
                delivered with exceptional craftsmanship and attention to detail.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-hover rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-3xl">🏠</span>
                </div>
                <h3 className="text-heading-3 text-neutral-900 mb-4 font-semibold">Residential Design</h3>
                <p className="text-body text-neutral-600 leading-relaxed">
                  Transform your home into a sanctuary that reflects your personality and lifestyle,
                  creating spaces that are both beautiful and functional.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-hover rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-heading-3 text-neutral-900 mb-4 font-semibold">Commercial Design</h3>
                <p className="text-body text-neutral-600 leading-relaxed">
                  Create inspiring workspaces that boost productivity and impress clients,
                  combining aesthetics with practical functionality.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-hover rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-heading-3 text-neutral-900 mb-4 font-semibold">Consultation</h3>
                <p className="text-body text-neutral-600 leading-relaxed">
                  Expert guidance to help you make informed design decisions,
                  ensuring your vision is realized with professional expertise.
                </p>
              </div>
            </div>
          </Section>

          {/* Featured Projects */}
          <Section className="bg-neutral-50">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="text-heading-1 text-neutral-900 mb-6">Featured Projects</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Explore our portfolio of stunning transformations that showcase our expertise
                in creating spaces that inspire and delight.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <span className="text-neutral-500 font-medium">Project {i} Image</span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-heading-3 text-neutral-900 mb-3 font-semibold">Modern Living Room</h3>
                    <p className="text-body text-neutral-600 mb-6 leading-relaxed">
                      A contemporary redesign that maximizes space and natural light,
                      creating a harmonious blend of form and function.
                    </p>
                    <SecondaryButton className="w-full py-3">
                      View Project
                    </SecondaryButton>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <PrimaryButton className="px-8 py-4 text-lg">
                View All Projects
              </PrimaryButton>
            </div>
          </Section>

          {/* About Preview */}
          <Section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-3xl">
                <h2 className="text-heading-1 text-neutral-900 mb-8">About Our Studio</h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  With over a decade of experience in interior design, we specialize in creating spaces
                  that are not only beautiful but also functional and sustainable. Our team combines
                  artistic vision with technical expertise to deliver exceptional results.
                </p>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  We believe that great design should enhance your life, not complicate it. That's why
                  we focus on understanding your needs and creating solutions that work for you,
                  every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-accent mb-1">10+</div>
                    <div className="text-sm text-neutral-600">Years Experience</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-accent mb-1">500+</div>
                    <div className="text-sm text-neutral-600">Projects Completed</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-accent mb-1">100%</div>
                    <div className="text-sm text-neutral-600">Client Satisfaction</div>
                  </div>
                </div>
                <div className="mt-8">
                  <PrimaryButton>
                    Learn More About Us
                  </PrimaryButton>
                </div>
              </div>
              <div className="relative">
                <div className="h-96 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl shadow-2xl flex items-center justify-center border border-neutral-200">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">👥</span>
                    </div>
                    <span className="text-neutral-500 font-medium">About Image Placeholder</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent/30 rounded-full"></div>
              </div>
            </div>
          </Section>

          {/* Contact CTA */}
          <Section className="bg-gradient-to-r from-accent to-accent-hover text-neutral-900 relative overflow-hidden py-24">
            <div className="text-center relative z-10 px-4 sm:px-6">
              <h2 className="text-heading-1 mb-6 text-neutral-900">Ready to Transform Your Space?</h2>
              <p className="text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-neutral-800">
                Let's discuss your vision and create something extraordinary together.
                Schedule a consultation today and take the first step toward your dream space.
              </p>
              <PrimaryButton className="bg-neutral-900 text-white hover:bg-neutral-800 px-10 py-5 text-lg shadow-xl">
                Get In Touch
              </PrimaryButton>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
            </div>
          </Section>
        </>
      )}
    </div>
  );
}
