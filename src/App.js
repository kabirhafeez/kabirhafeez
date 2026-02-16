import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { usePageTracking } from './hooks/usePageTracking';
import GTMPageTracker from './components/GTMPageTracker';
import MetaPixelTracker from './components/MetaPixelTracker';
import Loading from './components/Loading';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import SpaceBackground from './components/SpaceBackground';
import About from './components/About';
import WhatsAppButton from './components/WhatsAppButton';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import MetaGoogleAds from './pages/services/MetaGoogleAds';
import SEOOptimization from './pages/services/SEOOptimization';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import ConsultingStrategy from './pages/services/ConsultingStrategy';
import AIAutomations from './pages/services/AIAutomations';
import FreelanceMentorship from './pages/services/FreelanceMentorship';
import Services from './pages/Services';
import SpecialOffers from './pages/SpecialOffers';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs';
import ThankYouScheduling from './pages/ThankYouScheduling';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Track page views for GTM
  usePageTracking();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ScrollToTop />
      <GTMPageTracker />
      <MetaPixelTracker />
      <Routes>
          {/* Homepage Route */}
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              {/* <SpaceBackground /> */}
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <Hero />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          {/* Services Main Page */}
          <Route path="/services" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <Services />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          
          {/* Special Offers Page */}
          <Route path="/special-offers" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <SpecialOffers />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          {/* Portfolio Page */}
          <Route path="/portfolio" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <Portfolio />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          {/* Individual Service Pages */}
          <Route path="/services/social-media-management" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <SocialMediaManagement />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          <Route path="/services/meta-google-ads" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <MetaGoogleAds />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          <Route path="/services/seo-optimization" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <SEOOptimization />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          <Route path="/services/website-development" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <WebsiteDevelopment />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          <Route path="/services/consulting-strategy" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <ConsultingStrategy />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          <Route path="/services/freelance-mentorship" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <FreelanceMentorship />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          <Route path="/services/ai-automations" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <AIAutomations />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          <Route path="/about" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <About />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />

          <Route path="/contact" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <ContactUs />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          <Route path="/thank-you-scheduling" element={<ThankYouScheduling />} />
          
          <Route path="/privacy" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <PrivacyPolicy />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          <Route path="/terms" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <TermsOfService />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
          
          <Route path="/cookies" element={
            <div className="min-h-screen bg-gradient-kabir text-white relative">
              <SpaceBackground />
              <InteractiveBackground />
              <div className="relative z-10">
                <Header />
                <CookiePolicy />
                <Footer />
              </div>
              <WhatsAppButton />
            </div>
          } />
      </Routes>
    </>
  );
}

export default App;
