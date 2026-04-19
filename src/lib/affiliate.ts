/**
 * Affiliate Link Tracking Utilities
 * 
 * Handles affiliate link generation for different platforms:
 * - Amazon Associates
 * - Temu Affiliate
 * - AliExpress Affiliate
 */

// Amazon Associates configuration
const AMAZON_CONFIG = {
  tag: process.env.NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG || 'chinasmartfinds-20',
  trackingId: process.env.NEXT_PUBLIC_AMAZON_TRACKING_ID || '',
};

/**
 * Generate Amazon affiliate link
 */
export function generateAmazonLink(asin: string, baseUrl?: string): string {
  const base = baseUrl || `https://www.amazon.com/dp/${asin}`;
  const url = new URL(base);
  
  url.searchParams.set('tag', AMAZON_CONFIG.tag);
  
  if (AMAZON_CONFIG.trackingId) {
    url.searchParams.set('ref_', AMAZON_CONFIG.trackingId);
  }
  
  return url.toString();
}

/**
 * Generate Temu affiliate link
 */
export function generateTemuLink(productId: string, affiliateCode: string = ''): string {
  const base = `https://www.temu.com/${productId}.html`;
  
  if (affiliateCode) {
    return `${base}?aff_short_key=${affiliateCode}`;
  }
  
  return base;
}

/**
 * Generate AliExpress affiliate link
 */
export function generateAliExpressLink(productId: string, affiliateId: string = ''): string {
  const base = `https://www.aliexpress.com/item/${productId}.html`;
  
  if (affiliateId) {
    return `${base}?spm=a2g0o.productlist.0.0.${affiliateId}`;
  }
  
  return base;
}

/**
 * Generate affiliate link based on source platform
 */
export function generateAffiliateLink(
  source: 'amazon' | 'temu' | 'aliexpress',
  productId: string,
  options?: {
    amazonAsin?: string;
    affiliateCode?: string;
    affiliateId?: string;
  }
): string {
  switch (source) {
    case 'amazon':
      return generateAmazonLink(options?.amazonAsin || productId);
    case 'temu':
      return generateTemuLink(productId, options?.affiliateCode);
    case 'aliexpress':
      return generateAliExpressLink(productId, options?.affiliateId);
    default:
      return `#${productId}`;
  }
}

/**
 * Track click event (for analytics)
 */
export function trackAffiliateClick(
  productId: string,
  source: string,
  position?: string
): void {
  // Send to analytics endpoint
  if (typeof window !== 'undefined') {
    // Google Analytics event
    if ((window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: `${source}:${productId}`,
        position: position,
      });
    }
    
    // Could also send to custom backend for tracking
    fetch('/api/track/click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId,
        source,
        position,
        timestamp: Date.now(),
      }),
    }).catch(() => {
      // Silently fail - analytics shouldn't break UX
    });
  }
}

/**
 * Validate affiliate configuration
 */
export function validateAffiliateConfig(): {
  isValid: boolean;
  missing: string[];
} {
  const missing: string[] = [];
  
  if (!AMAZON_CONFIG.tag || AMAZON_CONFIG.tag === 'chinasmartfinds-20') {
    missing.push('NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG');
  }
  
  return {
    isValid: missing.length === 0,
    missing,
  };
}

export default {
  generateAmazonLink,
  generateTemuLink,
  generateAliExpressLink,
  generateAffiliateLink,
  trackAffiliateClick,
  validateAffiliateConfig,
};
