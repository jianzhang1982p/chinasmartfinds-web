import Link from "next/link";
import { notFound } from "next/navigation";
import { getReviewBySlug, getAllReviews } from "@/data/reviews";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const reviews = getAllReviews();
  return reviews.map((review) => ({
    slug: review.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const review = getReviewBySlug(params.slug);
  if (!review) {
    return { title: "Review Not Found" };
  }
  return {
    title: `${review.title} - ChinaSmartFinds`,
    description: review.excerpt
  };
}

export default function ReviewPage({ params }: PageProps) {
  const review = getReviewBySlug(params.slug);
  
  if (!review) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/reviews" className="hover:text-primary">Reviews</Link>
        <span>/</span>
        <span className="text-gray-900 capitalize">{review.category.replace("-", " ")}</span>
      </nav>

      {/* Header */}
      <header className="max-w-3xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full capitalize mb-4">
          {review.category.replace("-", " ")}
        </span>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {review.title}
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          {review.excerpt}
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap items-center gap-6 p-6 bg-neutral rounded-xl">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary mr-2">{review.rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(review.rating) ? "text-yellow-500" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="h-8 w-px bg-gray-300"></div>
          <div>
            <span className="text-sm text-gray-500">Price</span>
            <p className="text-xl font-semibold">{review.price}</p>
          </div>
          <div className="h-8 w-px bg-gray-300"></div>
          <div>
            <span className="text-sm text-gray-500">Published</span>
            <p className="text-lg">{review.publishedAt}</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        {/* Affiliate Disclosure */}
        <div className="bg-gray-50 border-l-4 border-primary p-4 mb-8">
          <p className="text-sm text-gray-600">
            <strong>Disclosure:</strong> This post contains affiliate links. 
            We may earn a commission if you make a purchase through these links, 
            at no additional cost to you.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: review.content.replace(/\n\n/g, "</p><p>") }} />
        </div>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {review.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Specifications */}
        {Object.keys(review.specifications).length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Specifications</h2>
            <div className="bg-neutral rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(review.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b last:border-b-0">
                      <td className="px-6 py-4 font-medium text-gray-600 w-1/3">{key}</td>
                      <td className="px-6 py-4">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Pros & Cons */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Pros</h3>
              <ul className="space-y-2">
                {review.pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Cons</h3>
              <ul className="space-y-2">
                {review.cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <a
            href={review.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Check Price on Amazon
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Free shipping available • 30-day return policy
          </p>
        </section>
      </div>

      {/* Related Reviews */}
      <section className="mt-16 pt-12 border-t">
        <h2 className="text-2xl font-semibold mb-8">More Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getAllReviews()
            .filter(r => r.slug !== review.slug)
            .slice(0, 3)
            .map((r) => (
              <Link
                key={r.slug}
                href={`/reviews/${r.slug}`}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all"
              >
                <span className="text-xs text-primary font-medium capitalize">
                  {r.category.replace("-", " ")}
                </span>
                <h3 className="text-lg font-semibold mt-2 line-clamp-2">
                  {r.title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-yellow-500">★ {r.rating}</span>
                  <span className="text-primary font-semibold">{r.price}</span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </article>
  );
}
