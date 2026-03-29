import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { SectionTitle } from "@/components/SectionTitle";
import { contactDetails, imageLibrary } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-orange-100 bg-brand.surface p-8 shadow-soft">
              <SectionTitle
                eyebrow="Contact"
                title="Reach Out For Ritual Bookings"
                subtitle="A contact information panel with all the essential details."
              />
              <div className="mt-8 space-y-4 text-base text-stone-700">
                <p><span className="font-semibold text-stone-900">Name:</span> {contactDetails.name}</p>
                <p><span className="font-semibold text-stone-900">Email:</span> {contactDetails.email}</p>
                <p><span className="font-semibold text-stone-900">Phone:</span> {contactDetails.phone}</p>
                <p><span className="font-semibold text-stone-900">Address:</span> {contactDetails.address}</p>
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-dashed border-orange-200 bg-white p-5">
                <img
                  src={imageLibrary.contactBackground}
                  alt="Temple background"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
            </div>
            <div>
              <SectionTitle
                eyebrow="Booking Form"
                title="Share Your Requirements"
                subtitle="This form is purely presentational and intentionally does not submit anywhere."
              />
              <div className="mt-8">
                <BookingForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <FAQ />
    </>
  );
}
