import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">中</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">ChinaSmartFinds</h3>
                <p className="text-xs text-gray-400">中国好物精选</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Discover the best Chinese products from Amazon, Temu, and AliExpress. 
              Hand-picked quality items with great value.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/electronics" className="text-gray-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/categories/home-living" className="text-gray-400 hover:text-white transition-colors">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link href="/categories/beauty" className="text-gray-400 hover:text-white transition-colors">
                  Beauty & Personal Care
                </Link>
              </li>
              <li>
                <Link href="/categories/fashion" className="text-gray-400 hover:text-white transition-colors">
                  Fashion & Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest deals and product recommendations.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none"
              />
              <button type="submit" className="w-full btn-primary text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 ChinaSmartFinds. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/affiliate-disclosure" className="text-gray-400 hover:text-white transition-colors">
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
