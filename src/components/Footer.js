import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
    // You can add actual subscription logic here
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-kabir-dark border-t border-kabir-gray/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Subscribe Section - Larger Column */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-black text-kabir-text mb-4">Subscribe</h3>
            <p className="text-kabir-text-muted text-lg mb-6 leading-relaxed">
              Get updates on digital marketing trends and exclusive tips.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-kabir-darker border border-kabir-gray/50 rounded-lg text-kabir-text placeholder-kabir-text-muted focus:outline-none focus:border-kabir-green focus:ring-1 focus:ring-kabir-green transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="btn-secondary px-8 py-3"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-kabir-text-muted text-sm">
                By subscribing, you agree to our{' '}
                <Link to="/privacy" className="text-kabir-green hover:text-kabir-green-light transition-colors duration-300">
                  Privacy Policy
                </Link>
              </p>
            </form>
            
          </div>

          {/* Contact Us Section - Smaller Column */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-black text-kabir-text mb-6">Contact Us</h3>
            <div className="space-y-4">
              {/* <div className="flex items-center space-x-3">
                <FaPhone className="text-kabir-green text-lg" />
                <a 
                  href="tel:07999624788" 
                  className="text-kabir-text hover:text-kabir-green transition-colors duration-300"
                >
                  07999624788
                </a>
              </div> */}
              
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-kabir-green text-lg mt-1" />
                <a 
                  href="mailto:mail@kabirhafeez.co" 
                  className="text-kabir-text hover:text-kabir-green transition-colors duration-300 break-all"
                >
                  mail@kabirhafeez.co
                </a>
              </div>
              
                 {/* Social Media Icons */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-kabir-text mb-4">Follow Us</h4>
              <div className="flex space-x-4">
              <a 
                  href="https://linkedin.com/in/kabirhafeez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-kabir-darker border border-kabir-gray/50 rounded-lg flex items-center justify-center hover:border-kabir-green hover:bg-kabir-green/10 transition-all duration-300 hover:scale-110 group"
                >
                  <FaLinkedinIn className="text-lg text-kabir-text-muted group-hover:text-kabir-green transition-colors duration-300" />
                </a>
                <a 
                  href="https://instagram.com/kabirhafeez.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-kabir-darker border border-kabir-gray/50 rounded-lg flex items-center justify-center hover:border-kabir-green hover:bg-kabir-green/10 transition-all duration-300 hover:scale-110 group"
                >
                  <FaInstagram className="text-lg text-kabir-text-muted group-hover:text-kabir-green transition-colors duration-300" />
                </a>
                <a 
                  href="https://facebook.com/kabirhafeez.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-kabir-darker border border-kabir-gray/50 rounded-lg flex items-center justify-center hover:border-kabir-green hover:bg-kabir-green/10 transition-all duration-300 hover:scale-110 group"
                >
                  <FaFacebookF className="text-lg text-kabir-text-muted group-hover:text-kabir-green transition-colors duration-300" />
                </a>
                <a 
                  href="https://www.youtube.com/@kabirhafeez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-kabir-darker border border-kabir-gray/50 rounded-lg flex items-center justify-center hover:border-kabir-green hover:bg-kabir-green/10 transition-all duration-300 hover:scale-110 group"
                >
                  <FaYoutube className="text-lg text-kabir-text-muted group-hover:text-kabir-green transition-colors duration-300" />
                </a>
                <a 
                  href="https://behance.net/kabirhafeez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-kabir-darker border border-kabir-gray/50 rounded-lg flex items-center justify-center hover:border-kabir-green hover:bg-kabir-green/10 transition-all duration-300 hover:scale-110 group"
                >
                  <FaBehance className="text-lg text-kabir-text-muted group-hover:text-kabir-green transition-colors duration-300" />
                </a>
              
              </div>
            </div>

              
              
            </div>
          </div>

          {/* Quick Links Section - Smaller Column */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-black text-kabir-text mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-kabir-text-muted hover:text-kabir-green transition-colors duration-300 hover:translate-x-1 transform transition-transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-kabir-gray/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-kabir-text-muted">
              © {new Date().getFullYear()} Kabir Hafeez. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
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
                to="/cookies" 
                className="text-kabir-text-muted hover:text-kabir-green transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
