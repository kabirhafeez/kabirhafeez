import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-kabir-bg text-kabir-text">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-kabir-dark via-kabir-dark to-kabir-green-dark py-20 pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-kabir-green to-kabir-green-light bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-kabir-text-muted max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-kabir-text-muted mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Information We Collect</h2>
            
            <div className="bg-kabir-card rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-kabir-green mb-4">Personal Information</h3>
              <p className="text-kabir-text-muted mb-4">
                When you interact with our services, we may collect the following personal information:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Business information (company name, job title, industry)</li>
                <li>Project requirements and consultation details</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>
            </div>

            <div className="bg-kabir-card rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-kabir-green mb-4">Technical Information</h3>
              <p className="text-kabir-text-muted mb-4">
                We automatically collect certain technical information when you visit our website:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referral sources and search terms</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">How We Use Your Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Service Delivery</h3>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Provide digital marketing and automation services</li>
                  <li>Respond to inquiries and consultation requests</li>
                  <li>Deliver project updates and communications</li>
                  <li>Process payments and manage accounts</li>
                </ul>
              </div>

              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Business Operations</h3>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Improve our website and services</li>
                  <li>Send relevant marketing communications</li>
                  <li>Analyze usage patterns and preferences</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Information Sharing and Disclosure</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li><strong>Service Providers:</strong> Trusted third-party services that help us operate our business (hosting, analytics, payment processing)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
                <li><strong>Consent:</strong> When you have given explicit consent for specific sharing purposes</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Data Security</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                </ul>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Data backup and recovery procedures</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response protocols</li>
                  <li>Regular software updates and patches</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Your Rights and Choices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Data Rights</h3>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request data deletion</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                </ul>
              </div>

              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Communication Preferences</h3>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Unsubscribe from marketing emails</li>
                  <li>Opt-out of cookies (may affect functionality)</li>
                  <li>Update contact preferences</li>
                  <li>Request communication restrictions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Cookies and Tracking Technologies</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                We use cookies and similar technologies to enhance your browsing experience:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">Essential Cookies</h4>
                  <p className="text-sm text-kabir-text-muted">Required for website functionality and security</p>
                </div>
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-kabir-text-muted">Help us understand website usage and improve performance</p>
                </div>
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">Marketing Cookies</h4>
                  <p className="text-sm text-kabir-text-muted">Enable personalized content and advertising</p>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Third-Party Services</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                Our website may integrate with third-party services that have their own privacy policies:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Payment processors for secure transactions</li>
                <li>Email service providers for communications</li>
                <li>Social media platforms for content sharing</li>
                <li>Cloud hosting and storage services</li>
              </ul>
              <p className="text-kabir-text-muted mt-4">
                We encourage you to review the privacy policies of these third-party services.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Data Retention</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li>Provide our services and support</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services and user experience</li>
              </ul>
              <p className="text-kabir-text-muted mt-4">
                When information is no longer needed, we securely delete or anonymize it according to our data retention schedule.
              </p>
            </div>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">International Data Transfers</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data during international transfers, 
                including standard contractual clauses and adequacy decisions where applicable.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Children's Privacy</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted">
                Our services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If we become aware that we have collected personal 
                information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Policy Updates</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                When we make significant changes, we will:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li>Post the updated policy on our website</li>
                <li>Update the "Last updated" date</li>
                <li>Notify you via email for material changes</li>
                <li>Provide a summary of key changes</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Contact Us</h2>
            
            <div className="bg-gradient-to-r from-kabir-green/10 to-kabir-green-light/10 rounded-lg p-6 border border-kabir-green/20">
              <p className="text-kabir-text-muted mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">General Inquiries</h4>
                  <p className="text-kabir-text-muted">Email: mail@kabirhafeez.co</p>
                </div>
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">Data Protection Officer</h4>
                  <p className="text-kabir-text-muted">Email: mail@kabirhafeez.co</p>
                  <p className="text-kabir-text-muted">Response time: 48 hours</p>
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

export default PrivacyPolicy;
