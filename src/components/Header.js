import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CalendlyPopup from './CalendlyPopup';

// CSS for yellow glow animation - same as other components
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const user = null;
  const isAuthenticated = false;

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBookConsultation = () => {
    setIsCalendlyOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Inject CSS for yellow glow animation */}
      <style dangerouslySetInnerHTML={{ __html: glowStyles }} />
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-kabir-dark/95 backdrop-blur-xl border-b border-kabir-green/30 shadow-2xl shadow-kabir-green/5' 
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Link to="/" className="group flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/assets/whitelogo.png" 
                  alt="Kabir Hafeez" 
                  className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-kabir-green/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center bg-kabir-darker/50 backdrop-blur-md rounded-full px-8 py-3 border border-kabir-green/20">
              <div className="flex items-center space-x-1">
                <Link
                  to="/"
                  className="px-4 py-2 text-white hover:text-kabir-green transition-all duration-300 font-medium relative group rounded-full hover:bg-kabir-green/10"
                >
                  Home
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-kabir-green transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </Link>
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <Link
                    to="/services"
                    className="px-4 py-2 text-white hover:text-kabir-green transition-all duration-300 font-medium relative group rounded-full hover:bg-kabir-green/10 flex items-center"
                  >
                    Services
                    <svg className="w-4 h-4 ml-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-kabir-green transition-all duration-300 group-hover:w-6 rounded-full"></span>
                  </Link>
                  
                  {/* Services Dropdown */}
                  {isServicesDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-64 z-50">
                      {/* Invisible bridge to prevent gap issues */}
                      <div className="h-2 w-full"></div>
                      <div className="bg-kabir-darker/95 backdrop-blur-xl border border-kabir-green/30 rounded-xl shadow-2xl shadow-kabir-green/10 py-4">
                        <Link
                          to="/services/social-media-management"
                          className="flex items-center px-4 py-3 text-kabir-text-muted hover:text-kabir-green hover:bg-kabir-green/10 transition-all duration-200 text-sm"
                        >
                          <svg className="w-5 h-5 text-kabir-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          Social Media Management
                        </Link>
                        <Link
                          to="/services/meta-google-ads"
                          className="flex items-center px-4 py-3 text-kabir-text-muted hover:text-kabir-green hover:bg-kabir-green/10 transition-all duration-200 text-sm"
                        >
                          <svg className="w-5 h-5 text-kabir-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Meta & Google Ads
                        </Link>
                        <Link
                          to="/services/seo-optimization"
                          className="flex items-center px-4 py-3 text-kabir-text-muted hover:text-kabir-green hover:bg-kabir-green/10 transition-all duration-200 text-sm"
                        >
                          <svg className="w-5 h-5 text-kabir-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          SEO Optimization
                        </Link>
                        <Link
                          to="/services/website-development"
                          className="flex items-center px-4 py-3 text-kabir-text-muted hover:text-kabir-green hover:bg-kabir-green/10 transition-all duration-200 text-sm"
                        >
                          <svg className="w-5 h-5 text-kabir-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Website Development
                        </Link>
                        <Link
                          to="/services/consulting-strategy"
                          className="flex items-center px-4 py-3 text-kabir-text-muted hover:text-kabir-green hover:bg-kabir-green/10 transition-all duration-200 text-sm"
                        >
                          <svg className="w-5 h-5 text-kabir-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Consulting & Strategy
                        </Link>
                        <Link
                          to="/services/ai-automations"
                          className="flex items-center px-4 py-3 text-kabir-text-muted hover:text-kabir-green hover:bg-kabir-green/10 transition-all duration-200 text-sm"
                        >
                          <svg className="w-5 h-5 text-kabir-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                          AI & Automations
                        </Link>

                      </div>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <Link
                    to="/special-offers"
                    className="px-4 py-2 text-white hover:text-kabir-green transition-all duration-300 font-medium relative group rounded-full hover:bg-kabir-green/10 special-offers-blink"
                  >
                    Special Offers
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-kabir-green transition-all duration-300 group-hover:w-6 rounded-full"></span>
                  </Link>
                  {/* New Tag */}
                  <div className="absolute -top-4 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg z-10">
                    NEW
                  </div>
                </div>
                <Link
                  to="/portfolio"
                  className="px-4 py-2 text-white hover:text-kabir-green transition-all duration-300 font-medium relative group rounded-full hover:bg-kabir-green/10"
                >
                  Portfolio
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-kabir-green transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-2 text-white hover:text-kabir-green transition-all duration-300 font-medium relative group rounded-full hover:bg-kabir-green/10"
                >
                  About
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-kabir-green transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 text-white hover:text-kabir-green transition-all duration-300 font-medium relative group rounded-full hover:bg-kabir-green/10"
                >
                  Contact
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-kabir-green transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </Link>
              </div>
            </div>

            {/* Enhanced Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3 bg-kabir-darker/50 backdrop-blur-md rounded-full px-4 py-2 border border-kabir-green/20">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-kabir-green to-kabir-green-dark rounded-full flex items-center justify-center text-xs font-bold text-kabir-dark shadow-lg">
                        {user?.first_name?.[0]}{user?.last_name?.[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-kabir-text text-sm font-medium">{user?.first_name}</span>
                        <span className="text-kabir-text-muted text-xs">Online</span>
                      </div>
                    </div>
                    <div className="w-px h-6 bg-kabir-green/20"></div>
                    <div className="w-px h-6 bg-kabir-green/20"></div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Mobile Consultation Button - Only visible when scrolled */}
            {isScrolled && (
              <button
                onClick={handleBookConsultation}
                className="yellow-glow-button md:hidden mr-2 px-4 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap relative overflow-hidden group"
              >
                Book Free Call
                {/* Subtle glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-yellow-300/10 to-yellow-400/5 opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
              </button>
            )}

            {/* Enhanced Mobile menu button */}
            <button
              className="md:hidden relative w-10 h-10 bg-kabir-darker/50 backdrop-blur-md rounded-full border border-kabir-green/20 flex items-center justify-center text-kabir-text-muted hover:text-kabir-green transition-all duration-300 hover:bg-kabir-green/10 hover:border-kabir-green/40"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-4 pb-4 space-y-2 bg-kabir-darker/95 backdrop-blur-xl rounded-2xl mt-4 border border-kabir-green/30 shadow-2xl shadow-kabir-green/10">
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className="flex items-center px-4 py-3 text-white hover:text-kabir-green transition-all duration-300 font-medium rounded-xl hover:bg-kabir-green/10 group"
                >
                  <span className="w-2 h-2 bg-kabir-green/50 rounded-full mr-3 group-hover:bg-kabir-green transition-colors duration-300"></span>
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={handleNavClick}
                  className="flex items-center px-4 py-3 text-white hover:text-kabir-green transition-all duration-300 font-medium rounded-xl hover:bg-kabir-green/10 group"
                >
                  <span className="w-2 h-2 bg-kabir-green/50 rounded-full mr-3 group-hover:bg-kabir-green transition-colors duration-300"></span>
                  Services
                </Link>

                <div className="relative">
                  <Link
                    to="/special-offers"
                    onClick={handleNavClick}
                    className="flex items-center px-4 py-3 text-white hover:text-kabir-green transition-all duration-300 font-medium rounded-xl hover:bg-kabir-green/10 group special-offers-blink"
                  >
                    <span className="w-2 h-2 bg-kabir-green/50 rounded-full mr-3 group-hover:bg-kabir-green transition-colors duration-300"></span>
                    Special Offers
                  </Link>
                  {/* New Tag */}
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg z-10">
                    NEW
                  </div>
                </div>
                <Link
                  to="/portfolio"
                  onClick={handleNavClick}
                  className="flex items-center px-4 py-3 text-white hover:text-kabir-green transition-all duration-300 font-medium rounded-xl hover:bg-kabir-green/10 group"
                >
                  <span className="w-2 h-2 bg-kabir-green/50 rounded-full mr-3 group-hover:bg-kabir-green transition-colors duration-300"></span>
                  Portfolio
                </Link>
                <Link
                  to="/about"
                  onClick={handleNavClick}
                  className="flex items-center px-4 py-3 text-white hover:text-kabir-green transition-all duration-300 font-medium rounded-xl hover:bg-kabir-green/10 group"
                >
                  <span className="w-2 h-2 bg-kabir-green/50 rounded-full mr-3 group-hover:bg-kabir-green transition-colors duration-300"></span>
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="flex items-center px-4 py-3 text-white hover:text-kabir-green transition-all duration-300 font-medium rounded-xl hover:bg-kabir-green/10 group"
                >
                  <span className="w-2 h-2 bg-kabir-green/50 rounded-full mr-3 group-hover:bg-kabir-green transition-colors duration-300"></span>
                  Contact
                </Link>
                  
                {/* Auth Buttons - Mobile */}
                <div className="border-t border-kabir-green/20 pt-4 mt-4">
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <div className="px-3 py-2 text-kabir-text-muted text-sm">
                        Welcome, {user?.first_name}!
                      </div>
                      <div className="px-3 py-2 flex items-center space-x-2 bg-kabir-green/10 rounded-lg border border-kabir-green/30 mb-2">
                        <div className="w-6 h-6 bg-kabir-green rounded-full flex items-center justify-center text-xs font-bold text-kabir-dark">
                          {user?.first_name?.[0]}{user?.last_name?.[0]}
                        </div>
                        <span className="text-sm text-white">{user?.first_name}</span>
                      </div>

                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Calendly Popup */}
      <CalendlyPopup 
        isOpen={isCalendlyOpen}
        onClose={handleCloseCalendly}
        calendlyUrl="https://calendly.com/kabirhafeez/kabirhafeez-co-consultation"
      />
    </>
  );
};

export default Header;
