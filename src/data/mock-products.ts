/**
 * Mock Product Data for Development
 * 
 * This data simulates the backend API response.
 * Replace with real API calls when backend is ready.
 * 
 * Product selection based on PM guidance:
 * - Home & Kitchen (priority)
 * - Electronics Accessories
 * - Beauty Tools
 * - Fashion Accessories
 */

export interface MockProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  currency: string;
  images: string[];
  rating: number;
  reviewCount: number;
  source: 'amazon' | 'temu' | 'aliexpress';
  affiliateLink: string;
  category: string;
  tags: string[];
  inStock: boolean;
  features: string[];
  specifications: Record<string, string>;
  badge?: 'new' | 'hot' | 'discount';
  createdAt: string;
  updatedAt: string;
}

export const MOCK_PRODUCTS: MockProduct[] = [
  // === Home & Kitchen (Priority 1) ===
  {
    id: "hk-001",
    title: "Collapsible Storage Bins with Lids - 3 Pack Kitchen Organizer",
    description: "Maximize your kitchen space with these premium collapsible storage bins. Perfect for pantry organization, fridge storage, and countertop organization. Made from durable BPA-free materials.",
    price: 24.99,
    originalPrice: 39.99,
    currency: "USD",
    images: ["/products/storage-bins.jpg"],
    rating: 4.6,
    reviewCount: 2847,
    source: "amazon",
    affiliateLink: "#",
    category: "Home & Kitchen",
    tags: ["storage", "organization", "kitchen", "collapsible"],
    inStock: true,
    features: [
      "Space-saving collapsible design",
      "BPA-free food-safe materials",
      "Secure snap-on lids",
      "Easy to clean - dishwasher safe",
      "Stackable for vertical storage"
    ],
    specifications: {
      "Material": "PP Plastic",
      "Dimensions": "10.2 x 7.5 x 5.9 inches",
      "Capacity": "4.5 Liters each",
      "Color": "Clear/White",
      "Package": "3 Pack"
    },
    badge: "discount",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  {
    id: "hk-002",
    title: "Vegetable Chopper Dicer - 12 in 1 Food Chopper with Container",
    description: "Save time in the kitchen with this versatile 12-in-1 vegetable chopper. Includes multiple blade options for dicing, slicing, and chopping. Built-in container catches all your chopped veggies.",
    price: 29.99,
    originalPrice: 49.99,
    currency: "USD",
    images: ["/products/veggie-chopper.jpg"],
    rating: 4.5,
    reviewCount: 5621,
    source: "amazon",
    affiliateLink: "#",
    category: "Home & Kitchen",
    tags: ["kitchen gadget", "food prep", "chopper", "dicer"],
    inStock: true,
    features: [
      "12 interchangeable blades",
      "1.2L collection container",
      "Non-slip base for stability",
      "Easy to clean - includes brush",
      "BPA-free materials"
    ],
    specifications: {
      "Material": "ABS + Stainless Steel",
      "Container Capacity": "1.2 Liters",
      "Blade Count": "12 pieces",
      "Dimensions": "10.5 x 5.1 x 4.3 inches",
      "Weight": "2.1 lbs"
    },
    badge: "hot",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  {
    id: "hk-003",
    title: "Silicone Stretch Lids - 12 Pack Reusable Food Covers",
    description: "Replace plastic wrap with these eco-friendly silicone stretch lids. Fits various container shapes and sizes. Microwave, freezer, and dishwasher safe.",
    price: 15.99,
    originalPrice: 25.99,
    currency: "USD",
    images: ["/products/silicone-lids.jpg"],
    rating: 4.4,
    reviewCount: 3892,
    source: "amazon",
    affiliateLink: "#",
    category: "Home & Kitchen",
    tags: ["eco-friendly", "food storage", "silicone", "reusable"],
    inStock: true,
    features: [
      "6 sizes fit most containers",
      "100% food-grade silicone",
      "Temperature resistant -40°F to 450°F",
      "Reusable up to 1000+ times",
      "Reduces plastic waste"
    ],
    specifications: {
      "Material": "Food-Grade Silicone",
      "Sizes": "2.6\" to 8.3\" diameter",
      "Package": "12 pieces (6 sizes)",
      "Temperature Range": "-40°F to 450°F",
      "Color": "Multicolor"
    },
    badge: "discount",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  {
    id: "hk-004",
    title: "LED Strip Lights 32.8ft - RGB Color Changing Room Lights with Remote",
    description: "Transform any room with these vibrant LED strip lights. 16 million colors, multiple lighting modes, and music sync feature. Perfect for bedroom, living room, gaming setup, or party decoration.",
    price: 19.99,
    originalPrice: 35.99,
    currency: "USD",
    images: ["/products/led-strips.jpg"],
    rating: 4.3,
    reviewCount: 8934,
    source: "amazon",
    affiliateLink: "#",
    category: "Home & Kitchen",
    tags: ["led lights", "room decor", "rgb", "smart home"],
    inStock: true,
    features: [
      "32.8ft (10m) length - cuttable",
      "16 million colors + DIY mode",
      "Music sync with built-in mic",
      "44-key IR remote control",
      "Strong adhesive backing"
    ],
    specifications: {
      "Length": "32.8 feet (10 meters)",
      "LED Count": "300 LEDs",
      "Voltage": "12V",
      "Waterproof": "IP20 (indoor use)",
      "Remote": "44-key IR"
    },
    badge: "hot",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  {
    id: "hk-005",
    title: "Essential Oil Diffuser - 500ml Aromatherapy Diffuser with 7 Color LED",
    description: "Create a relaxing atmosphere with this ultrasonic essential oil diffuser. Large 500ml capacity runs up to 11 hours. Features 7 color LED lights and multiple mist modes.",
    price: 22.99,
    originalPrice: 39.99,
    currency: "USD",
    images: ["/products/diffuser.jpg"],
    rating: 4.5,
    reviewCount: 4521,
    source: "amazon",
    affiliateLink: "#",
    category: "Home & Kitchen",
    tags: ["aromatherapy", "essential oils", "diffuser", "wellness"],
    inStock: true,
    features: [
      "500ml large capacity",
      "Up to 11 hours runtime",
      "7 color LED mood lighting",
      "Ultrasonic - whisper quiet",
      "Auto shut-off when water runs out"
    ],
    specifications: {
      "Capacity": "500ml",
      "Runtime": "6-11 hours",
      "Coverage": "300-400 sq ft",
      "Noise Level": "<35dB",
      "Material": "BPA-Free PP"
    },
    badge: "new",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  
  // === Electronics Accessories (Priority 2) ===
  {
    id: "el-001",
    title: "USB C Hub 7-in-1 - HDMI 4K Adapter with USB 3.0, SD/TF Card Reader",
    description: "Expand your laptop connectivity with this compact 7-in-1 USB-C hub. Features 4K HDMI output, 3 USB 3.0 ports, and SD/TF card readers. Plug and play, no drivers needed.",
    price: 25.99,
    originalPrice: 45.99,
    currency: "USD",
    images: ["/products/usb-hub.jpg"],
    rating: 4.6,
    reviewCount: 3421,
    source: "amazon",
    affiliateLink: "#",
    category: "Electronics",
    tags: ["usb-c", "hub", "adapter", "laptop accessories"],
    inStock: true,
    features: [
      "7 ports in one compact hub",
      "4K@30Hz HDMI output",
      "USB 3.0 - 5Gbps transfer speed",
      "SD/TF card reader simultaneously",
      "Aluminum alloy - heat dissipation"
    ],
    specifications: {
      "Ports": "7 (HDMI, 3x USB 3.0, SD, TF, USB-C PD)",
      "HDMI Resolution": "4K@30Hz",
      "USB Speed": "5Gbps",
      "PD Charging": "100W pass-through",
      "Material": "Aluminum Alloy"
    },
    badge: "discount",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  {
    id: "el-002",
    title: "Wireless Charging Stand 15W - Fast Qi Charger for iPhone & Samsung",
    description: "Charge your phone faster with this 15W wireless charging stand. Compatible with all Qi-enabled devices. Adjustable angle for comfortable viewing while charging.",
    price: 18.99,
    originalPrice: 32.99,
    currency: "USD",
    images: ["/products/wireless-charger.jpg"],
    rating: 4.4,
    reviewCount: 2876,
    source: "amazon",
    affiliateLink: "#",
    category: "Electronics",
    tags: ["wireless charger", "qi charging", "phone accessories", "fast charging"],
    inStock: true,
    features: [
      "15W fast wireless charging",
      "Adjustable viewing angle",
      "Case-friendly (up to 5mm)",
      "Over-heat & over-charge protection",
      "LED indicator - sleep-friendly"
    ],
    specifications: {
      "Output": "15W/10W/7.5W/5W",
      "Input": "QC 3.0 adapter (not included)",
      "Charging Distance": "≤8mm",
      "Compatibility": "All Qi devices",
      "Certification": "Qi, CE, FCC, RoHS"
    },
    badge: "discount",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  {
    id: "el-003",
    title: "Laptop Stand Adjustable - Ergonomic Aluminum Notebook Riser",
    description: "Improve your posture with this adjustable laptop stand. Made from premium aluminum alloy, supports laptops from 10-17 inches. Foldable design for easy portability.",
    price: 21.99,
    originalPrice: 35.99,
    currency: "USD",
    images: ["/products/laptop-stand.jpg"],
    rating: 4.7,
    reviewCount: 5234,
    source: "amazon",
    affiliateLink: "#",
    category: "Electronics",
    tags: ["laptop stand", "ergonomic", "desk accessories", "work from home"],
    inStock: true,
    features: [
      "6-level height adjustment",
      "Supports 10-17 inch laptops",
      "Premium aluminum alloy",
      "Foldable & portable",
      "Non-slip silicone pads"
    ],
    specifications: {
      "Material": "Aluminum Alloy",
      "Compatibility": "10-17 inch laptops",
      "Height Range": "2.5\" to 6\"",
      "Weight Capacity": "22 lbs",
      "Folded Size": "10.2 x 2.2 x 1 inches"
    },
    badge: "hot",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  
  // === Beauty Tools (Priority 3) ===
  {
    id: "bt-001",
    title: "Makeup Sponge Set 8 Pack - Latex Free Beauty Blender",
    description: "Achieve flawless makeup application with these premium makeup sponges. Ultra-soft, latex-free, and reusable. Includes 8 pieces in various shapes for different makeup needs.",
    price: 12.99,
    originalPrice: 22.99,
    currency: "USD",
    images: ["/products/makeup-sponge.jpg"],
    rating: 4.5,
    reviewCount: 3892,
    source: "amazon",
    affiliateLink: "#",
    category: "Beauty",
    tags: ["makeup tools", "beauty blender", "makeup sponge", "cosmetics"],
    inStock: true,
    features: [
      "8 pieces - multiple shapes",
      "100% latex-free",
      "Ultra-soft when wet",
      "Reusable up to 3 months",
      "Includes storage case"
    ],
    specifications: {
      "Material": "Hydrophilic Polyurethane",
      "Package": "8 pieces + case",
      "Shapes": "Teardrop, Flat, Pointed",
      "Colors": "Pink/Purple",
      "Latex-Free": "Yes"
    },
    badge: "discount",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  {
    id: "bt-002",
    title: "Facial Cleansing Brush - Sonic Face Scrubber with 5 Brush Heads",
    description: "Deep clean your pores with this sonic facial cleansing brush. 5 speed settings and 5 brush heads for different skin types. Waterproof design for shower use.",
    price: 28.99,
    originalPrice: 49.99,
    currency: "USD",
    images: ["/products/cleansing-brush.jpg"],
    rating: 4.4,
    reviewCount: 2156,
    source: "amazon",
    affiliateLink: "#",
    category: "Beauty",
    tags: ["skincare", "cleansing", "beauty device", "facial care"],
    inStock: true,
    features: [
      "Sonic technology - 8000 RPM",
      "5 speed settings",
      "5 brush heads included",
      "IPX7 waterproof",
      "USB rechargeable - 30 day battery"
    ],
    specifications: {
      "Speed": "8000 vibrations/min",
      "Battery": "500mAh Li-ion",
      "Runtime": "30 days (2x daily use)",
      "Waterproof": "IPX7",
      "Charging": "USB"
    },
    badge: "new",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  
  // === Fashion Accessories (Priority 4) ===
  {
    id: "fa-001",
    title: "Blue Light Blocking Glasses - Anti Eye Strain Computer Glasses",
    description: "Protect your eyes from harmful blue light with these stylish computer glasses. Reduces eye strain, headaches, and improves sleep quality. Suitable for all-day wear.",
    price: 16.99,
    originalPrice: 29.99,
    currency: "USD",
    images: ["/products/blue-light-glasses.jpg"],
    rating: 4.3,
    reviewCount: 4521,
    source: "amazon",
    affiliateLink: "#",
    category: "Fashion",
    tags: ["blue light glasses", "computer glasses", "eye protection", "eyewear"],
    inStock: true,
    features: [
      "Blocks 90% of blue light",
      "Reduces eye strain & headaches",
      "Improves sleep quality",
      "Lightweight TR90 frame",
      "Unisex design - multiple colors"
    ],
    specifications: {
      "Frame Material": "TR90",
      "Lens Width": "52mm",
      "Bridge": "18mm",
      "Temple": "145mm",
      "Blue Light Block": "90%"
    },
    badge: "hot",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  {
    id: "fa-002",
    title: "Packing Cubes 6 Set - Travel Organizers with Laundry Bag",
    description: "Pack smarter with these travel packing cubes. Set includes 6 different sizes plus a laundry bag. Durable water-resistant fabric keeps clothes organized and wrinkle-free.",
    price: 19.99,
    originalPrice: 34.99,
    currency: "USD",
    images: ["/products/packing-cubes.jpg"],
    rating: 4.6,
    reviewCount: 6234,
    source: "amazon",
    affiliateLink: "#",
    category: "Fashion",
    tags: ["travel accessories", "packing cubes", "luggage organizer", "travel"],
    inStock: true,
    features: [
      "6 pieces + 1 laundry bag",
      "Water-resistant nylon fabric",
      "Double-way zippers",
      "Mesh top for visibility",
      "Fits carry-on & checked luggage"
    ],
    specifications: {
      "Material": "Water-resistant Nylon",
      "Set Includes": "6 cubes + 1 laundry bag",
      "Sizes": "S, M, L (2 each)",
      "Colors": "Gray/Black/Blue",
      "Weight": "1.2 lbs"
    },
    badge: "discount",
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
];

export function getMockProductById(id: string): MockProduct | undefined {
  return MOCK_PRODUCTS.find(p => p.id === id);
}

export function getMockProductsByCategory(category: string): MockProduct[] {
  return MOCK_PRODUCTS.filter(p => p.category === category);
}

export function searchMockProducts(query: string): MockProduct[] {
  const lowerQuery = query.toLowerCase();
  return MOCK_PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export default MOCK_PRODUCTS;
