import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { imageLibrary } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-16">
        <Container className="max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={imageLibrary.aboutArticle}
              alt="About article"
              className="aspect-[16/7] h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="mt-10">
            <SectionTitle
              eyebrow="About Me"
              title="A Long-Form Introduction To Tradition, Service, And Family Guidance"
              subtitle="This page mirrors the article-like structure often seen on spiritual service websites while using modern spacing and better readability."
            />
            <div className="mt-8 space-y-6 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
              <p>
                This demo about page is written as a narrative introduction. It gives visitors confidence by sharing values, service approach, and the importance of conducting rituals with patience, accuracy, and empathy for every family situation.
              </p>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">Traditional Practice With Clear Communication</h2>
              <p>
                Many families want ceremonies performed correctly, but they also appreciate clear explanations, practical scheduling support, and a calm voice guiding them through the process. This section is designed to feel trustworthy rather than overly promotional.
              </p>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">What Families Usually Value</h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>Proper Bengali ritual sequence and mantra recitation.</li>
                <li>Flexible availability for homes, apartments, and event venues.</li>
                <li>Simple support around samagri planning and ceremony timing.</li>
                <li>Respectful guidance for both joyful and solemn occasions.</li>
              </ul>
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">Service Philosophy</h2>
              <p>
                The overall UI intentionally stays familiar to visitors who have used traditional Indian service websites before, but it removes clutter and improves flow. This balance makes the page easier to browse on mobile while keeping the devotional tone intact.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container className="max-w-4xl">
          <SectionTitle
            eyebrow="Enquiry"
            title="Book A Puja Or Ask For Guidance"
            subtitle="Booking form placed at the bottom of the article page."
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
