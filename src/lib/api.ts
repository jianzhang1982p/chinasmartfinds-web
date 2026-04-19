/**
 * API Client for ChinaSmartFinds Backend
 * 
 * This module handles all API communication with the backend.
 * Currently uses mock data for development - will be replaced
 * with real API calls when backend is ready.
 */

import { MOCK_PRODUCTS, getMockProductById, getMockProductsByCategory, searchMockProducts } from '@/data/mock-products';

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

// Note: Mock products imported from @/data/mock-products.ts
// Contains 12 products across Home & Kitchen, Electronics, Beauty, and Fashion categories

// Note: Categories defined inline for mock data
const MOCK_CATEGORIES: Category[] = [
  { id: "home-kitchen", name: "Home & Kitchen", slug: "home-kitchen", description: "Kitchen gadgets, storage, and home decor", icon: "🏠", productCount: 5, subcategories: ["Storage", "Kitchen Tools", "Lighting", "Aromatherapy"] },
  { id: "electronics", name: "Electronics", slug: "electronics", description: "Tech accessories and gadgets", icon: "📱", productCount: 3, subcategories: ["USB Hubs", "Chargers", "Laptop Accessories"] },
  { id: "beauty", name: "Beauty", slug: "beauty", description: "Beauty tools and skincare devices", icon: "💄", productCount: 2, subcategories: ["Makeup Tools", "Skincare Devices"] },
  { id: "fashion", name: "Fashion", slug: "fashion", description: "Fashion accessories and travel gear", icon: "👗", productCount: 2, subcategories: ["Eyewear", "Travel Accessories"] },
];

/**
 * Fetch products with optional filters
 */
export async function fetchProducts(filters?: ProductFilters): Promise<ProductsResponse> {
  // In development, use mock data
  if (!API_BASE_URL || API_BASE_URL === '/api') {
    let products = [...MOCK_PRODUCTS];
    
    // Apply filters
    if (filters?.category) {
      products = products.filter(p => p.category === filters.category);
    }
    if (filters?.source) {
      products = products.filter(p => p.source === filters.source);
    }
    if (filters?.minPrice !== undefined) {
      products = products.filter(p => p.price >= (filters.minPrice || 0));
    }
    if (filters?.maxPrice !== undefined) {
      products = products.filter(p => p.price <= (filters.maxPrice || Infinity));
    }
    if (filters?.search) {
      products = searchMockProducts(filters.search);
    }
    
    // Apply sorting
    if (filters?.sortBy) {
      switch (filters.sortBy) {
        case 'price-low':
          products.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          products.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          products.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
      }
    }
    
    // Apply pagination
    const page = filters?.page || 1;
    const pageSize = filters?.pageSize || 10;
    const total = products.length;
    const totalPages = Math.ceil(total / pageSize);
    const paginatedProducts = products.slice((page - 1) * pageSize, page * pageSize);
    
    return {
      products: paginatedProducts,
      total,
      page,
      pageSize,
      totalPages,
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
    const product = getMockProductById(id);
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
    return searchMockProducts(query);
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
