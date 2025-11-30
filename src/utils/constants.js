// Application constants and configuration

// API Configuration
export const API_CONFIG = {
    BASE_URL: process.env.VITE_API_BASE_URL || 'https://api.emas-fi.com',
    TIMEOUT: 10000,
  };
  
  // Application Routes
  export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    FEATURES: '#features',
    TOKENOMICS: '#tokenomics',
    TEAM: '#team',
    HOW_IT_WORKS: '#how-it-works',
    PITCH_DECK: '#pitch-deck',
  };
  
  // Social Media Links
  export const SOCIAL_LINKS = {
    TWITTER: 'https://twitter.com/emas-fi',
    LINKEDIN: 'https://linkedin.com/company/emas-fi',
    DISCORD: 'https://discord.gg/emas-fi',
    TELEGRAM: 'https://t.me/emas-fi',
  };
  
  // Contact Information
  export const CONTACT_INFO = {
    EMAIL: 'info@emasfi.mail',
    PHONE: '+44 (0) 20 7123 4567',
    ADDRESS: 'One Financial Center, London, UK',
  };
  
  // Token Information
  export const TOKEN_INFO = {
    NAME: 'EMAS-FI',
    SYMBOL: 'GOLD',
    TOTAL_SUPPLY: '100,000,000',
    INITIAL_PRICE: '$6.25',
    GOLD_BACKING: '1 GOLD = 0.1g of Gold',
    BURN_RATE: '2% of transactions',
  };
  
  // Breakpoints for responsive design
  export const BREAKPOINTS = {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px',
  };
  
  // Animation durations
  export const ANIMATION_DURATION = {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  };
  