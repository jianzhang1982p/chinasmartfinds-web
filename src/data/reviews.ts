// Review articles data - ChinaSmartFinds

export interface Review {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  rating: number;
  price: string;
  affiliateLink: string;
  features: string[];
  specifications: Record<string, string>;
  pros: string[];
  cons: string[];
  publishedAt: string;
  image?: {
    width: number;
    height: number;
    alt: string;
  };
}

export const REVIEWS: Review[] = [
  // Home & Kitchen (5 篇)
  {
    slug: "vegetable-chopper-review",
    title: "Fullstar Vegetable Chopper Review: Best Kitchen Gadget Under $50?",
    category: "home-kitchen",
    excerpt: "This 12-in-1 vegetable chopper cuts prep time to under 2 minutes—and it's one of the most popular kitchen gadgets under $50 on Amazon right now.",
    content: "Full review content...",
    rating: 4.8,
    price: "$29.99",
    affiliateLink: "#",
    features: [
      "12-in-1 Functionality",
      "Large 1.2L Capacity",
      "Built-in Strainer",
      "Safety Hand Guard",
      "Space-Saving Design"
    ],
    specifications: {
      "Material": "BPA-free plastic, stainless steel",
      "Capacity": "1.2 liters",
      "Blade Count": "8 interchangeable",
      "Dishwasher Safe": "Container only"
    },
    pros: ["Genuine time-saver", "Versatile design", "Easy cleanup"],
    cons: ["Blade assembly requires hand washing"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Fullstar Vegetable Chopper" }
  },
  {
    slug: "electric-milk-frother-review",
    title: "Electric Milk Frother Review: Best for Lattes Under $20",
    category: "home-kitchen",
    excerpt: "Create café-quality foam at home with this handheld milk frother. Perfect for lattes, cappuccinos, and hot chocolate.",
    content: "Full review content...",
    rating: 4.6,
    price: "$15.99",
    affiliateLink: "#",
    features: [
      "Powerful motor",
      "Stainless steel whisk",
      "Ergonomic handle",
      "Easy to clean"
    ],
    specifications: {
      "Power": "Battery operated",
      "Material": "Stainless steel",
      "Weight": "3.2 oz"
    },
    pros: ["Creates rich foam quickly", "Affordable", "Durable"],
    cons: ["Batteries not included"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Product Image" }
  },
  {
    slug: "instant-read-thermometer-review",
    title: "Instant Read Thermometer Review: Most Accurate Under $25",
    category: "home-kitchen",
    excerpt: "Get precise temperature readings in 2-3 seconds with this instant-read meat thermometer. Essential for perfect cooking every time.",
    content: "Full review content...",
    rating: 4.7,
    price: "$19.99",
    affiliateLink: "#",
    features: [
      "2-3 second readings",
      "Wide temperature range",
      "Backlit display",
      "Waterproof IPX6"
    ],
    specifications: {
      "Range": "-58°F to 572°F",
      "Accuracy": "±0.9°F",
      "Battery": "AAA included"
    },
    pros: ["Fast and accurate", "Easy to read", "Waterproof"],
    cons: ["Probe could be longer"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Product Image" }
  },
  // Electronics (3 篇)
  {
    slug: "usb-c-hub-review",
    title: "USB C Hub Review: Best 7-in-1 Adapter for MacBook",
    category: "electronics",
    excerpt: "Expand your laptop connectivity with this compact 7-in-1 USB-C hub featuring 4K HDMI, USB 3.0, and SD card readers.",
    content: "Full review content...",
    rating: 4.5,
    price: "$25.99",
    affiliateLink: "#",
    features: [
      "7 ports in one",
      "4K HDMI output",
      "USB 3.0 - 5Gbps",
      "SD/TF card reader"
    ],
    specifications: {
      "Ports": "7 (HDMI, 3x USB 3.0, SD, TF, USB-C PD)",
      "HDMI": "4K@30Hz",
      "Material": "Aluminum Alloy"
    },
    pros: ["Compact design", "Fast data transfer", "Plug and play"],
    cons: ["Gets warm during heavy use"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Product Image" }
  },
  {
    slug: "wireless-earbuds-review",
    title: "Wireless Earbuds Review: Best Sound Quality Under $50",
    category: "electronics",
    excerpt: "Experience premium sound quality with these wireless Bluetooth earbuds featuring ANC and 24-hour battery life.",
    content: "Full review content...",
    rating: 4.4,
    price: "$39.99",
    affiliateLink: "#",
    features: [
      "Active Noise Cancellation",
      "24-hour battery life",
      "Bluetooth 5.3",
      "IPX7 waterproof"
    ],
    specifications: {
      "Bluetooth": "5.3",
      "Battery": "6h + 18h case",
      "Driver": "10mm"
    },
    pros: ["Great sound quality", "Comfortable fit", "Good battery life"],
    cons: ["Case is a bit bulky"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Product Image" }
  },
  // Beauty (3 篇)
  {
    slug: "dermaplaning-tool-review",
    title: "Dermaplaning Tool Review: Best At-Home Facial Under $15",
    category: "beauty",
    excerpt: "Achieve salon-quality dermaplaning at home with this precision facial razor. Remove peach fuzz and dead skin for glowing skin.",
    content: "Full review content...",
    rating: 4.3,
    price: "$12.99",
    affiliateLink: "#",
    features: [
      "Precision blade",
      "Ergonomic handle",
      "Safety guard",
      "Includes 3 blades"
    ],
    specifications: {
      "Blade Material": "Stainless steel",
      "Handle": "Non-slip grip"
    },
    pros: ["Smooth results", "Affordable", "Easy to use"],
    cons: ["Blades need frequent replacement"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Product Image" }
  },
  {
    slug: "jade-roller-review",
    title: "Jade Roller Review: Does It Really Work for Face Massage?",
    category: "beauty",
    excerpt: "Discover the benefits of jade rolling for lymphatic drainage, reduced puffiness, and improved product absorption.",
    content: "Full review content...",
    rating: 4.2,
    price: "$16.99",
    affiliateLink: "#",
    features: [
      "100% natural jade",
      "Dual-ended design",
      "Cooling effect",
      "Includes storage pouch"
    ],
    specifications: {
      "Material": "Natural jade stone",
      "Handle": "Stainless steel"
    },
    pros: ["Relaxing massage", "Reduces puffiness", "Beautiful design"],
    cons: ["Results vary by person"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Product Image" }
  },
  {
    slug: "heatless-hair-curler-review",
    title: "Heatless Hair Curler Review: Best No-Heat Curls Under $20",
    category: "beauty",
    excerpt: "Get beautiful curls without heat damage. This silk heatless curler creates long-lasting waves while you sleep.",
    content: "Full review content...",
    rating: 4.5,
    price: "$18.99",
    affiliateLink: "#",
    features: [
      "100% mulberry silk",
      "No heat damage",
      "Overnight styling",
      "Includes clips and scrunchie"
    ],
    specifications: {
      "Material": "Mulberry silk",
      "Length": "23 inches"
    },
    pros: ["No heat damage", "Long-lasting curls", "Comfortable to sleep"],
    cons: ["Takes practice to master"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Product Image" }
  },
  // Fashion (2 篇)
  {
    slug: "crossbody-bag-review",
    title: "Crossbody Bag Review: Best Everyday Bag Under $40",
    category: "fashion",
    excerpt: "This versatile crossbody bag combines style and functionality. Perfect for daily errands, travel, or casual outings.",
    content: "Full review content...",
    rating: 4.4,
    price: "$35.99",
    affiliateLink: "#",
    features: [
      "Multiple compartments",
      "Adjustable strap",
      "Water-resistant",
      "Fits phone and wallet"
    ],
    specifications: {
      "Material": "Vegan leather",
      "Dimensions": "9 x 7 x 3 inches",
      "Strap": "Adjustable 28-52 inches"
    },
    pros: ["Stylish design", "Good quality", "Affordable"],
    cons: ["Strap could be wider"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Product Image" }
  },
  {
    slug: "blue-light-glasses-review",
    title: "Blue Light Glasses Review: Best for Eye Strain Under $25",
    category: "fashion",
    excerpt: "Protect your eyes from harmful blue light with these stylish computer glasses. Reduce eye strain and improve sleep quality.",
    content: "Full review content...",
    rating: 4.3,
    price: "$22.99",
    affiliateLink: "#",
    features: [
      "Blocks 90% blue light",
      "Reduces eye strain",
      "Lightweight TR90 frame",
      "Unisex design"
    ],
    specifications: {
      "Frame": "TR90",
      "Lens Width": "52mm",
      "Blue Light Block": "90%"
    },
    pros: ["Noticeable eye strain reduction", "Comfortable", "Stylish"],
    cons: ["Slight color tint"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Product Image" }
  },
  // Roundups (1 篇)
  {
    slug: "best-kitchen-gadgets-under-50",
    title: "11 Best Kitchen Gadgets Under $50 in 2026",
    category: "roundups",
    excerpt: "We tested 50+ kitchen gadgets to find the 11 best ones under $50. These are the must-have tools that actually make cooking easier.",
    content: "Full roundup content...",
    rating: 4.8,
    price: "Various",
    affiliateLink: "#",
    features: [
      "Tested 50+ products",
      "All under $50",
      "Real user reviews",
      "Updated for 2026"
    ],
    specifications: {},
    pros: ["Comprehensive testing", "Budget-friendly", "Practical picks"],
    cons: ["Some seasonal availability"],
    publishedAt: "2026-04-20",
    image: { width: 800, height: 600, alt: "Product Image" }
  }
];

export function getReviewBySlug(slug: string): Review | undefined {
  return REVIEWS.find(r => r.slug === slug);
}

export function getReviewsByCategory(category: string): Review[] {
  return REVIEWS.filter(r => r.category === category);
}

export function getAllReviews(): Review[] {
  return REVIEWS;
}

export default {
  REVIEWS,
  getReviewBySlug,
  getReviewsByCategory,
  getAllReviews
};
