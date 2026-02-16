import React, { useState } from 'react';
import CalendlyPopup from './CalendlyPopup';

// CSS for yellow glow animation - same as Hero component
const glowStyles = `
  @keyframes yellowGlow {
    0% {
      box-shadow: 0 0 8px rgba(255, 255, 0, 0.3), 0 0 16px rgba(255, 255, 0, 0.2), 0 0 24px rgba(255, 255, 0, 0.1);
    }
    100% {
      box-shadow: 0 0 12px rgba(255, 255, 0, 0.4), 0 0 20px rgba(255, 255, 0, 0.3), 0 0 32px rgba(255, 255, 0, 0.2);
    }
  }
  
  .yellow-glow-button {
    animation: yellowGlow 2s ease-in-out infinite alternate;
    background-color: transparent !important;
    border: 2px solid #00ff88 !important;
    color: #00ff88 !important;
  }
  
  .yellow-glow-button:hover {
    box-shadow: 0 0 16px rgba(255, 255, 0, 0.5), 0 0 24px rgba(255, 255, 0, 0.4), 0 0 40px rgba(255, 255, 0, 0.3) !important;
    background-color: rgba(0, 255, 136, 0.1) !important;
  }
`;

const CalendlyButton = ({ 
  packageName, 
  className = "",
  buttonText = "Book Free Consultation",
  calendlyUrl = "https://calendly.com/kabirhafeez/kabirhafeez-co-consultation"
}) => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleBookConsultation = () => {
    setIsCalendlyOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      {/* Inject CSS for yellow glow animation */}
      <style dangerouslySetInnerHTML={{ __html: glowStyles }} />
      
      <div className="text-center">
        <button
          onClick={handleBookConsultation}
          className="yellow-glow-button w-full py-3 px-6 rounded-lg font-semibold text-base transition-all duration-300 relative overflow-hidden group"
        >
          <span>{buttonText}</span>
          {/* Subtle glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-yellow-300/10 to-yellow-400/5 opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
        </button>
        
        <p className="mt-2 text-sm text-kabir-text-muted">
          Free 30-minute consultation • No commitment required
        </p>
      </div>

      <CalendlyPopup 
        isOpen={isCalendlyOpen}
        onClose={handleCloseCalendly}
        calendlyUrl={calendlyUrl}
      />
    </>
  );
};

export default CalendlyButton;
