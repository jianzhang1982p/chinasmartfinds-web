import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Scheme C (Combination Mark) */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-final/logo-c-combination.svg"
              alt="ChinaSmartFinds - Curated Chinese Goods"
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-red transition-colors font-medium">
              Home
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary-red transition-colors font-medium">
              Categories
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary-red transition-colors font-medium">
              All Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-red transition-colors font-medium">
              About
            </Link>
          </nav>

          {/* Search & CTA */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="btn-primary text-sm py-2 px-4">
              Subscribe
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden pb-4">
          <nav className="flex items-center space-x-4 text-sm">
            <Link href="/" className="text-gray-700 hover:text-primary-red transition-colors">
              Home
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary-red transition-colors">
              Categories
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary-red transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-red transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
