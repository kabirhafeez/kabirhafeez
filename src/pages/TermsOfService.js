import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-kabir-bg text-kabir-text">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-kabir-dark via-kabir-dark to-kabir-green-dark py-20 pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-kabir-green to-kabir-green-light bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-kabir-text-muted max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By using our services, you agree to these terms.
          </p>
          <p className="text-sm text-kabir-text-muted mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Agreement to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Agreement to Terms</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                By accessing and using the services provided by Kabir Hafeez ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-kabir-text-muted">
                If you do not agree to abide by the above, please do not use this service. These terms apply to all visitors, users, and others who access or use our services.
              </p>
            </div>
          </section>

          {/* Services Description */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Our Services</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Digital Marketing Services</h3>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Social Media Management</li>
                  <li>Meta & Google Ads Management</li>
                  <li>SEO Optimization</li>
                  <li>Content Creation and Strategy</li>
                </ul>
              </div>

              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Technical Services</h3>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Website Development</li>
                  <li>AI Automation Solutions</li>
                  <li>Business Consulting & Strategy</li>
                  <li>Digital Product Development</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">User Responsibilities</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li>Provide accurate and complete information when registering or using our services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes and in accordance with these terms</li>
                <li>Not interfere with or disrupt the integrity or performance of our services</li>
                <li>Not attempt to gain unauthorized access to our systems or networks</li>
                <li>Respect intellectual property rights and not infringe on copyrights or trademarks</li>
                <li>Provide timely feedback and cooperation during service delivery</li>
              </ul>
            </div>
          </section>

          {/* Service Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Service Terms and Conditions</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Project Scope</h3>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Services will be delivered as outlined in project agreements</li>
                  <li>Scope changes require written approval and may incur additional costs</li>
                  <li>Timelines are estimates and may vary based on project complexity</li>
                  <li>Client cooperation is required for timely delivery</li>
                </ul>
              </div>

              <div className="bg-kabir-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-kabir-green mb-4">Payment Terms</h3>
                <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                  <li>Payment schedules will be outlined in service agreements</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>All prices are subject to applicable taxes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Intellectual Property Rights</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-kabir-green mb-4">Our Content</h3>
              <p className="text-kabir-text-muted mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive property of Kabir Hafeez and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
              
              <h3 className="text-xl font-semibold text-kabir-green mb-4">Client Content</h3>
              <p className="text-kabir-text-muted mb-4">
                Upon full payment, clients retain ownership of content created specifically for them. However, we reserve the right to:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li>Use project work in our portfolio and marketing materials</li>
                <li>Retain copies of work for our records and quality assurance</li>
                <li>Use general methodologies and know-how in future projects</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Limitation of Liability</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                In no event shall Kabir Hafeez, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or personal information</li>
                <li>Any interruption or cessation of transmission to or from our service</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted through our service</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the service</li>
              </ul>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Disclaimers</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-kabir-green mb-4">Service Availability</h3>
              <p className="text-kabir-text-muted mb-4">
                We strive to provide uninterrupted service but cannot guarantee 100% uptime. Services may be temporarily unavailable for maintenance, updates, or due to circumstances beyond our control.
              </p>
              
              <h3 className="text-xl font-semibold text-kabir-green mb-4">Results Disclaimer</h3>
              <p className="text-kabir-text-muted mb-4">
                While we work diligently to achieve the best possible results, we cannot guarantee specific outcomes from our marketing or development services. Results may vary based on market conditions, competition, and other factors beyond our control.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Termination</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the terms.
              </p>
              <p className="text-kabir-text-muted mb-4">
                You may terminate your use of our services at any time by contacting us. Upon termination:
              </p>
              <ul className="list-disc list-inside text-kabir-text-muted space-y-2">
                <li>Your right to use the service will cease immediately</li>
                <li>Any outstanding payments become due immediately</li>
                <li>We may retain your information as required by law or for legitimate business purposes</li>
                <li>Completed work will be delivered according to the terms of your service agreement</li>
              </ul>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Governing Law</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted">
                These terms shall be interpreted and governed by the laws of the jurisdiction in which our business operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Changes to Terms</h2>
            
            <div className="bg-kabir-card rounded-lg p-6">
              <p className="text-kabir-text-muted mb-4">
                We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-kabir-text-muted">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-kabir-text mb-6">Contact Information</h2>
            
            <div className="bg-gradient-to-r from-kabir-green/10 to-kabir-green-light/10 rounded-lg p-6 border border-kabir-green/20">
              <p className="text-kabir-text-muted mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">General Inquiries</h4>
                  <p className="text-kabir-text-muted">Email: mail@kabirhafeez.co</p>
                </div>
                <div>
                  <h4 className="font-semibold text-kabir-green mb-2">Business Address</h4>
                  <p className="text-kabir-text-muted">Kabir Hafeez Digital Solutions</p>
                  <p className="text-kabir-text-muted">Response time: 24-48 hours</p>
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

export default TermsOfService;
