import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-kabir-bg text-kabir-text">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-kabir-dark via-kabir-dark to-kabir-green-dark py-20 pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-kabir-green to-kabir-green-light bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-kabir-text-muted max-w-2xl mx-auto">
            This policy explains how we use cookies and similar technologies on our website.
          </p>
          <p className="text-sm text-kabir-text-muted mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* What Are Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">What Are Cookies?</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and improving our services.
              </p>
              <p className="text-kabir-text-muted">
                Cookies cannot harm your device or files. They contain information about your browsing activity and preferences, but they cannot access personal files or install software on your device.
              </p>
            </div>
          </section>

          {/* Types of Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Types of Cookies We Use</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Essential Cookies</h3>
                <p className="text-kabir-text-muted mb-3">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Authentication and security</li>
                  <li>Session management</li>
                  <li>Load balancing</li>
                  <li>Form submission</li>
                </ul>
              </div>

              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Analytics Cookies</h3>
                <p className="text-kabir-text-muted mb-3">
                  Help us understand how visitors interact with our website by collecting anonymous information.
                </p>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Page views and traffic sources</li>
                  <li>User behavior patterns</li>
                  <li>Performance monitoring</li>
                  <li>Error tracking</li>
                </ul>
              </div>

              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Functional Cookies</h3>
                <p className="text-kabir-text-muted mb-3">
                  Enable enhanced functionality and personalization based on your preferences.
                </p>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Language preferences</li>
                  <li>Theme settings</li>
                  <li>Login status</li>
                  <li>Form data retention</li>
                </ul>
              </div>

              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Marketing Cookies</h3>
                <p className="text-kabir-text-muted mb-3">
                  Used to deliver relevant advertisements and track campaign effectiveness.
                </p>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Targeted advertising</li>
                  <li>Social media integration</li>
                  <li>Conversion tracking</li>
                  <li>Retargeting campaigns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Third-Party Cookies</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                We may use third-party services that place cookies on your device. These services have their own privacy policies:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-kabir-green mb-3">Analytics Services</h4>
                  <ul className="list-disc list-inside text-kabir-text-muted space-y-1">
                    <li>Google Analytics</li>
                    <li>Hotjar (if applicable)</li>
                    <li>Custom analytics tools</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kabir-green mb-3">Marketing Platforms</h4>
                  <ul className="list-disc list-inside text-kabir-text-muted space-y-1">
                    <li>Google Ads</li>
                    <li>Facebook Pixel</li>
                    <li>LinkedIn Insight Tag</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kabir-green mb-3">Social Media</h4>
                  <ul className="list-disc list-inside text-kabir-text-muted space-y-1">
                    <li>Facebook plugins</li>
                    <li>Twitter widgets</li>
                    <li>LinkedIn buttons</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kabir-green mb-3">Support Tools</h4>
                  <ul className="list-disc list-inside text-kabir-text-muted space-y-1">
                    <li>Live chat services</li>
                    <li>Help desk tools</li>
                    <li>Feedback widgets</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Cookie Duration</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Session Cookies</h3>
                <p className="text-kabir-text-muted mb-3">
                  Temporary cookies that are deleted when you close your browser.
                </p>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Login sessions</li>
                  <li>Shopping cart contents</li>
                  <li>Form data</li>
                  <li>Security tokens</li>
                </ul>
              </div>

              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Persistent Cookies</h3>
                <p className="text-kabir-text-muted mb-3">
                  Remain on your device for a specified period or until manually deleted.
                </p>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>User preferences (30 days - 2 years)</li>
                  <li>Analytics data (2 years)</li>
                  <li>Marketing cookies (30 days - 1 year)</li>
                  <li>Authentication tokens (varies)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Managing Your Cookie Preferences</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-kabir-green mb-4">Browser Settings</h3>
              <p className="text-kabir-text-muted mb-4">
                You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">Desktop Browsers</h4>
                  <ul className="list-disc list-inside text-kabir-text-muted space-y-1">
                    <li>Chrome: Settings → Privacy and security → Cookies</li>
                    <li>Firefox: Options → Privacy & Security</li>
                    <li>Safari: Preferences → Privacy</li>
                    <li>Edge: Settings → Cookies and site permissions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">Mobile Browsers</h4>
                  <ul className="list-disc list-inside text-kabir-text-muted space-y-1">
                    <li>Chrome Mobile: Settings → Site settings → Cookies</li>
                    <li>Safari Mobile: Settings → Safari → Privacy</li>
                    <li>Firefox Mobile: Settings → Data Management</li>
                    <li>Samsung Internet: Settings → Sites and downloads</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Consent */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Your Consent and Choices</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-kabir-green mb-4">Consent Management</h3>
                  <p className="text-kabir-text-muted mb-3">
                    We respect your privacy choices and provide options to manage your cookie preferences.
                  </p>
                  <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                    <li>Accept all cookies</li>
                    <li>Accept only essential cookies</li>
                    <li>Customize cookie categories</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-kabir-green mb-4">Impact of Disabling Cookies</h3>
                  <p className="text-kabir-text-muted mb-3">
                    Disabling certain cookies may affect your browsing experience:
                  </p>
                  <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                    <li>Login functionality may not work</li>
                    <li>Preferences won't be saved</li>
                    <li>Some features may be unavailable</li>
                    <li>Personalization will be limited</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Basis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Legal Basis for Cookie Use</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-kabir-green mb-3">Necessary Cookies</h4>
                  <p className="text-sm text-kabir-text-muted">
                    <strong>Legal Basis:</strong> Legitimate interest for website functionality and security.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kabir-green mb-3">Analytics Cookies</h4>
                  <p className="text-sm text-kabir-text-muted">
                    <strong>Legal Basis:</strong> Consent or legitimate interest for improving our services.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kabir-green mb-3">Marketing Cookies</h4>
                  <p className="text-sm text-kabir-text-muted">
                    <strong>Legal Basis:</strong> Consent for personalized advertising and marketing communications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Updates to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Updates to This Policy</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. When we make significant changes, we will:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li>Update the "Last updated" date at the top of this policy</li>
                <li>Notify you through our website or email if required by law</li>
                <li>Request renewed consent for new cookie categories if necessary</li>
                <li>Provide clear information about what has changed</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Contact Us About Cookies</h2>
            
            <div className="bg-gradient-to-r from-kabir-green/10 to-kabir-green-light/10 rounded-lg p-6 border border-kabir-green/20">
              <p className="text-kabir-text-muted mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">General Inquiries</h4>
                  <p className="text-kabir-text-muted">Email: mail@kabirhafeez.co</p>
                  <p className="text-kabir-text-muted">Response time: 24-48 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">Privacy Concerns</h4>
                  <p className="text-kabir-text-muted">Email: mail@kabirhafeez.co</p>
                  <p className="text-kabir-text-muted">Subject: Cookie Policy Inquiry</p>
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  to="/services" 
                  className="inline-flex items-center px-6 py-3 bg-kabir-green hover:bg-kabir-green-light text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Contact Us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-kabir-card border-t border-kabir-green/20 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-kabir-text-muted hover:text-kabir-green transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-kabir-text-muted hover:text-kabir-green transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                to="/services" 
                className="text-kabir-text-muted hover:text-kabir-green transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
            <Link 
              to="/" 
              className="text-kabir-green hover:text-kabir-green-light transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
