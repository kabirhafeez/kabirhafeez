// Google Tag Manager and Meta Pixel utility functions
export const GTM_ID = 'GTM-NH2DQVQD';
export const META_PIXEL_ID = '4237689256511051';

// Track page views for React Router navigation
export const trackPageView = (url) => {
  // GTM tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GTM_ID, {
      page_path: url,
    });
  }
  
  // Also push to dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: url,
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // Meta Pixel tracking
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters
    });
  }
};

// Track Meta Pixel events
export const trackMetaEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Initialize GTM dataLayer if not exists
export const initGTM = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
};
