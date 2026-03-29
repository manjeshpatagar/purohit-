import { AboutSection } from "@/components/AboutSection";
import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { FeatureCards } from "@/components/FeatureCards";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import { areas, imageLibrary, trustLogos } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />

      <AboutSection
        title="Guided Bengali Rituals For Homes And Families"
        subtitle="A calm and reassuring approach for every sacred occasion."
        body="This website demo is designed around the familiar layout of a Bengali purohit service portal, refreshed with cleaner spacing, strong typography, and responsive sections. Families can quickly understand the rituals offered, the service coverage, and how to make contact for bookings."
        image={imageLibrary.about}
        imageAlt="About the purohit"
        buttonLabel="About Me"
        buttonHref="/about"
      />

      <section className="bg-white py-16">
        <Container>
          <SectionTitle
            eyebrow="Trusted Platforms"
            title="Recognized Across Popular Service Channels"
            subtitle="A familiar trust row that reflects how local service websites often display credibility."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-[1.5rem] border border-orange-100 bg-brand.surface px-4 py-6 text-xl font-semibold text-stone-700 shadow-md sm:px-6 sm:py-8 sm:text-2xl"
              >
                {logo}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Quick Booking"
                title="Share Your Ceremony Details"
                subtitle="A clean inquiry form section modeled after service-driven landing pages. This is UI only and intentionally has no submission logic."
              />
            </div>
            <BookingForm />
          </div>
        </Container>
      </section>

      <ServicesSection />

      <AboutSection
        title="A Traditional Service Website Feel, Refined For Today"
        subtitle="Short introduction section with image and concise supporting copy."
        body="The visual direction uses saffron, amber, and warm stone tones to retain the spiritual-service identity while improving readability and responsiveness. The structure stays familiar, but the interface feels more polished and modern."
        image={imageLibrary.aboutShort}
        imageAlt="Short about"
        reverse
      />

      <section className="bg-white py-16">
        <Container>
          <SectionTitle
            eyebrow="Areas"
            title="Areas We Serve"
            subtitle="Coverage cards for major Bangalore neighborhoods, displayed in a clean responsive grid."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-orange-100 bg-brand.surface px-4 py-4 text-center text-sm font-medium text-stone-700 shadow-md sm:px-5 sm:py-5 sm:text-base"
              >
                {area}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Gallery />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
