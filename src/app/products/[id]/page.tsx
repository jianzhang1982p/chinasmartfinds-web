import Link from "next/link";
import ProductCard from "@/components/ProductCard";

// Sample product data (will be replaced with API data)
const product = {
  id: "1",
  title: "Wireless Bluetooth Earbuds with Charging Case - Premium Sound Quality",
  description: `Experience premium sound quality with these wireless Bluetooth earbuds. 
  Featuring advanced noise cancellation technology, ergonomic design for all-day comfort, 
  and a portable charging case that provides up to 24 hours of playtime.
  
  Perfect for workouts, commuting, or everyday use. The IPX7 waterproof rating means 
  you don't have to worry about sweat or light rain.`,
  price: 29.99,
  originalPrice: 59.99,
  images: [
    "/placeholder-product.jpg",
    "/placeholder-product.jpg",
    "/placeholder-product.jpg",
    "/placeholder-product.jpg",
  ],
  rating: 4.5,
  reviewCount: 2847,
  badge: "discount" as const,
  source: "amazon" as const,
  affiliateLink: "#",
  features: [
    "Bluetooth 5.3 for stable connection",
    "Active Noise Cancellation (ANC)",
    "24-hour battery life with charging case",
    "IPX7 waterproof rating",
    "Touch controls for music and calls",
    "Compatible with iOS and Android",
  ],
  specifications: {
    "Bluetooth Version": "5.3",
    "Battery Life": "6 hours (earbuds) + 18 hours (case)",
    "Charging Time": "1.5 hours",
    "Waterproof Rating": "IPX7",
    "Driver Size": "10mm",
    "Weight": "4.5g per earbud",
  },
  category: "Electronics",
  inStock: true,
};

const relatedProducts = [
  {
    id: "2",
    title: "Smart Watch Fitness Tracker with Heart Rate Monitor",
    price: 45.99,
    originalPrice: 89.99,
    image: "/placeholder-product.jpg",
    rating: 4.3,
    reviewCount: 1523,
    badge: "hot" as const,
    source: "amazon" as const,
    affiliateLink: "#",
  },
  {
    id: "5",
    title: "USB-C Hub Multiport Adapter 7-in-1",
    price: 25.99,
    originalPrice: 49.99,
    image: "/placeholder-product.jpg",
    rating: 4.7,
    reviewCount: 3421,
    badge: "hot" as const,
    source: "amazon" as const,
    affiliateLink: "#",
  },
  {
    id: "6",
    title: "Wireless Phone Charger Stand 15W Fast Charging",
    price: 22.99,
    originalPrice: 39.99,
    image: "/placeholder-product.jpg",
    rating: 4.4,
    reviewCount: 1876,
    badge: "discount" as const,
    source: "amazon" as const,
    affiliateLink: "#",
  },
  {
    id: "3",
    title: "Portable LED Desk Lamp with USB Charging Port",
    price: 19.99,
    originalPrice: 35.99,
    image: "/placeholder-product.jpg",
    rating: 4.6,
    reviewCount: 892,
    badge: "new" as const,
    source: "temu" as const,
    affiliateLink: "#",
  },
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const sourceColors = {
    amazon: "bg-yellow-500",
    temu: "bg-orange-500",
    aliexpress: "bg-red-500",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary-red">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary-red">
          Products
        </Link>
        <span>/</span>
        <Link href={`/categories/${product.category.toLowerCase()}`} className="hover:text-primary-red">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.title.substring(0, 30)}...</span>
      </nav>

      {/* Product Main */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Images */}
        <div>
          <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary-red"
              >
                <img
                  src={image}
                  alt={`${product.title} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className={`${sourceColors[product.source]} text-white text-xs font-medium px-2 py-1 rounded`}>
              {product.source.charAt(0).toUpperCase() + product.source.slice(1)}
            </span>
            {product.badge && (
              <span className="badge-discount">-{discount}% OFF</span>
            )}
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
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
            <span className="text-gray-600 ml-2">
              {product.rating} ({product.reviewCount.toLocaleString()} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline space-x-3">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xl text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-green-600 font-medium">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Price verified on {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <p className="text-green-600 font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                In Stock
              </p>
            ) : (
              <p className="text-red-600 font-medium">Out of Stock</p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex space-x-4 mb-8">
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 text-center"
            >
              Buy on {product.source.charAt(0).toUpperCase() + product.source.slice(1)}
            </a>
            <button className="btn-outline">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-b border-gray-200 py-4 mb-8">
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="font-medium text-gray-900">Secure Payment</p>
                <p className="text-gray-500">Protected checkout</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Fast Shipping</p>
                <p className="text-gray-500">2-5 business days</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Easy Returns</p>
                <p className="text-gray-500">30-day policy</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Description & Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Description */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
          </div>
        </div>

        {/* Specifications */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <dl className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <dt className="text-gray-500">{key}</dt>
                  <dd className="font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600">
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. 
          If you make a purchase through these links, we may earn a commission at no 
          extra cost to you. We only recommend products we believe in.
        </p>
      </div>
    </div>
  );
}
