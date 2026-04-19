import ProductCard from "@/components/ProductCard";

// Sample product data (will be replaced with API data)
const allProducts = [
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
    id: "7",
    title: "Mini Portable Blender for Smoothies and Shakes",
    price: 28.99,
    originalPrice: 55.99,
    image: "/placeholder-product.jpg",
    rating: 4.5,
    reviewCount: 2103,
    badge: "new" as const,
    source: "temu" as const,
    affiliateLink: "#",
  },
  {
    id: "8",
    title: "LED Strip Lights 16.4ft RGB Color Changing with Remote",
    price: 15.99,
    originalPrice: 29.99,
    image: "/placeholder-product.jpg",
    rating: 4.3,
    reviewCount: 5672,
    badge: "discount" as const,
    source: "aliexpress" as const,
    affiliateLink: "#",
  },
];

const categories = [
  "All Categories",
  "Electronics",
  "Home & Living",
  "Beauty & Care",
  "Fashion",
  "Sports & Outdoors",
  "Toys & Hobbies",
];

const sources = ["All Sources", "Amazon", "Temu", "AliExpress"];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-gray-600">
          Discover {allProducts.length}+ hand-picked Chinese products with great value
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none bg-white">
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Source Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Source
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none bg-white">
              {sources.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Range & Sort */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none bg-white">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{allProducts.length}</span> products
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 bg-primary-red text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-12 space-x-2">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
          Previous
        </button>
        <button className="px-4 py-2 border border-primary-red bg-primary-red text-white rounded-lg">
          1
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          2
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          3
        </button>
        <span className="text-gray-500">...</span>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          10
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
}
