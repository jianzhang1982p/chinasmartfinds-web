import Link from "next/link";
import { getAllReviews } from "@/data/reviews";

export const metadata = {
  title: "Product Reviews - ChinaSmartFinds",
  description: "Honest, in-depth reviews of the best Chinese products on Amazon, Temu, and AliExpress."
};

export default function ReviewsPage() {
  const reviews = getAllReviews();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Product Reviews</h1>
        <p className="text-gray-600 text-lg">
          Honest, in-depth reviews of the best Chinese products. 
          We test so you don&apos;t have to.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <Link
            key={review.slug}
            href={`/reviews/${review.slug}`}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Category Badge */}
            <div className="px-6 pt-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full capitalize">
                {review.category.replace("-", " ")}
              </span>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <h2 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors">
                {review.title}
              </h2>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {review.excerpt}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="font-medium">{review.rating}</span>
                  <span className="text-gray-400 text-sm ml-1">/ 5</span>
                </div>
                <span className="text-primary font-semibold">{review.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <div className="bg-neutral rounded-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Want More Reviews?</h2>
          <p className="text-gray-600 mb-6">
            We&apos;re constantly testing new products. Subscribe to get notified 
            when new reviews are published.
          </p>
          <Link href="/" className="btn-primary inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
