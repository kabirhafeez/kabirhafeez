import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTMPageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view in GTM dataLayer
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default GTMPageTracker;
