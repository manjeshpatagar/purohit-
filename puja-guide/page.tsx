import { BlogCard } from "@/components/BlogCard";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { blogs } from "@/lib/data";

export default function PujaGuidePage() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionTitle
          eyebrow="Puja Guide"
          title="Helpful Articles For Common Ritual Questions"
          subtitle="A blog-style guide page with clean cards, imagery, shadow depth, and a three-column responsive layout."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
      </Container>
    </section>
  );
}
