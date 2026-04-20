/**
 * API Client for ChinaSmartFinds Backend
 * 
 * This module handles all API communication with the backend.
 * Currently uses mock data for development - will be replaced
 * with real API calls when backend is ready.
 */

// Production API URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://chinasmartfinds-api.railway.app/api';

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

// Note: Mock data removed - now using real backend API
// Mock data still available in src/data/mock-products.ts for fallback testing

/**
 * Fetch products with optional filters
 */
export async function fetchProducts(filters?: ProductFilters): Promise<ProductsResponse> {
  // Build query params
  const params = new URLSearchParams();
  if (filters) {
    if (filters.category) params.set('category', filters.category);
    if (filters.source) params.set('source', filters.source);
    if (filters.minPrice !== undefined) params.set('minPrice', String(filters.minPrice));
    if (filters.maxPrice !== undefined) params.set('maxPrice', String(filters.maxPrice));
    if (filters.search) params.set('search', filters.search);
    if (filters.sortBy) params.set('sortBy', filters.sortBy);
    if (filters.page) params.set('page', String(filters.page));
    if (filters.pageSize) params.set('pageSize', String(filters.pageSize));
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
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  
  if (!response.ok) {
    throw new Error('Product not found');
  }
  
  return response.json();
}

/**
 * Fetch all categories
 */
export async function fetchCategories(): Promise<Category[]> {
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
