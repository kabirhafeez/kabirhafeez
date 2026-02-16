import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CalendlyPopup = ({ isOpen, onClose, calendlyUrl }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // Load Calendly widget script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Listen for Calendly events
    const handleCalendlyEvent = (e) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          // Close the popup first
          onClose();
          // Small delay to ensure popup closes smoothly before redirect
          setTimeout(() => {
            navigate('/thank-you-scheduling');
          }, 300);
        }
      }
    };

    // Add event listener for Calendly events
    window.addEventListener('message', handleCalendlyEvent);

    // Cleanup event listener
    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [navigate, onClose]);

  useEffect(() => {
    if (isOpen && window.Calendly) {
      // Initialize Calendly inline widget
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, [isOpen, calendlyUrl]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-kabir-dark border border-kabir-green/30 rounded-2xl w-full max-w-5xl mx-4 h-[85vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-kabir-green/30 bg-kabir-darker/50">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-kabir-text">Schedule Your Free Consultation</h3>
            <p className="text-kabir-text-muted text-sm mt-1">Book a 30-minute consultation with Kabir Hafeez</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-kabir-green/20 transition-colors group"
          >
            <svg className="w-6 h-6 text-kabir-text group-hover:text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Calendly Container */}
        <div className="h-full pb-6">
          <div 
            className="calendly-inline-widget w-full h-full" 
            data-url={calendlyUrl}
            style={{ minWidth: '320px', height: 'calc(100% - 80px)' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyPopup;
