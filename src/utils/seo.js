// SEO utility functions for EMAS-FI website

// Update document head with SEO meta tags
export const updateSEO = (data) => {
    // Update title
    document.title = data.title;
  
    // Update or create meta tags
    updateMetaTag('description', data.description);
  
    if (data.keywords) {
      updateMetaTag('keywords', data.keywords);
    }
  
    // Open Graph tags
    updateMetaProperty('og:title', data.title);
    updateMetaProperty('og:description', data.description);
  
    if (data.image) {
      updateMetaProperty('og:image', data.image);
    }
  
    if (data.url) {
      updateMetaProperty('og:url', data.url);
    }
  
    if (data.type) {
      updateMetaProperty('og:type', data.type);
    }
  
    // Twitter Card tags
    updateMetaName('twitter:title', data.title);
    updateMetaName('twitter:description', data.description);
  
    if (data.image) {
      updateMetaName('twitter:image', data.image);
    }
  
    // Update canonical URL
    if (data.url) {
      updateCanonicalLink(data.url);
    }
  };
  
  // Helper to update meta tag by name
  const updateMetaTag = (name, content) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };
  
  // Helper to update meta tag by property
  const updateMetaProperty = (property, content) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };
  
  // Helper to update meta tag by name (for Twitter)
  const updateMetaName = (name, content) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };
  
  // Helper to update canonical link tag
  const updateCanonicalLink = (url) => {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  };
  