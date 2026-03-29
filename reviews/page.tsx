import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionTitle } from "@/components/SectionTitle";
import { reviews } from "@/lib/data";

export default function ReviewsPage() {
  return (
    <section className="bg-gray-50 py-16">
      <Container className="max-w-5xl">
        <SectionTitle
          eyebrow="Reviews"
          title="What Families Say After Their Ceremony"
          subtitle="A stacked review layout with visible ratings and a clear action for leaving a review."
          align="center"
        />
        <div className="mt-10 space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact">Leave a Review</Button>
        </div>
      </Container>
    </section>
  );
}
