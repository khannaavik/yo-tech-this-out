/**
 * SEO Utilities
 * Helper functions for generating SEO data and structured data
 */

const SITE_URL = 'https://yotechthisout.com'; // Update with actual domain
const SITE_NAME = 'YO! TECH THIS OUT';

/**
 * Generate Organization JSON-LD
 */
export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/branding/logo-light.png`,
    description: 'The innovation authority curating breakthrough technologies from CES and beyond.',
    sameAs: [
      'https://www.linkedin.com/company/yotechthisout',
      'https://www.youtube.com/@yotechthisout',
      'https://www.instagram.com/yotechthisout',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@yotechthisout.com',
      contactType: 'Customer Service',
      telephone: '+1-310-722-5210',
    },
  };
}

/**
 * Generate Product JSON-LD
 */
export function getProductJsonLd(product) {
  const productUrl = `${SITE_URL}/explore#${product.id}`;
  const productImage = product.image.startsWith('http') 
    ? product.image 
    : `${SITE_URL}${product.image}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: productImage,
    brand: {
      '@type': 'Brand',
      name: product.company,
    },
    category: product.categoryTag,
    url: product.website || productUrl,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: product.website || productUrl,
    },
  };
}

/**
 * Generate WebSite JSON-LD with search action
 */
export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/explore?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate BreadcrumbList JSON-LD
 */
export function getBreadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
