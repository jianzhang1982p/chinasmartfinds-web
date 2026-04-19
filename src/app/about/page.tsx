import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About ChinaSmartFinds</h1>
        <p className="text-xl text-gray-600">
          Your trusted guide to discovering the best Chinese products online.
        </p>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              ChinaSmartFinds was born from a simple observation: there are incredible 
              Chinese products available on platforms like Amazon, Temu, and AliExpress, 
              but finding the good ones feels like searching for a needle in a haystack.
            </p>
            <p className="mb-4">
              We've spent countless hours researching, testing, and curating products 
              so you don't have to. Our team analyzes thousands of reviews, compares 
              prices across platforms, and selects only the items that offer genuine 
              value and quality.
            </p>
            <p>
              Whether you're looking for innovative electronics, home essentials, 
              beauty products, or fashion accessories, we're here to help you make 
              smart shopping decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Mission & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Trustworthy</h3>
            <p className="text-gray-600 text-sm">
              We only recommend products we genuinely believe in. Our reviews are honest and unbiased.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="w-16 h-16 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Value-Driven</h3>
            <p className="text-gray-600 text-sm">
              We focus on products that offer the best balance of quality and price.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Community-First</h3>
            <p className="text-gray-600 text-sm">
              We listen to our community and constantly improve based on your feedback.
            </p>
          </div>
        </div>
      </div>

      {/* How We Work */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">How We Select Products</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Research</h3>
              <p className="text-gray-600 text-sm">
                We scan thousands of products across multiple platforms
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Analyze</h3>
              <p className="text-gray-600 text-sm">
                Deep dive into reviews, ratings, and seller reputation
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Compare</h3>
              <p className="text-gray-600 text-sm">
                Price comparison and value assessment across platforms
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Curate</h3>
              <p className="text-gray-600 text-sm">
                Only the best products make it to our recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center text-sm">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <p className="font-semibold">Project Manager</p>
            <p className="text-gray-500">Coordination</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <p className="font-semibold">Frontend Dev</p>
            <p className="text-gray-500">Website</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <p className="font-semibold">Backend Dev</p>
            <p className="text-gray-500">Data & API</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <p className="font-semibold">SEO Specialist</p>
            <p className="text-gray-500">Optimization</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
            <p className="font-semibold">Content Creator</p>
            <p className="text-gray-500">Copywriting</p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-r from-primary-red to-red-700 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Have Questions or Suggestions?</h2>
          <p className="mb-6 text-red-100">
            We'd love to hear from you! Whether you have a product recommendation 
            or just want to say hi, feel free to reach out.
          </p>
          <Link href="/contact" className="bg-white text-primary-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Affiliate Disclosure */}
      <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold mb-3">Affiliate Disclosure</h3>
        <p className="text-sm text-gray-600">
          ChinaSmartFinds participates in affiliate marketing programs including 
          Amazon Associates, Temu Affiliate Program, and AliExpress Affiliate. 
          When you click on affiliate links and make a purchase, we may earn a 
          commission at no extra cost to you. This helps support our work and 
          allows us to continue providing free product recommendations.
        </p>
      </div>
    </div>
  );
}
