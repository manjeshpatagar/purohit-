import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { detailedServices } from "@/lib/data";

export default function PujaServicesPage() {
  return (
    <>
      <section className="bg-orange-600 py-20 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-100">Puja Services</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Traditional Ritual Services For Every Sacred Occasion</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-orange-50">
            A warm, sectioned service page inspired by traditional purohit websites, presented in a more spacious and modern card-driven layout.
          </p>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container className="space-y-8">
          <SectionTitle
            eyebrow="Service Details"
            title="Popular Rituals Often Requested By Families"
            subtitle="Each content card includes an image and long-form description to create a complete service overview page."
          />
          {detailedServices.map((service) => (
            <article
              key={service.title}
              className="grid gap-8 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8"
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={640}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-stone-900">{service.title}</h2>
                <p className="mt-4 text-base leading-8 text-stone-600">{service.description}</p>
                <p className="mt-4 text-base leading-8 text-stone-600">
                  This section is intentionally styled like an informative service article so visitors can understand the meaning, timing, and value of each puja before they reach out. The layout is static, lightweight, and ready for future CMS integration if needed.
                </p>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="max-w-4xl">
          <SectionTitle
            eyebrow="Book A Service"
            title="Share Your Preferred Date And Ritual Type"
            subtitle="Booking form included at the bottom of the services page as requested."
            align="center"
          />
          <div className="mt-10">
            <BookingForm />
          </div>
        </Container>
      </section>
    </>
  );
}
