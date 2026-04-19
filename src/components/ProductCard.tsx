"use client";

import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: "new" | "hot" | "discount";
  source: "amazon" | "temu" | "aliexpress";
  affiliateLink: string;
}

export default function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  badge,
  source,
  affiliateLink,
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const sourceColors = {
    amazon: "bg-yellow-500",
    temu: "bg-orange-500",
    aliexpress: "bg-red-500",
  };

  return (
    <Link href={`/products/${id}`} className="product-card group">
      {/* Image */}
      <div className="relative">
        <img
          src={image || "/placeholder-product.jpg"}
          alt={title}
          className="product-card-image"
        />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2">
            {badge === "new" && <span className="badge-new">NEW</span>}
            {badge === "hot" && <span className="badge-hot">HOT</span>}
            {badge === "discount" && (
              <span className="badge-discount">-{discount}%</span>
            )}
          </div>
        )}

        {/* Source Badge */}
        <div className="absolute top-2 right-2">
          <span className={`${sourceColors[source]} text-white text-xs font-medium px-2 py-1 rounded`}>
            {source.charAt(0).toUpperCase() + source.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-red transition-colors">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(affiliateLink, "_blank");
            }}
            className="btn-primary text-sm py-2 px-4"
          >
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
}
