import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpaceBackground from '../components/SpaceBackground';
import InteractiveBackground from '../components/InteractiveBackground';

const ThankYouScheduling = () => {
  useEffect(() => {
    // Track the successful scheduling event for analytics
    if (window.gtag) {
      window.gtag('event', 'meeting_scheduled', {
        event_category: 'engagement',
        event_label: 'calendly_booking'
      });
    }

    // Track for Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Schedule', {
        content_name: 'Consultation Meeting',
        content_category: 'Booking'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-kabir text-white relative">
      <SpaceBackground />
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-kabir-green/20 rounded-full flex items-center justify-center border-2 border-kabir-green">
                <svg className="w-12 h-12 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-kabir-green to-kabir-blue bg-clip-text text-transparent">
              Thank You!
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-kabir-text">
              Your Meeting Has Been Successfully Scheduled
            </h2>

            {/* Confirmation Message */}
            <div className="bg-kabir-dark/50 border border-kabir-green/30 rounded-2xl p-8 mb-8 backdrop-blur-sm">
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-kabir-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-kabir-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kabir-text mb-1">Confirmation Email Sent</h3>
                    <p className="text-kabir-text-muted">You'll receive a confirmation email with all the meeting details and a calendar invite.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-kabir-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-kabir-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kabir-text mb-1">Meeting Preparation</h3>
                    <p className="text-kabir-text-muted">I'll review your requirements beforehand to make our consultation as productive as possible.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-kabir-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-kabir-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kabir-text mb-1">What to Expect</h3>
                    <p className="text-kabir-text-muted">We'll discuss your goals, challenges, and how I can help grow your business with tailored digital solutions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-kabir-green/10 to-kabir-blue/10 border border-kabir-green/30 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-kabir-text">What's Next?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <h4 className="font-medium text-kabir-green mb-2">Before Our Meeting:</h4>
                  <ul className="space-y-1 text-kabir-text-muted">
                    <li>• Check your email for meeting details</li>
                    <li>• Add the event to your calendar</li>
                    <li>• Prepare any questions you have</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-kabir-green mb-2">During Our Call:</h4>
                  <ul className="space-y-1 text-kabir-text-muted">
                    <li>• Discuss your business goals</li>
                    <li>• Explore growth opportunities</li>
                    <li>• Get personalized recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="px-8 py-3 bg-kabir-green text-kabir-dark font-semibold rounded-lg hover:bg-kabir-green/90 transition-colors"
              >
                Back to Home
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-3 border border-kabir-green text-kabir-green font-semibold rounded-lg hover:bg-kabir-green/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-kabir-green/20">
              <p className="text-kabir-text-muted mb-4">
                Need to reschedule or have questions?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a 
                  href="mailto:mail@kabirhafeez.co" 
                  className="text-kabir-green hover:text-kabir-green/80 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  mail@kabirhafeez.co
                </a>
                
                <span className="text-kabir-text-muted hidden sm:inline">•</span>
                
                <a 
                  href="https://wa.me/923150180299" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-kabir-green hover:text-kabir-green/80 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default ThankYouScheduling;
