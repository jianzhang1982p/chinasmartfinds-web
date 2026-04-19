/**
 * API Client for ChinaSmartFinds Backend
 * 
 * This module handles all API communication with the backend.
 * Currently uses mock data for development - will be replaced
 * with real API calls when backend is ready.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Types
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
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
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  productCount: number;
  subcategories: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ProductFilters {
  category?: string;
  source?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
  page?: number;
  pageSize?: number;
}

// Mock data for development
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Wireless Bluetooth Earbuds with Charging Case - Premium Sound Quality",
    description: "Experience premium sound quality with these wireless Bluetooth earbuds.",
    price: 29.99,
    originalPrice: 59.99,
    currency: "USD",
    images: ["/placeholder-product.jpg"],
    rating: 4.5,
    reviewCount: 2847,
    source: "amazon",
    affiliateLink: "#",
    category: "Electronics",
    tags: ["audio", "wireless", "bluetooth"],
    inStock: true,
    features: ["Bluetooth 5.3", "ANC", "24h battery"],
    specifications: { "Bluetooth": "5.3", "Battery": "24 hours" },
    createdAt: "2026-04-19T00:00:00Z",
    updatedAt: "2026-04-19T00:00:00Z",
  },
  // Add more mock products as needed
];

const MOCK_CATEGORIES: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    slug: "electronics",
    description: "Gadgets, accessories, and tech essentials",
    icon: "📱",
    productCount: 156,
    subcategories: ["Audio", "Phone Accessories", "Computer Accessories"],
  },
  {
    id: "home-living",
    name: "Home & Living",
    slug: "home-living",
    description: "Everything for a better home",
    icon: "🏠",
    productCount: 203,
    subcategories: ["Kitchen", "Bedding", "Storage"],
  },
];

/**
 * Fetch products with optional filters
 */
export async function fetchProducts(filters?: ProductFilters): Promise<ProductsResponse> {
  // In development, use mock data
  if (!API_BASE_URL || API_BASE_URL === '/api') {
    return {
      products: MOCK_PRODUCTS,
      total: MOCK_PRODUCTS.length,
      page: filters?.page || 1,
      pageSize: filters?.pageSize || 10,
      totalPages: 1,
    };
  }

  // Production: call real API
  const params = new URLSearchParams();
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.set(key, String(value));
      }
    });
  }

  const response = await fetch(`${API_BASE_URL}/products?${params}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return response.json();
}

/**
 * Fetch single product by ID
 */
export async function fetchProduct(id: string): Promise<Product> {
  if (!API_BASE_URL || API_BASE_URL === '/api') {
    const product = MOCK_PRODUCTS.find(p => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  
  return response.json();
}

/**
 * Fetch all categories
 */
export async function fetchCategories(): Promise<Category[]> {
  if (!API_BASE_URL || API_BASE_URL === '/api') {
    return MOCK_CATEGORIES;
  }

  const response = await fetch(`${API_BASE_URL}/categories`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  
  return response.json();
}

/**
 * Search products
 */
export async function searchProducts(query: string): Promise<Product[]> {
  if (!API_BASE_URL || API_BASE_URL === '/api') {
    return MOCK_PRODUCTS.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
  
  if (!response.ok) {
    throw new Error('Search failed');
  }
  
  return response.json();
}

export default {
  fetchProducts,
  fetchProduct,
  fetchCategories,
  searchProducts,
};
