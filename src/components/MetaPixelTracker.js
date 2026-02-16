import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaPixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view in Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default MetaPixelTracker;
