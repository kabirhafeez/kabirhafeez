import React, { useState } from 'react';

const PurchaseButton = ({ packageId, packageName, price, className = "" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePurchase = async () => {
    setIsLoading(true);
    setMessage('');
    
    // Simulate processing for better UX
    setTimeout(() => {
      setMessage('Thank you for your interest! Please contact us directly to purchase this package.');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="text-center">
      <button
        onClick={handlePurchase}
        disabled={isLoading}
        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <span>Get Started</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
            </svg>
          </div>
        )}
      </button>
      
      {message && (
        <div className={`mt-3 p-3 rounded-lg text-sm ${
          message.includes('Thank you') 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : 'bg-red-500/20 text-red-400 border border-red-500/30'
        }`}>
          {message}
        </div>
      )}
      
      {/* Price display */}
      {price && (
        <p className="mt-2 text-sm text-kabir-text-muted">
          Contact for pricing • ${price} USD
        </p>
      )}
    </div>
  );
};

export default PurchaseButton;
