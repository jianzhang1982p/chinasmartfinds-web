import Link from "next/link";
import ProductCard from "@/components/ProductCard";

// Sample product data (will be replaced with API data)
const featuredProducts = [
  {
    id: "1",
    title: "Wireless Bluetooth Earbuds with Charging Case - Premium Sound Quality",
    price: 29.99,
    originalPrice: 59.99,
    image: "/placeholder-product.jpg",
    rating: 4.5,
    reviewCount: 2847,
    badge: "discount" as const,
    source: "amazon" as const,
    affiliateLink: "#",
  },
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
  {
    id: "4",
    title: "Kitchen Gadget Set - 10 Pieces Stainless Steel Tools",
    price: 34.99,
    originalPrice: 69.99,
    image: "/placeholder-product.jpg",
    rating: 4.4,
    reviewCount: 1247,
    badge: "discount" as const,
    source: "aliexpress" as const,
    affiliateLink: "#",
  },
];

const categories = [
  { name: "Electronics", icon: "📱", href: "/categories/electronics", count: 156 },
  { name: "Home & Living", icon: "🏠", href: "/categories/home-living", count: 203 },
  { name: "Beauty & Care", icon: "💄", href: "/categories/beauty", count: 89 },
  { name: "Fashion", icon: "👗", href: "/categories/fashion", count: 178 },
  { name: "Sports & Outdoors", icon: "⚽", href: "/categories/sports", count: 124 },
  { name: "Toys & Hobbies", icon: "🎮", href: "/categories/toys", count: 95 },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-red to-red-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Discover the Best{" "}
              <span className="text-primary-gold">Chinese Products</span>
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Hand-picked quality items from Amazon, Temu, and AliExpress. 
              Save time and money with our curated selections.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-secondary">
                Browse Products
              </Link>
              <Link href="/categories" className="bg-white text-primary-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Quality Verified</h3>
              <p className="text-gray-600">Every product is carefully selected based on reviews and ratings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Best Deals</h3>
              <p className="text-gray-600">We find the best prices across multiple platforms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Trusted Sources</h3>
              <p className="text-gray-600">Only from reputable sellers on major platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg hover:border-primary-red transition-all duration-300"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <Link href="/products" className="text-primary-red font-medium hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Never Miss a Great Deal</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get weekly updates on the best Chinese products, 
            exclusive deals, and shopping tips.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
