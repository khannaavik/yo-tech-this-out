/**
 * Companies Data
 * Company profiles with overview, awards, and editorial insights
 */

import { products } from './products';

/**
 * Generate company slug from company name
 */
export function getCompanySlug(companyName) {
  return companyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Get all unique companies from products
 */
export function getAllCompanies() {
  const companyMap = new Map();
  
  products.forEach(product => {
    if (!companyMap.has(product.company)) {
      companyMap.set(product.company, {
        name: product.company,
        slug: getCompanySlug(product.company),
        products: [],
        awards: [],
      });
    }
    companyMap.get(product.company).products.push(product);
  });
  
  return Array.from(companyMap.values());
}

/**
 * Get company by slug
 */
export function getCompanyBySlug(slug) {
  const companies = getAllCompanies();
  return companies.find(company => company.slug === slug);
}

/**
 * Get products by company name
 */
export function getProductsByCompany(companyName) {
  return products.filter(product => product.company === companyName);
}

/**
 * Company profile data with editorial content
 */
export const companyProfiles = {
  'Samsung': {
    overview: 'Samsung continues to push the boundaries of consumer electronics, combining cutting-edge AI with premium design. Their presence at CES represents the intersection of innovation and mass-market appeal.',
    whyItMatters: 'Samsung\'s scale and R&D investment make them a bellwether for industry direction. When they commit to a technology category, it signals mainstream adoption is imminent. Their AI-powered audio innovations demonstrate how machine learning can enhance user experience without complexity.',
    awards: ['Best of Innovation - Galaxy Buds3 Pro'],
    cesInvolvement: 'Multi-category presence across audio, displays, and smart home technologies.',
  },
  'Sony': {
    overview: 'Sony maintains its position as a premium technology leader, delivering products that blend engineering excellence with artistic vision. Their CES presence showcases both consumer and professional-grade innovations.',
    whyItMatters: 'Sony\'s dual focus on consumer and professional markets creates a unique innovation pipeline. Technologies proven in professional settings often find their way to consumer products, ensuring real-world validation. Their XR and audio innovations represent the future of immersive experiences.',
    awards: ['Best of Innovation - Sony XR Display', 'Innovation Award - BRAVIA Theater Quad'],
    cesInvolvement: 'Strong presence in audio, XR, and professional creator tools.',
  },
  'VIV Health': {
    overview: 'VIV Health is redefining health monitoring through elegant, unobtrusive design. Their smart ring technology represents a new paradigm in wearable health tracking.',
    whyItMatters: 'VIV Health proves that comprehensive health monitoring doesn\'t require bulky devices or constant attention. Their approach to passive, continuous tracking could transform how we understand our own health patterns. The smart ring category is finding its benchmark.',
    awards: ['Innovation Award - VIV Ring'],
    cesInvolvement: 'Health wearable innovation with focus on elegant form factor.',
  },
  'Earable': {
    overview: 'Earable combines neuroscience with wearable technology to address sleep and focus challenges. Their neurotechnology approach represents a new frontier in wellness tech.',
    whyItMatters: 'Earable\'s scientific approach to brain stimulation for sleep and focus represents a shift from passive tracking to active intervention. This technology could transform how we approach cognitive wellness and sleep optimization.',
    awards: ['Innovation Award - Frenz Brainband'],
    cesInvolvement: 'Neurotechnology and wellness innovation.',
  },
  'Maono': {
    overview: 'Maono democratizes professional audio for content creators. Their AI-powered microphones bring broadcast-quality sound to the creator economy.',
    whyItMatters: 'The creator economy demands professional tools at accessible prices. Maono\'s AI-powered audio solutions demonstrate how intelligent processing can bridge the gap between consumer and professional equipment.',
    awards: ['Innovation Award - Maono AI Mic'],
    cesInvolvement: 'Creator-focused audio technology innovation.',
  },
  'Looki': {
    overview: 'Looki is pioneering multimodal AI wearables that capture life through sight, sound, and context. Their technology transforms raw moments into polished stories automatically.',
    whyItMatters: 'Looki represents the next evolution of lifelogging—moving from passive recording to intelligent storytelling. Their AI-powered editing and transcription could transform how creators and professionals document their work.',
    cesInvolvement: 'AI wearable and lifelogging innovation.',
  },
  'Segway': {
    overview: 'Segway continues to innovate in personal mobility, blending gaming culture with real-world transportation. Their products represent the convergence of entertainment and utility.',
    whyItMatters: 'Segway\'s approach to mobility reflects how gaming culture is influencing real-world product design. Their go-kart represents a new category that bridges entertainment and transportation.',
    cesInvolvement: 'Gaming and mobility innovation.',
  },
  'Nearthlab': {
    overview: 'Nearthlab develops autonomous drone systems for public safety and emergency response. Their technology represents the future of rapid deployment aerial support.',
    whyItMatters: 'Autonomous drone systems for emergency response could transform public safety operations. Nearthlab\'s technology demonstrates how automation can enhance human capabilities in critical situations.',
    cesInvolvement: 'Autonomous systems and public safety technology.',
  },
};

/**
 * Get company profile data
 */
export function getCompanyProfile(companyName) {
  return companyProfiles[companyName] || {
    overview: `${companyName} is an innovative technology company featured at CES 2026, bringing breakthrough products to market.`,
    whyItMatters: `${companyName} represents the cutting edge of innovation in their category, pushing boundaries and setting new standards for what's possible.`,
    awards: [],
    cesInvolvement: 'Active participant in CES 2026 innovation showcase.',
  };
}
