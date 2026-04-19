import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    icon: "📱",
    href: "/categories/electronics",
    description: "Gadgets, accessories, and tech essentials",
    productCount: 156,
    subcategories: ["Audio", "Phone Accessories", "Computer Accessories", "Smart Home", "Wearables"],
    featured: true,
  },
  {
    name: "Home & Living",
    icon: "🏠",
    href: "/categories/home-living",
    description: "Everything for a better home",
    productCount: 203,
    subcategories: ["Kitchen", "Bedding", "Storage", "Decor", "Lighting"],
    featured: true,
  },
  {
    name: "Beauty & Personal Care",
    icon: "💄",
    href: "/categories/beauty",
    description: "Skincare, makeup, and grooming",
    productCount: 89,
    subcategories: ["Skincare", "Makeup", "Hair Care", "Tools", "Men's Grooming"],
    featured: true,
  },
  {
    name: "Fashion & Accessories",
    icon: "👗",
    href: "/categories/fashion",
    description: "Style essentials and accessories",
    productCount: 178,
    subcategories: ["Clothing", "Bags", "Jewelry", "Watches", "Sunglasses"],
    featured: true,
  },
  {
    name: "Sports & Outdoors",
    icon: "⚽",
    href: "/categories/sports",
    description: "Gear for active lifestyle",
    productCount: 124,
    subcategories: ["Fitness", "Camping", "Cycling", "Water Sports", "Team Sports"],
    featured: false,
  },
  {
    name: "Toys & Hobbies",
    icon: "🎮",
    href: "/categories/toys",
    description: "Fun for all ages",
    productCount: 95,
    subcategories: ["Educational", "RC Toys", "Puzzles", "Collectibles", "Arts & Crafts"],
    featured: false,
  },
  {
    name: "Pet Supplies",
    icon: "🐾",
    href: "/categories/pets",
    description: "Spoil your furry friends",
    productCount: 67,
    subcategories: ["Dog", "Cat", "Small Animals", "Birds", "Fish"],
    featured: false,
  },
  {
    name: "Automotive",
    icon: "🚗",
    href: "/categories/automotive",
    description: "Car accessories and tools",
    productCount: 82,
    subcategories: ["Interior", "Exterior", "Tools", "Electronics", "Care & Cleaning"],
    featured: false,
  },
  {
    name: "Office Supplies",
    icon: "📝",
    href: "/categories/office",
    description: "Productivity essentials",
    productCount: 54,
    subcategories: ["Stationery", "Desk Organization", "Electronics", "Storage", "Art Supplies"],
    featured: false,
  },
  {
    name: "Baby & Kids",
    icon: "👶",
    href: "/categories/baby",
    description: "For the little ones",
    productCount: 91,
    subcategories: ["Feeding", "Clothing", "Toys", "Safety", "Nursery"],
    featured: false,
  },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Browse Categories</h1>
        <p className="text-xl text-gray-600">
          Find the perfect products across {categories.length}+ categories
        </p>
      </div>

      {/* Featured Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.filter((c) => c.featured).map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-red transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-red/10 to-primary-gold/10 flex items-center justify-center">
                <span className="text-6xl">{category.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-red transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.productCount} products
                  </span>
                  <span className="text-primary-red font-medium text-sm">
                    Shop Now →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-primary-red transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{category.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-red transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.productCount} products
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <span
                          key={sub}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{category.subcategories.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-primary-red to-red-700 text-white rounded-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="mb-6 text-red-100">
            Let us know what products you'd like to see, and we'll add them to our 
            research list.
          </p>
          <Link href="/contact" className="bg-white text-primary-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Request a Category
          </Link>
        </div>
      </div>
    </div>
  );
}
